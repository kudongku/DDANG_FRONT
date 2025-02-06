import { useEffect, useState } from "react";
import api from "../apis/api";

export default function Home() {
  const [userMail, setUserMail] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("users/info");
        console.log(response.data); // ✅ 실제 데이터를 출력
        setUserMail(response.data);
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };

    fetchUserInfo(); // 함수 실행
  }, [userMail]); // ✅ 빈 배열을 넣어 한 번만 실행되도록 설정

  return <h1>hello, world {userMail}</h1>;
}
