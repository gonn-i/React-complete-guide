import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchEvent, deleteEvent } from '../../utils/http';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../utils/http';
import { useNavigate } from 'react-router-dom';

import Header from '../Header.jsx';

export default function EventDetails() {
  let { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const { data } = useQuery({
    queryKey: ['event'],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate, isError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    },
  });

  function clickHandler() {
    mutate({ id });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {data && (
          <>
            <header>
              <h1>{data.title}</h1>
              <nav>
                <button onClick={clickHandler}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
              {isError && <p>삭제 실패!</p>}
            </header>
            <div id="event-details-content">
              <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
                </div>
                <p id="event-details-description">{data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
