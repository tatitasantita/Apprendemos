import React from "react";
import loginImg from "../../login.svg";
import Header from "./helpers/header";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "./helpers/styles/filepond.scss";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

registerPlugin(FilePondPluginImagePreview);

export class Learn extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>
          <img src={loginImg}></img>
        </h1>

        <Header />
        <div className="outerFilePond">
          <div className="filePond">
            <FilePond
              allowMultiple={true}
              server={{
                process: {
                  url: "http://localhost:3000/addFile",
                  method: "POST",
                  withCredentials: false,
                  headers: { "Access-Control-Allow-Origin": "*" },
                  timeout: 7000,
                  onload: null,
                  onerror: null,
                  ssl: true
                }
              }}
            />
          </div>
        </div>
        <h1>
          <p> Teachers will be able to upload supplemental content.</p>
        </h1>
      </div>
    );
  }
}
