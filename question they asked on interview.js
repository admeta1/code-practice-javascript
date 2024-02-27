
// o/p should be like this // Sabyasachi - 2
// Techno - 2
// Exponent -1 
// I - 1

// let str = "Sabyasachi, Techno Exponent Techno I sabyasachi";
// let split = str.toLowerCase().split(" ");

// let obj = split.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
// }, {});

// for (let key in obj) {
//     console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} - ${obj[key]}`);
// }
// ------------------
// make stope watch 
// import React, { useEffect, useState, useRef } from 'react';

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [pausedTime, setPausedTime] = useState(0);
//   const timeHandler = useRef(null);

//   useEffect(() => {
//     timeInc();
//     return () => clearInterval(timeHandler.current);
//   }, []);

//   function timeInc() {
//     timeHandler.current = setInterval(() => {
//       setTime(prevTime => prevTime + 1);
//     }, 1000);
//   }

//   const handleStart = () => {
//     setTime(0);
//     clearInterval(timeHandler.current);
//     timeInc();
//   };

//   const handlePause = () => {
//     clearInterval(timeHandler.current);
//     setPausedTime(time);
//   };

//   const handleRestart = () => {
//     setTime(pausedTime); // Set time to the paused time
//     clearInterval(timeHandler.current);
//     timeInc(); // Start from the paused time
//   };

//   return (
//     <>
//       <h1>{time}</h1>
//       <button onClick={handleStart} className='btn btn-success'>
//         Start
//       </button>
//       <button onClick={handlePause} className='btn btn-danger'>
//         Pause
//       </button>
//       <button onClick={handleRestart} className='btn btn-warning'>
//         Restart
//       </button>
//     </>
//   );
// };

// export default StopWatch;
// ----------------

