import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const Chat = () => {
  const human = "human";
  const bot = "bot";
  const inputRef = useRef();
  const messagesEndRef = useRef();

  const updateqna = (from, value) => {
    setQueryis((queryis) => [...queryis, { from, value }]);
  };

  const [queryis, setQueryis] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendit = () => {
    const question = inputRef.current.value;
    updateqna(human, question);

    setLoading(true);
    axios.post('http://localhost:8000/bot', {
      query: question,
    })
      .then((response) => {
        updateqna(bot, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
   
      });

    inputRef.current.value = '';
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [queryis]);

  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v, index) => <p key={index}>{v}</p>);
    }

    return <p key={value}>{value}</p>;
  };

  return (
    <>
      <section id="main1">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h1 id="color">Brij AI</h1>
            </div>
          </div>
        </div>
        <div className='container' id="chat">
          <div className="row">
            <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="chat-messages">
                {queryis.map((qna, index) => {
                  if (qna.from === human) {
                    return (
                      <div className="message human" key={index}>
                        <div className="message-content">
                          {renderContent(qna)}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="message bot" key={index}>
                        <div className="message-content">
                          {renderContent(qna)}
                        </div>
                      </div>
                    );
                  }
                })}
                {loading && (
                  <div className="message bot">
                    <div className="message-content">
                      <p>Typing.....</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row' id="input1">
            <div className='col-md-12' id="input">
              <input type='text' id="chat01" placeholder='Type Something' ref={inputRef} />
              <button disabled={loading} type='submit' id="btn02" onClick={sendit}>SUBMIT</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat
