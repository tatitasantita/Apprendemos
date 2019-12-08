import React, { Component } from "react";
import "./styles/table.scss";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
    return this.props.users.items.map(users => {
      const { id, first_name, last_name } = users;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Students</h1>
        <table id="students">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
