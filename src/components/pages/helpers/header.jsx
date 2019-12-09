import React from "react";

const Header = props => {
  return (
    <nav className="mynav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        {console.log("RIGHT HERE MY G")}
        <RelativeHeader type={props.user.user_type} />
        <li>
          <a href="/messages">Messages</a>
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

const StudentHeader = props => {
  return (
    <li>
      <a href="/learn">Learn</a>
    </li>
  );
};

const ParentHeader = props => {
  return (
    <li>
      <a href="/resources">Resources</a>
    </li>
  );
};

const TeacherHeader = props => {
  return (
    <React.Fragment>
      <li>
        <a href="/learn">Learn</a>
      </li>
      <li>
        <a href="/resources">Resources</a>
      </li>
    </React.Fragment>
  );
};

const RelativeHeader = props => {
  console.log(props.type);
  switch (props.type) {
    case "Teacher":
      return <TeacherHeader />;
    case "Parent":
      return <ParentHeader />;
    case "Student":
      return <StudentHeader />;
    default:
      return <TeacherHeader />;
  }
};

export default Header;
