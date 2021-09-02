import React, { useState } from "react";

function Contact() {
  const [message, SetMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I was Clicked");
    SetMessage(true);
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='../assets/shake.svg' alt='shake' />
      </div>
      <div className='right'>
        <h2>Message Me</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send Message</button>
          {message && <span>Thanks, I will Reply ASAP!</span>}
          <div className='contact-icons'>
            <a href='https://www.linkedin.com/in/gustavo-ruiz-salas-407891102'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/TRSalaS19'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
