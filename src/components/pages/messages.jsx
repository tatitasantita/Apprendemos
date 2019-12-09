import React from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";

export class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user"))[0]
    };
  }

  render() {
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>

        <Header user={this.state.user} />
        <body> Coming soon! </body>
      </div>
    );
  }
}
