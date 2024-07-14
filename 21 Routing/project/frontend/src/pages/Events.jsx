import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const res = await fetch('http://localhost:8080/events');

  if (!res.ok) {
    // ...
  } else {
    const resData = await res.json();
    return resData.events;
  }
}
