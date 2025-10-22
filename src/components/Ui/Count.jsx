'use client'
import CountUp from 'react-countup';


const Count = ({ start, end }) => {
  /* -----------------Count-Up Section----------------- */
  return (
    <>
      {/* --------------------Count-Up------------------ */}
      <CountUp
        start={start}
        end={end}
        duration={2}
        enableScrollSpy={true}
        formattingFn={n => n >= 0 && n < 10 ? `0${n}` : n}
      />
    </>
  );
};

export default Count;