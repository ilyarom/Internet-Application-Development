import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 
/*TODO: pr@vkmaster.com можно вынести в отдельную константу. Где их хранить? */

class Contacts extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div className={classes.contacts}>
          <h1 className={classes.title}>Контакты</h1>
          <p>По вопросам рекламы обращайтесь на почту <a href="mailto:pr@vkmaster.com">pr@vkmaster.com</a></p>
        </div>
    );
  }
}

export default injectStyles(styles)(Contacts)
