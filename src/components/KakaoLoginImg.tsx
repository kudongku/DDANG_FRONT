export default function KakaoLoginImg() {
  const kakaoOauthUrl = import.meta.env.VITE_KAKAO_OAUTH;
  const kakaoRedirectUrl = import.meta.env.VITE_KAKAO_REDIRECT_URL;

  return (
    <div className="mt-6 text-center">
      <img
        src="../kakao_login_large_wide.png"
        alt="Kakao Login"
        className="cursor-pointer w-full h-[70px] mx-auto object-contain hover:opacity-80 transition"
        onClick={() => (window.location.href = kakaoOauthUrl + kakaoRedirectUrl)}
      />
    </div>
  );
}
