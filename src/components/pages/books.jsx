import React from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";
import Loading from "../loading";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import BookList from "./helpers/bookList";

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user"))[0],
      title: "",
      author: "",
      language: "",
      link: "",
      date: "",
      books: undefined,
      uploaded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllBooks();

    this.setState({ books: this.props.users.items });
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ uploaded: true });
    const uploaded_on = this.getCurrentDate();

    const { title, author, language, link } = this.state;

    const book = {
      title,
      author,
      language,
      link,
      uploaded_on,
      teacher_id: this.state.user.id
    };

    console.log(book);
    if (title && author && language && link) {
      this.props.addBook(book);
      this.setState({ books: this.props.getAllBooks() });
    }

    window.location.reload(false);

    console.log(this.state.books);
  }

  getCurrentDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    return today;
  }

  getUploader() {
    const { uploaded, title, link, author, language } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div
          className={"form-group" + (uploaded && !title ? " has-error" : "")}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          {uploaded && !title && (
            <div className="help-block">
              {" "}
              <font color="red">Title is required</font>
            </div>
          )}
        </div>

        <div
          className={"form-group" + (uploaded && !author ? " has-error" : "")}
        >
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          {uploaded && !author && (
            <div className="help-block">
              <font color="red">Author is required</font>
            </div>
          )}
        </div>

        <div
          className={"form-group" + (uploaded && !language ? " has-error" : "")}
        >
          <label htmlFor="language">Language</label>
          <input
            type="text"
            className="form-control"
            name="language"
            value={language}
            onChange={this.handleChange}
          />
          {uploaded && !language && (
            <div className="help-block">
              {" "}
              <font color="red">Language is required</font>
            </div>
          )}
        </div>

        <div className={"form-group" + (uploaded && !link ? " has-error" : "")}>
          <label htmlFor="title">Link</label>
          <input
            type="text"
            className="form-control"
            name="link"
            value={link}
            onChange={this.handleChange}
          />
          {uploaded && !link && (
            <div className="help-block">
              {" "}
              <font color="red">Link is required</font>
            </div>
          )}
        </div>

        <div className="footer">
          <button className="btn btn-primary">Upload</button>
        </div>
      </form>
    );
  }

  getUploaderReplacement() {
    return (
      <div>
        <h1>
          See your learning possibilities below, {this.state.user.first_name}
        </h1>
      </div>
    );
  }

  render() {
    if (this.props.users.loading == undefined) {
      return <Loading />;
    }

    if (this.props.users.loading == true) {
      return <Loading />;
    }
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>

        <Header user={this.state.user} />
        {this.state.user.user_type == "Teacher"
          ? this.getUploader()
          : this.getUploaderReplacement()}
        <h5>
          <p>
            {this.props.users.items && this.state.books == undefined
              ? this.setState({ books: this.props.users.items })
              : console.log(this.state.books)}
            {this.state.books ? (
              <BookList items={this.state.books} />
            ) : (
              <BookList items={this.props.users.items} />
            )}
          </p>
        </h5>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  addBook: userActions.addBook,
  getAllBooks: userActions.getAllBooks
};
const connectedBooksPage = connect(mapState, actionCreators)(Books);

export { connectedBooksPage as Books };
