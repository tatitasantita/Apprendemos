import React, { Component } from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";
import Avatar from "react-avatar";
import "./helpers/styles/profile.scss";

export class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: localStorage.getItem("user")
    };
  }

  componentDidMount() {
    this.setState({ user: JSON.parse(this.state.user) });
  }

  render() {
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>
        <Header />
        <div className="users show">
          <div className="container-fluid main-container">
            <div
              className="banner-container animated fadeInUp-small"
              data-animation="fadeInUp-fadeOutDown-slow"
            >
              <div className="hero-wrapper">
                <header className="hero">
                  <div className="profile-info">
                    <h1 className="hero-title">
                      {"Hey, "}
                      {this.state.user[0].first_name}{" "}
                      {this.state.user[0].last_name}
                    </h1>
                    <p className="hero-description">{this.state.user.type}</p>
                  </div>
                  <button className="avatar avatar--effect-boris">
                    <Avatar src={loginImg} />
                  </button>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
