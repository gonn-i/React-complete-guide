import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../utils/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  // isPending과 isLoading 차이
  // - isLoading은 쿼리가 비활성화 되었다고 해서 true가 되지 않음
  // - isPending은 쿼리가 비활성화시 true
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents(searchTerm, signal),
    enabled: searchTerm !== undefined,
    // 검색어가 입력되지 않은 상태에서 fetch 해오지 않음
    // 이때 '' 빈 string으로 하지 않고 undefined로 한 이유는 초기 아무것도 적지 않은 상태와, 검색어 비우기를 했을때의 경우를 구분하기 위함
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events.'} />;
  }
  if (data) {
    content = (
      <ul className="events=list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input type="search" placeholder="Search events" ref={searchElement} />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
