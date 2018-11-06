import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class Menu extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <ul className={classes.menu}>
            <li className={classes.menuItem}><a className={classes.menuLink} href="/login/">Вход</a></li>
            <li className={classes.menuItem}><a className={classes.menuLink} href="/">Главная</a></li>
            <li className={classes.menuItem}><a className={classes.menuLink} href="/contacts/">Контакты</a></li>
        </ul>
    );
  }
}

export default injectStyles(styles)(Menu)
