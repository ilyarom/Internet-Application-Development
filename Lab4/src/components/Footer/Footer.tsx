import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';
import Official from './Official/Official';
import Copyright from './Copyright/Copyright';

interface IProps {
  classes: any  
} 

class Footer extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <footer className={classes.footer}>
          <div className={classes.container}>
            <div className={classes.footerItems}>
              <Official />
              <Copyright />
            </div>
          </div>
        </footer>
        
    );
  }
}

export default injectStyles(styles)(Footer)