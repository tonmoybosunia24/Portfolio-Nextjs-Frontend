'use client'
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    /* ---------------------Type-Writer Section------------------- */
    <>
      {/* -----------------------Type-Writer--------------------- */}
      <Typewriter
        cursor
        cursorStyle='_'
        loop
        deleteSpeed={30}
        words={['Front-End Developer', 'React Developer', 'Mern-Stuck Developer']}
      />
    </>
  );
};

export default TypeWriter;