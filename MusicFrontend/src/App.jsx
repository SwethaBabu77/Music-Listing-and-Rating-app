import React,{useState} from 'react'
import Body from  './HomeComponent/Body'
import Header from './HomeComponent/Header'
import Footer from './HomeComponent/Footer';

function App() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    {
      title: 'Delicate',
      artist: 'Taylor Swift',
      url: '/src/assets/Delicate - Taylor Swift.m4a',
      cover: '/src/assets/Delicate - Taylor Swift.jpg'
    },
    {
      title: 'deja vu',
      artist: 'Olivia Rodrigo',
      url: '/src/assets/deja vu - Olivia Rodrigo.m4a',
      cover: '/src/assets/deja vu - Olivia Rodrigo.jpg'
    },
    // Add more songs as needed
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <Header />
      <hr />
      <Body songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
      <Footer
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        song={songs[currentSongIndex]}
      />
    </div>
  )
}

export default App