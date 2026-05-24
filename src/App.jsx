import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MusicCard from './components/MusicCard';
function App() {
  const [music, setMusic] = useState([]);
  const [userPreferences, setUserPreferences] = useState({});

  useEffect(() => {
    axios.get('https://mock-api-music-recommendations.herokuapp.com/api/music')
      .then(response => {
        setMusic(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUserPreferences = (preferences) => {
    setUserPreferences(preferences);
  }

  return (
    <div className="container">
      <h1>Music Recommendations</h1>
      <h2>Discover new music based on your preferences</h2>
      {music.map((song) => (
        <MusicCard key={song.id} song={song} userPreferences={userPreferences} handleUserPreferences={handleUserPreferences} />
      ))}
    </div>
  );
}
export default App;