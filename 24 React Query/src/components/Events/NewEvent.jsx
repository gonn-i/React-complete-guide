import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../utils/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../utils/http.js';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    //요청 성공시에 실행할 함수 전달
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'], exact: true });
      navigate('../');
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  if (isError) {
    console.log(error);
  }
  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && '등록중입니다... 💬'}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && <ErrorBlock message={error.info || '등록에 실패했습니다. 빈칸 없이 입력 해주세요'} />}
    </Modal>
  );
}
