import { Component } from "react";
import UserService from "../services/user.service";

//공개 콘텐츠를 보여주는 공개 홈 페이지
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    //컴포넌트가 마운트 된 직후, 즉 트리에 삽입된 직후에 호출됨
    //즉 컴포넌트가 render된 직후 바로 실행된다. axios 등 컴포넌트에 필요한 데이터 요청, DOM에 관련된 작업을 수행
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
