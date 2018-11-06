import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainContent from './MainContent/MainContent'
import Contacts from './Contacts/Contacts'
import Login from './Login/Login'
import Register from './Register/Register'
import PersonInfo from './PersonInfo/PersonInfo'

interface IProps {
  classes: any  
} 

class Content extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
          <Router>
            <div className={classes.content}>
              <Route exact={true} path="/" component={MainContent} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/info" component={PersonInfo} />
            </div>
          </Router>
    );
  }
}

export default injectStyles(styles)(Content)
