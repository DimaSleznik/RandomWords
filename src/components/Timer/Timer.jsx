import React from 'react';
import { useEffect, useState } from 'react';
export const Timer = (props) => {
  const [counter, setCounter] = useState(props.timer);
  let myAudioElement = new Audio('./mus.mp3');
  myAudioElement.play();
  useEffect(() => {
    console.log('tick');
    counter > 0 && setTimeout(() => counter === 1 ? setCounter(props.timer) : setCounter(counter - 1), 1000);
  }, [counter, props]);

  return (
    <div className="Timer">
      <div>Countdown: {counter === 0 ? "Time over" : counter}</div>
    </div>
  );
}