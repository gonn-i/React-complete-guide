import { useParams } from 'react-router-dom';

function EventDetail() {
  const params = useParams();

  return (
    <>
      <h1>이벤트 {params.eventId} 상세 페이지입니다🎪🎪 </h1>
    </>
  );
}

export default EventDetail;
