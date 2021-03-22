import axios from "axios"; //Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

const API_URL = "http://localhost:8080/api/auth/";
//인증 서비스
class AuthService {
  login(username, password) {
    //post {username, password} 및 jwt 로컬 저장소에 저장
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    //jwt 로컬 저장소에서 제거
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    //Post {사용자 이름, 이메일, 비밀번호}
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    //저장된 사용자 정보 가져오기 (jwt도 포함한다.)
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
