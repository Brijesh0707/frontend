import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Bot from './images/bot.png';
import './App.css';
import { NavLink} from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    
    
  }, []);

  return (
    <>
      <div id='navbar'>
        <Navbar />
      </div>
      <section id="main">
        <div className='container-fluid justify-content-evenly'>
          <div className='row justify-content-evenly'>
            <div className='col-md-5' id="text1">
              <h1>Welcome To Brij Ai</h1>
              <br />
              <h4>it is the chat ai bot, user asks <br /> questions and the bot provides answers</h4>
              <br />
              <ul id="dynamic">
              <li><span>it is a clone like bard ai and chat gpt.<br /> in this clone, OpenAI API is used.</span></li>
              </ul>
              <br />
              <NavLink to="/chat">
              <button type='button' id="btn">Try It</button>
              </NavLink>
            </div>
            <div className='col-md-5'>
              <img src={Bot} alt="Bot" id="bot" />
            </div>
            <div className='col-md-12' id="footer">
              <p>WEBSITE CREATED BY BRIJESH</p>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Home;
