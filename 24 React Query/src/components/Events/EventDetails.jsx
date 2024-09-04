import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchEvent, deleteEvent } from '../../utils/http';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../utils/http';
import { useNavigate } from 'react-router-dom';
import ErrorBlock from '../UI/ErrorBlock';

import Header from '../Header.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const { data, isPending, isError } = useQuery({
    queryKey: ['events', id], // 쿼리 식별자 설정
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      // 쿼리를 무효화 하지만,즉시 다시 리패치 하지 않음! (cf.refetchType 에는 all과 active도 있다)
      queryClient.invalidateQueries({ queryKey: ['events'], refetchType: 'none' });
      navigate('/events');
    },
  });

  function deleteHandler() {
    mutate({ id });
  }

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  let content;
  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Loading ~~..</p>
      </div>
    );
  }

  if (isError) {
    content = <ErrorBlock title="fetching failed" message="retry again!" />;
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>Do you want to delete it? 😮</p>
          <div className="form-actions">
            {deleteError && <p>삭제 실패!</p>}
            {isPendingDeletion && <p>Deleting, please wait!! 🤫</p>}
            {!isPendingDeletion && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={deleteHandler} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
        </Modal>
      )}

      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
