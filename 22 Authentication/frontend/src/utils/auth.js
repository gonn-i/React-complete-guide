import { redirect } from 'react-router-dom';

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return;
  }
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

// token 이 있어야만 특정 페이지에 도달할 수 있도록 판별
export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expiration = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}
