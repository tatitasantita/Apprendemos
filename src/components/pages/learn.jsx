import React from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "./helpers/styles/filepond.scss";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import Loading from "../loading";
import ResourceList from "./helpers/resourceList";

registerPlugin(FilePondPluginImagePreview);

class Learn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user"))[0],
      title: "",
      link: "",
      uploaded: false,
      date: "",
      file: {},
      resources: undefined,
      receivedResources: false
    };

    console.log(this.state.user);
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllResources();
    this.setState({ resources: this.props.users.items });
  }

  updateResources() {
    this.setState({
      resources: this.props.getAllResources(),
      receivedResources: true
    });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ uploaded: true });
    const uploaded_on = this.getCurrentDate();

    const { title, link } = this.state;

    const resource = {
      title,
      link,
      uploaded_on,
      teacher_id: this.state.user.id
    };

    if (title && link) {
      this.props.addResource(resource);
      this.setState({ resources: this.props.getAllResources() });
    }

    window.location.reload(false);
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
    const { uploaded, title, link } = this.state;

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

        <div className={"form-group" + (uploaded && !link ? " has-error" : "")}>
          <label htmlFor="link">Link</label>
          <input
            type="text"
            className="form-control"
            name="link"
            value={link}
            onChange={this.handleChange}
          />
          {uploaded && !link && (
            <div className="help-block">
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
    const { uploaded, title, link } = this.state;

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
        <div className="flexList">
          <h3>
            {this.props.users.items && this.state.resources == undefined
              ? this.setState({ resources: this.props.users.items })
              : console.log(this.state.resources)}
            {this.state.resources ? (
              <ResourceList items={this.state.resources} />
            ) : (
              <ResourceList items={this.props.users.items} />
            )}{" "}
          </h3>
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
  addResource: userActions.addResource,
  getAllResources: userActions.getAllResources
};
const connectedLearnPage = connect(mapState, actionCreators)(Learn);

export { connectedLearnPage as Learn };
