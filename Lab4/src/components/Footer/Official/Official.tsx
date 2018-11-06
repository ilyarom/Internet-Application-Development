import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class Official extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div className={classes.official}>
          <span>Официальный сайт</span>
        </div>
    );
  }
}

export default injectStyles(styles)(Official)
