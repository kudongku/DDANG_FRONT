import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { logout } = useAuth();

  return (
    <>
      <Header title="프로필" />
      <button
        className="wideButton red"
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </button>
    </>
  );
}
