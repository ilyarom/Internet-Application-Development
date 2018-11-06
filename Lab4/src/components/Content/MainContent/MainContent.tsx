import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class MainContent extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div className={classes.mainContent}>
          <h1 className={classes.title}>Добро пожаловать!</h1>
          <p>Для того чтобы использовать наш сервис, вам необходимо <a>войти</a> в систему. Если вы не имеете аккаунта, то <a href="/register/">зарегистрируйтесь</a>.</p>
        </div>
    );
  }
}

export default injectStyles(styles)(MainContent)
