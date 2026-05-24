import React from 'react';
import './MusicCard.css';
function MusicCard({ song, userPreferences, handleUserPreferences }) {
  return (
    <div className="card">
      <img src={song.coverArt} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <p>{song.genre}</p>
      <button className="button" onClick={() => handleUserPreferences({ ...userPreferences, [song.id]: true })}>Like</button>
      <button className="button" onClick={() => handleUserPreferences({ ...userPreferences, [song.id]: false })}>Dislike</button>
    </div>
  );
}
export default MusicCard;