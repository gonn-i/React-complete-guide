import EventFrom from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
function EditEvent() {
  // 부모 라우트에서 불러온 loader 함수의 반환값은 useLoaderData()가 아닌 useRouteLoaderData()로 받는다!
  const data = useRouteLoaderData('event-detail').event;

  return (
    <>
      <h1>이벤트 수정 페이지입니다🎃</h1>
      <EventFrom event={data} />
    </>
  );
}

export default EditEvent;
