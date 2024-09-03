import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../utils/http.js';

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    // tanstack query가 하는 일
    // 1) 요청을 관리하는 로직을 제공
    // 2) 발생 가능한 오류를 추적하는 역할
    // 단! useQuery는 프로미스를 반환하는 함수를 필요로 함
    queryKey: ['events'], // queryKey를 통해서 react Query에 데이터를 캐싱
    queryFn: fetchEvents,
    staleTime: 5000, // 새로운 요청을 다시 보낼 시간 : staleTime은 캐싱된 데이터가 최신 상태로 유지되는 기간을 설정 (해당 ms동안 새로운 패칭을 시도하지 않고, 기존에 캐싱죈 데이터를 사용) / 디폴트는 0임
    //gcTime: 30000, // 캐싱된 데이터 보관 시간 : (default : 5m) -> 다른 컴포넌트로 이동해서 해당 쿼리가 더이상 필요해지지 않으면 메모리에서 삭제
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || '데이터를 가져오는데 실패했습니다!'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
