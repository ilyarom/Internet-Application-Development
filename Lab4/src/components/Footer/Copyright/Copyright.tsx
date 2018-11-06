import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class Copyright extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div className={classes.copyright}>© Copyright</div>
    );
  }
}

export default injectStyles(styles)(Copyright)
