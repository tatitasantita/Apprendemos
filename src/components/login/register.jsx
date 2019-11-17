import React from "react";
import loginImg from "../../login.svg";
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
          firstName: '',
          lastName: '',
          username: '',
          password: ''
      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
        this.props.register(user);
    }
  }

  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="base-container">
        <div className="content">
          
          <div className="image">
            <img src={loginImg} />
          </div>

          <form className="form" onSubmit={this.handleSubmit}>

            <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
              {submitted && !user.firstName &&
                  <div className="help-block"> <font color="red">First Name is required</font></div>
              }
            </div>

            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                {submitted && !user.lastName &&
                    <div className="help-block"> <font color="red">Last Name is required</font></div>
                }
            </div>

            <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                {submitted && !user.username &&
                    <div className="help-block"> <font color="red">Username is required</font></div>
                }
            </div>
          
            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                {submitted && !user.password &&
                    <div className="help-block"> <font color="red">Password is required</font></div>
                }
            </div>

            <div>
            <select className="select-css">
              <option>This is a native select element</option>
              <option>Apples</option>
              <option>Bananas</option>
              <option>Grapes</option>
              <option>Oranges</option>
            </select>
            </div>

          <div className="footer">
          <button className="btn btn-primary">Register</button>
            {registering && 
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
          </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedRegisterPage =  connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };