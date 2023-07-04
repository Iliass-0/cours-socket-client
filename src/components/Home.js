import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function Home({socket}) {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
      localStorage.setItem('username', username);
      navigate('/chat');
    }

    return (
      <div className="home-container">
        <h2>Sign in</h2>
        <label>Username : </label>
        <input 
            type="text"
            className="user-input"
            placeholder='Your Name...'
            onChange={(event) => setUsername(event.target.value)}
        />
        <button className="home-btn" onClick={handleSubmit}>Go !</button>
      </div>
    )
}

export default Home