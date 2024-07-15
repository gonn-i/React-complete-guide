import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

function NewEvent() {
  return (
    <>
      <h1>새 이벤트 페이지입니다🎪</h1>
      <EventForm />
    </>
  );
}

export default NewEvent;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  console.log(eventData);
  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    throw json({ message: '이벤트 등록에 실패했습니다' }, { status: 500 });
  }
  return redirect('/events');
}
