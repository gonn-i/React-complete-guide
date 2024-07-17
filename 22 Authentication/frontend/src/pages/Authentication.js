import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  // req로 요청된 url을 URL 객체로 변환하고, searchParams 속성을 통해 쿼리 값을 가져온다
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: '지원하지 않는 mode 입니다' }, { status: 422 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const res = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (res.status === 422 || res.status === 401) {
    return res;
  }

  if (!res.ok) {
    throw json({ message: '인증할 수 없습니다' }, { status: 500 });
  }

  // res 에 있는 토큰을 추출하여 사용 -> 보통 localstorage에 저장
  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/');
}
