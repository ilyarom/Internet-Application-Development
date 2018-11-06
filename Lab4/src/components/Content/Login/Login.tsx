import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class Login extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div>
          <form className={classes.login}>
            <h1 className={classes.title}>Пожалуйста, авторизируйтесь</h1>
            <input type="text" className={classes.formControl} placeholder="Логин" />
            <input type="password" className={classes.formControl}  placeholder="Пароль" />
            <input type="submit"className={classes.formSubmit}  value="Войти" />
          </form>
          <p className={classes.registerText}>Еще не зарегистрированы? <a className={classes.registerLink} href="/register/">Зарегистрироваться.</a></p>
        </div>
        
    );
  }
}

export default injectStyles(styles)(Login)
