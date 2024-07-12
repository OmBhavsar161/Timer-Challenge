import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState();

  const playerName = useRef();


  function handleClick() {
    setName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "Entity"} </h2>
      <p>
        <input type="text" required ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
