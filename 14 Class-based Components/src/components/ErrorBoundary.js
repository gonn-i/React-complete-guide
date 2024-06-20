import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    // try{
    // someCodeWhichMightFail()
    // } catch (err) {
    // handle error
    // }
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something Wrong</p>;
    }
    // children을 반환하는 이유는 오류 경계 컴포넌트를 보호할 컴포트를 두르는데 사용하기 때문!
    return this.props.children;
  }
}

export default ErrorBoundary;
