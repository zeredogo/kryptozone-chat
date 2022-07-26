import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <ChatEngine 
       height="100vh" 
       projectID="64345281-7c5f-4b4d-a9d1-69c699043dbd"
       userName="KryptoZone"
       userSecret="zeredogo"
    />
  )
}

export default App