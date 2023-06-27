import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Home.css';
import Header from './Header';
import Loaders from '../Loaders';
import { LogoutContext } from './LogoutContext';
import Cards from './Cards'

function Home() {
  const [loading, setLoading] = React.useState(true);
  const{Message,setMessage,isLoggedOut,setIsLoggedOut}=React.useContext(LogoutContext);
  // const [ab,setAb]=useState(false)


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading &&<Loaders />}
      {isLoggedOut && <Cards Message={Message} setIsLoggedOut={setIsLoggedOut}/>}

        <div className="player">
          <div className="playerBody">
            <Sidebar />
            <Header />
            <Body />
            {/* <Body pro={songs} set={setSong}/> */}
          </div>
          <Footer/>
          {/* <Footer pro={song}/> */}
        </div>
        
    </div>
  );
}

export default Home;
