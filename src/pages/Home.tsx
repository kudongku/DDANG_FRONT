import { useEffect, useState } from "react";
import { getUserInfoApi } from "../apis/users";
import Header from "../components/Header";
import { UserInfoResponse } from "../types";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>({
    email: "",
    address: "",
  });

  useEffect(() => {
    getUserInfoApi()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header title="홈" />
      <div>
        {userInfo.email}님, <br /> {userInfo.address} 근처의 경매들입니다.
      </div>
    </>
  );
}
