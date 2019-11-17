import React from "react";
import "./App.scss";
import { Mainpage} from "./components/login/index";
import { Home, Books, Videos, Learn, Chat} from "./components/teacher/index";
import { history } from './components/_helpers';
import { alertActions } from './components/_actions';
import { connect } from 'react-redux';
import { PrivateRoute } from './components/_components';


import {
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
  });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{
            alert.message}</div>
        }
      <Router history= {history}> 
        <Switch>
          <PrivateRoute exact path="/" component= {Home}/>
          <Route exact path="/login" component={Mainpage}/>
          <Route exact path="/teacher" component= {Home}/>
          <Route exact path="/home" component= {Home}/>
          <Route exact path="/books" component= {Books}/>
          <Route exact path="/videos" component= {Videos}/>
          <Route exact path="/learn" component= {Learn}/>
          <Route exact path="/chat" component= {Chat}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </Router>
      
      </div></div></div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

