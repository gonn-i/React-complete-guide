import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import { sortPlacesByDistance } from './loc.js';
import logoImg from './assets/logo.png';

// app 컴포넌트에 굳이 넣을 필요없는 함수(즉각적으로 데이터를 가져올 수 있음)
const shortId = JSON.parse(localStorage.getItem('selectedPlaces') || []);
const storedItems = shortId.map((id) => AVAILABLE_PLACES.find((place) => place.id == id));

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedItems);

  // (최초 랜더링) 사용자의 위치 정보를 토대로, 지역을 거리순으로 보여주는 함수
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(sortPlaces);
    });
  }, []);

  // select 한 장소 제거하기 위한 모달 open
  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  // select 한 장소 제거하기 위한 모달 close
  function handleStopRemovePlace() {
    modal.current.close();
  }

  // 장소 select
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []; //localStorage 가 생성된 경우'selectedPlaces' 에 대한 value를 가져오거나. 생성되지 않은 경우 빈배열 저장
    if (storedIds.indexOf(id) === -1) {
      // localStorage 생성되어있지 않았으면 데이터 넣어주기 (앞쪽에 추가)
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  // select 한 장소 제거
  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current));
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces') || []);
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)));
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="당신의 거리 정보를 토대로 정보를 출력하고 있어요!"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
