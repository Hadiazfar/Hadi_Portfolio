import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Web and Mobile  Developer",
          "I can develop responsive web and Mobile applications using React-redux, React Js, React Native, JavaScript HTML, and CSS"
     
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
