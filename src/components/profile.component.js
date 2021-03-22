import React, { Component } from "react";
import AuthServcie from "../services/auth.service";
// 이페이지는 AuthService.getCurrentUser() 메서드를 호출해서 현재 사용자 정보를 가져오고 토큰 표시
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthServcie.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id: </strong> {currentUser.id}
        </p>
        <p>
          <strong>Email: </strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}
