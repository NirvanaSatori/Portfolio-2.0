import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GoldKey</h1>
      <p>Hello, this is Morris Waithaka, a Full Stack Software Engineer. I will solve your problems through code to help you overcome everyday challenges. I use the latest software development tools to write both web and mobile apps.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header