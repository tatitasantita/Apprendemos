import React from "react";
import loginImg from "../../login.svg";
import Students from "../../students.png";

import { userActions } from "../_actions";
import { connect } from "react-redux";
import Table from "./helpers/table";
import Loading from "../loading";
import Header from "./helpers/header";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graphUsers: undefined,
      graphChanged: false,
      user: localStorage.getItem("user")
    };
  }

  componentDidMount() {
    this.props.getUsers();
    if (
      this.state.user &&
      this.state.graphUsers == undefined &&
      !this.state.graphChanged
    ) {
      this.setState({
        graphUsers: this.props.getUsersByType(this.props.user[0].user_type),
        graphChanged: true
      });
    }
  }
  handleDeleteUser(id) {
    return e => this.props.deleteUser(id);
  }

  getCredentials(user) {
    switch (user.type) {
      case "Student":
        this.getTeacher(user.id);
        break;
      case "Parent":
        this.getStudentCredentials(user.id);
        break;
      case "Teacher":
        this.getStudents(user.id);
      default:
      // handle error
    }
  }

  getStudents() {
    return this.props.getUsersByType("Student");
  }

  getTeachers() {
    return this.props.getUsersByType("Teacher");
  }

  getStudentCredentials() {
    const { users } = this.props;
  }

  render() {
    if (this.props.users.loading == undefined) {
      return <Loading />;
    }

    if (this.props.users.loading == true) {
      return <Loading />;
    }

    let users = this.props.users;
    console.log(this.state.user);

    return (
      <div>
        <div>
          <h1>
            <img src={loginImg}></img>
          </h1>
          <Header />
        </div>
        <div>
          <Table
            users={this.state.graphUsers ? this.state.graphUsers : users}
          />
        </div>
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
  getUsers: userActions.getAll,
  getUsersByType: userActions.getUsersByType,
  deleteUser: userActions.delete
};

const connectedHomePage = connect(mapState, actionCreators)(Home);
export { connectedHomePage as Home };
