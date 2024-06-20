import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
  // 컴포넌트가 DOM으로 부터 해제될때
  componentWillUnmount() {
    console.log('User 컴포넌트 unmount');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// 함수형
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
