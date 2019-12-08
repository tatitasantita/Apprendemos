const getUsers = (request, response, db) => {
  db.select("*")
    .from("users")
    .then(items => {
      return response.json(items);
    })
    .catch(err => response.status(400).json({ dbError: "db error" }));
};

const getUserById = (request, response, db) => {
  const { user_id } = request.user_id;
  db.select("*")
    .from("users")
    .where({ user_id })
    .returning("*")
    .then(item => {
      response.json(item);
    });
};

const getUserByCredentials = (request, response, db) => {
  const { username, password } = request.body;
  db.select("*")
    .from("users")
    .where({ username, password })
    .returning("*")
    .then(items => {
      return response.json(items);
    });
};

const createUser = (request, response, db) => {
  const { firstName, lastName, username, password, user_type } = request.body;

  db("users")
    .insert({
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      user_type: user_type
    })
    .then(response.status(200).json());
};

const updateUser = (request, response, db) => {
  const { first_name, last_name, user_id } = request.body;
  db("users")
    .where({ user_id })
    .update({ first_name, last_name })
    .returning("*")
    .then(item => {
      response.json(item);
    })
    .catch(err => response.status(400).json({ dbError: "db error" }));
};

const deleteUser = (request, response, db) => {
  const { user_id } = request.user_id;
  db("users")
    .where({ user_id })
    .del()
    .then(() => {
      response.json({ delete: "true" });
    })
    .catch(err => response.status(400).json({ dbError: "db error" }));
};

const getUsersByType = (request, response, db) => {
  const { user_type } = request.body;
  db.select("*")
    .from("users")
    .where({ user_type })
    .returning("*")
    .then(item => {
      return response.json(item);
    })
    .catch(err => response.status(400).json({ dbError: "db error" }));
};

const addFile = (request, respnose, db) => {
  console.log(request);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUsersByType,
  getUserByCredentials,
  addFile
};
