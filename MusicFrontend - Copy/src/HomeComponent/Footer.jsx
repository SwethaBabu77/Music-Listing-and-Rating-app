import React, { useState, useRef } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPause, faCirclePlay, faShuffle, faBackwardStep, faForwardStep, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
function Footer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const songs = ['/src/assets/Midnight Rain - Taylor Swift.m4a','/src/assets/Six Days (Remix) (feat. Mos Def) - DJ Shadow.m4a','/src/assets/deja vu - Olivia Rodrigo.m4a', '/src/assets/Back To December - Taylor Swift.m4a', '/src/assets/Calm Down (Remix) - Dj Luli Torres.m4a', '/src/assets/Soundtrack) - Teriyaki Boyz.m4a']; // Replace with your song URLs
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [rating, setRating] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
    if (!isShuffleOn) {
      // Shuffle is turned on, so generate a random index
      const newIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(newIndex);
    }
  };

  const playPrevious = () => {
    let newIndex;
    if (isShuffleOn) {
      newIndex = Math.floor(Math.random() * songs.length);
    } else {
      newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  const playNext = () => {
    let newIndex;
    if (isShuffleOn) {
      newIndex = Math.floor(Math.random() * songs.length);
    } else {
      newIndex = (currentSongIndex + 1) % songs.length;
    }
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };


  const handleRatingSelect = (ratingValue) => {
    // If the same rating is clicked again, deselect it by setting rating to 0
    if (rating === ratingValue) {
      setRating(0);
    } else {
      setRating(ratingValue);
    }
  };


  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume; // Update the volume of the <audio> element
  };

  const currentSong = songs[currentSongIndex];
  const songName = currentSong.split('/').pop().split('.')[0];
  const artist = songName.split(' - ')[1];
  const songTitle = songName.split(' - ')[0];

  return (
    <div className="HomePagefooter">
      <div className="HomefooterLeft">
        <img className="footerAlbum" src={`/src/assets/${songName}.jpg`} alt="Album" />
        <div className="footerSongInfo">
          <h4 className='Footitle'>{songTitle}</h4>
          <p>{artist}</p>
        </div>
        {/* icon */}
      </div>
      <div className="HomefooterCenter">
        <button onClick={toggleShuffle}><FontAwesomeIcon icon={faShuffle} style={{ color: "#24ab74", }} /></button>
        <button onClick={playPrevious}><FontAwesomeIcon icon={faBackwardStep} style={{ color: "#24ab74", }} /></button>
        <button onClick={togglePlay}>{
          isPlaying ? (
            <FontAwesomeIcon icon={faPause} style={{ color: "#24ab74",fontSize: "28px" }} />
          ) : (
            <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#24ab74", fontSize: "28px" }} />
          )}
        </button>

        <button onClick={playNext}><FontAwesomeIcon icon={faForwardStep} style={{ color: "#24ab74", }} /></button>

      </div>
      <audio ref={audioRef} src={songs[currentSongIndex]} onEnded={playNext} volume={volume} />
      <div className="HomefooterRight">
        <button className='Foobutton'><FontAwesomeIcon icon={faVolumeLow} style={{ color: "#24ab74", }} /></button>
        <input className='Frange' type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => handleVolumeChange(e)} />

        <div className="HomefooterRating">
          {[1, 2, 3, 4, 5].map((ratingValue) => (
            <button
              key={ratingValue}
              onClick={() => handleRatingSelect(ratingValue)}
              className={rating >= ratingValue ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          ))}

        </div>
      </div>
    </div>

  )
}

export default Footer