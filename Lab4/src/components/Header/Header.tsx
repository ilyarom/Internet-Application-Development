import logo from './assets/logo.png';
import styles from './Styles';
import Menu from './Menu/Menu';

import * as React from 'react';
import injectStyles from 'react-jss';

interface IProps {
  classes: any  
} 

class Header extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <header className={classes.header}>
          <div className={classes.container}>
            <div className={classes.headerItems}>
              <a className={classes.logo} href="/"><img src={logo} className={classes.logoImg} alt="logo" width="100%" /></a>
              <Menu />
            </div>
          </div>
        </header>
    );
  }
}

export default injectStyles(styles)(Header)
