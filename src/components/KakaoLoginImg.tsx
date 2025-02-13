import { KAKAO_OAUTH, KAKAO_REDIRECT_URL } from '../constants';

export default function KakaoLoginImg() {
  return (
    <div className="mt-6 text-center">
      <img
        src="/kakao_login_large_wide.png"
        alt="Kakao Login"
        className="cursor-pointer w-full h-[70px] mx-auto object-contain hover:opacity-80 transition"
        onClick={() => (window.location.href = KAKAO_OAUTH + KAKAO_REDIRECT_URL)}
      />
    </div>
  );
}
