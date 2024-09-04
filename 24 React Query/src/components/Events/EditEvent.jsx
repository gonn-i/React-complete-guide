import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../utils/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate,
    // isPending: isEditPending,
    // isError: isEditError,
  } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      // 즉시 새로운 요청을 만들어내어 데이터 갱신 (낙관적 업데이트)
      await queryClient.cancelQueries({ queryKey: ['events', id] }); // 진행 중인 쿼리 취소 후 (useQuery로 트리거된 쿼리만을 취소)
      const previousEvent = queryClient.getQueryData(['events', id]); // 백엔드단에서의 오류에 대비하여 이전 쿼리값 저장
      queryClient.setQueryData(['events', id], newEvent); // 특정 쿼리 (첫번쨰 인자)에 자체 데이터 (두번째 인자)를 설정

      return {
        previousEvent,
      }; // 이전 쿼리 값을 리턴함으로써 context로 접근 가능케함
    },
    // 롤백 프로세스
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', id], context.previousEvent);
    },
    // 수정 요청의 성공 여부와 관계없이 시행 (백엔드와 프엔간의 데이터 동기화를 위해 쿼리 무효화하여 갱신)
    onSettled: () => {
      queryClient.invalidateQueries(['events', id]);
    },
  });

  const navigate = useNavigate();

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock title="fail to fetch data" message="try again 😓" />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }
  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}
