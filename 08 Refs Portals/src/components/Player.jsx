import { useState, useRef } from 'react';

export default function Player() {
  const [inputPlayerName, setinputIlayerName] = useState(null);

  const userName = useRef();

  function handleClick() {
    setinputIlayerName(userName.current.value);
    userName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {inputPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
