import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError(); //router 에서 throw 된 에러 객체 가져오기
  let title = '오류가 발생했습니다🙂‍↔️';
  let message = '무엇이 잘못되었을까요 ~';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    message = '페이지 URL을 찾을 수 없습니다';
  }
  return (
    <>
      <PageContent title={title} />
      <p style={{ 'text-align': 'center' }}>{message}</p>
    </>
  );
}

export default ErrorPage;
