import './App.css';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';

const socket = io.connect('http://localhost:3001');

function App() {

  // Ce state me permet de définir les valeur que je vais utiliser dans mon composant
  // Ici on définis le message que l'on va récupérer de L'INPUT
  const [message, setMessage] = useState("");
  // Ici on définis le message RECU par le serveur
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", {message});
  };

  // Le useEffect va s'activer lorsque le module "socket" est modifié
  // Dans notre cas, c'est lorsque on reçoit un message du serveur
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input placeholder="Message..." onChange={(event) => {
        setMessage(event.target.value);
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Messages :</h1>
      <p>{messageReceived}</p>
    </div>
  );
}

export default App;
