import React from "react";

const Header = props => {
  return (
    <nav className="mynav">
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
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
