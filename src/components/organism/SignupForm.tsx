import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupApi, validateEmailApi } from '../../apis';
import ErrorP from '../molecule/ErrorP';
import useAuth from '../../hooks/useAuth';

export default function SignupForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [validateButton, activateValidateButton] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [error, setError] = useState('');
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name === 'email') {
      activateValidateButton(validateEmail(value));
    }

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    validateEmailApi({ email: formdata.email })
      .then((data) => {
        if (data.exist) {
          setError('존재하는 이메일입니다.');
          setEmailValidation(!data.exist);
        } else {
          setError('');
          setEmailValidation(!data.exist);
        }
      })
      .catch((error) => {
        setError(error.response?.data?.message || '이메일 중복 확인 실패');
        setEmailValidation(false);
        console.log(error);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formdata);

    if (formdata.password !== formdata.passwordConfirmation) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    signupApi(formdata)
      .then((data) => {
        login(data.tokenType + data.token, data.refreshToken);
        navigate('/setting/location');
      })
      .catch((error) => {
        console.log(error);
        setError(error.response?.data?.message || '회원가입 실패');
      });
  };

  return (
    <form className="space-y-4">
      <label className="label">
        이메일
        <input
          className="input"
          type="text"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
        />
        <button className="inline-button" onClick={handleClick} disabled={!validateButton}>
          확인하기
        </button>
      </label>
      <br />

      <label className="label">
        비밀번호
        <input
          className="input mb-4"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
          autoComplete="new-password"
        />
      </label>

      <label className="label">
        비밀번호 확인
        <input
          className="input"
          type="password"
          name="passwordConfirmation"
          placeholder="비밀번호를 재입력하세요"
          onChange={handleChange}
          autoComplete="new-password"
        />
      </label>

      <ErrorP error={error} />

      <button
        className="wideButton blue disabled:opacity-50"
        onClick={handleSubmit}
        disabled={!emailValidation}
      >
        제출하기
      </button>
    </form>
  );
}
