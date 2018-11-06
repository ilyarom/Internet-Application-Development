import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class Register extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div>
          <form className={classes.login}>
            <h1 className={classes.title}>Пожалуйста, зарегистрируйтесь</h1>
            <input type="text" className={classes.formControl} placeholder="Логин" />
            <input type="password" className={classes.formControl}  placeholder="Пароль" />
            <input type="submit"className={classes.formSubmit}  value="Зарегистрироваться" />
          </form>
          <p className={classes.loginText}>Уже зарегистрированы? <a className={classes.loginLink} href="/login/">Войти.</a></p>
        </div>
        
    );
  }
}

export default injectStyles(styles)(Register)
