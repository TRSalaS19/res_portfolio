import React, { useRef, useEffect } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Content Creator"],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='image-container'>
          <img src='../assets/me_pic.png' alt='my pic'></img>
        </div>
      </div>
      <div className='right'>
        <div className='intro-right-text-container'>
          <h2>Hello, Welcome to my Portfolio</h2>
          <h1>Gustavo Salas</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <i className='fas fa-arrow-down portfolio-arrow'></i>
        </a>
      </div>
    </div>
  );
}
