import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetail() {
  const data = useRouteLoaderData('event-detail').event;

  return (
    <>
      <EventItem event={data} />
    </>
  );
}

export default EventDetail;

export async function loader({ req, params }) {
  const id = params.eventId;

  const res = await fetch(`http://localhost:8080/events/${id}`);

  if (!res.ok) {
    throw json({ message: '이벤트 상세 정보를 가져오지 못했습니다' }, { status: 500 });
  } else {
    return res;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const res = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!res.ok) {
    throw json({ message: '이벤트 정보를 삭제하지 못했습니다' }, { status: 500 });
  }
  return redirect('/events');
}
