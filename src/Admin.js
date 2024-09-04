import React, { useEffect, useState } from 'react';
import './Admin.css'; 

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch('http://10.0.0.26:5000/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div id="admin-container">
      <header className="App-header">
        <h1>&bull; Admin Dashboard &bull;</h1>
        <div className="underline"></div>
      </header>
      <div className="messages-container">
        {messages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          <ul className="messages-list">
            {messages.map((message) => (
              <li key={message.id} className="message-item">
                <h2>{message.subject}</h2>
                <p><strong>Name:</strong> {message.name}</p>
                <p><strong>Email:</strong> {message.email}</p>
                <p><strong>Telephone:</strong> {message.telephone}</p>
                <p><strong>Message:</strong> {message.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Admin;
