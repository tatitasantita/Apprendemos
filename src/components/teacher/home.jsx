import React from "react";
import loginImg from "../../login.svg";
import Students from "../../students.png";

import { userActions } from '../_actions';
import { connect } from 'react-redux';


class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
}

handleDeleteUser(id) {
  return (e) => this.props.deleteUser(id);
}

  render() {
    const { user } = this.props;
    console.log(user);
    console.log(this.props);
    return (
        <div>
          <h1><img src= {loginImg}></img></h1>
          <nav className="mynav">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/books">Books</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/learn">Learn</a></li>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </nav>
        

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
  deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(Home);
export { connectedHomePage as Home };