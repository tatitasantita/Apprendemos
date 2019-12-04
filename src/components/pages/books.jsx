import React from "react";
import loginImg from "../../login.svg";

export class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>

        <nav class="mynav">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/learn">Learn</a>
            </li>
            <li>
              <a href="/chat">Chat</a>
            </li>
            <li>
              <a href="login/">Logout</a>
            </li>
          </ul>
        </nav>
        <body>
          {" "}
          Teachers will be able to upload books for students to read.
        </body>
      </div>
    );
  }
}
