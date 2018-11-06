import * as React from 'react';
import injectStyles from 'react-jss';
import styles from './Styles';

interface IProps {
  classes: any  
} 

class PersonInfo extends React.Component<IProps> {
  public render() {
    const {classes} = this.props
    return (
        <div className={classes.personInfo}>
          <h1 className={classes.title}>Результаты поиска: <a className={classes.personName} href="//vk.com/id105820341">Илья Романов</a></h1>
          <div className={classes.friendsCount}>Количество друзей: <span className={classes.value}>165</span> (<span className={classes.girls}>51</span> девушки / <span className={classes.boys}>112</span> муж.)</div>
          <div className={classes.instagram}>Instagram: <a href="//www.instagram.com/super.fake109/" className={classes.instagramLogin}>super.fake109</a></div>
          <div className={classes.city}>Предполагаемое место жительства: <span className={classes.value}>Йошкар-Ола, Козьмодемьянск</span></div>
          <div className={classes.interests}>Интересы: <span className={classes.value}>программирование</span>, <span className={classes.value}>туризм</span></div>
          <div className={classes.music}>Любимая музыка: <span className={classes.value}>-</span></div>
        </div>
        
    );
  }
}

export default injectStyles(styles)(PersonInfo)
