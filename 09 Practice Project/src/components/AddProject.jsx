import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal';

export default function AddProject({ onAdd, onCancel }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const enterTitle = titleRef.current.value;
    const enterDescription = descriptionRef.current.value;
    const enterDueDate = dateRef.current.value;

    if (enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === '') {
      modal.current.open();
      return;
    }
    // 유효성 검사

    onAdd({
      title: enterTitle,
      description: enterDescription,
      date: enterDueDate,
    });
  }

  return (
    <section className="w-[35rem] mt-16 right-0 h-screen ">
      <Modal ref={modal}>
        <h2 className="my-20  mx-0 text-grey text-2xl">작성하지 않은 곳이 있습니다</h2>
        <p className="my-5 text-gray-700 text-xl font-extralight">oops... looks like you to enter a value</p>
        <p className="my-5 text-gray-700 text-xl font-extralight">모든 내용을 다 채워주세요!</p>
      </Modal>
      <menu className="flew items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-black-900 font-medium  focus:outline-none rounded-lg text-sm px-12 py-3 me-5 mb-5 "
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-12 py-3 me-5 mb-5 bg-gray-800 text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dateRef} label="Due Date" />
      </div>
    </section>
  );
}
