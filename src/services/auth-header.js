//import React from "react";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user")); // user항목에 대한 로컬 저장소 확인

  if (user && user.accessToken) {
    //기록이 있는경우 http 인증 헤더 반환
    return { "x-access-token": user.accessToken };
  } else {
    return {}; //그렇지 않은 경우 빈것 반환
  }
}
