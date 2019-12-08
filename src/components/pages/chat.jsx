import React from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";

export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>

        <Header />
        <body> Coming soon! </body>
      </div>
    );
  }
}
