import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Home.css';
import Header from './Header';
import Loaders from '../Loaders';

function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`home ${loading ? 'blurred' : ''}`}>
      {loading &&<Loaders />}
        <div className="player">
          <div className="playerBody">
            <Sidebar />
            <Header />
            <Body />
            {/* <Body pro={songs} set={setSong}/> */}
          </div>
          <Footer />
          {/* <Footer pro={song}/> */}
        </div>
    </div>
  );
}

export default Home;
