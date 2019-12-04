import React from "react";
import loginImg from "../../login.svg";


export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1><img src= {loginImg}></img></h1>

          <nav class="mynav">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/books">Books</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/learn">Learn</a></li>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </nav>
          <body> Coming soon! </body>
          </div>
    );
  }
}