import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // 2) 에러 판별과 메시지 return 을 통한 에러 처리
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const res = await fetch('http://localhost:8080/events');

  if (!res.ok) {
    // return {
    //   isError: true,
    //   message: '이벤트 정보를 가져올 수 없습니다! ',
    // };
    // 3) Response 객체에 message와 에러 코드 담아서 던지기
    // throw new Response(JSON.stringify({ message: '이벤트 정보를 가져오지 못했습니다!' }), { status: 500 });
    throw json({ message: '이벤트 정보를 가져오지 못했습니다!' }, { status: 500 });
  } else {
    const resData = await res.json();
    return resData;
  }
}
