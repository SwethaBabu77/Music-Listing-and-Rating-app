import React ,{useState} from 'react'
import './Body.css'
import Header from './Header'

function Body() {
 
  return (
    <div className="Homebody">
    <Header />
    <hr className='Homehr'/>
    <div className="HomebodyInfo">
    <div className="Homecontainer">
      <input className="Hradios" type="radio" name="slider" id="item-1" defaultChecked />
      <input className="Hradios" type="radio" name="slider" id="item-2" />
      <input className="Hradios" type="radio" name="slider" id="item-3" />
      <div className="Hcards">
        <label className="Hcard" htmlFor="item-1" id="song-1">
          <img className='HomeSongImg' src="/src/assets/aintme.jpg" alt="song" />
        </label>
        <label className="Hcard" htmlFor="item-2" id="song-2">
          <img className='HomeSongImg' src="https://i.ytimg.com/vi/Lv6EV478u3U/maxresdefault.jpg" alt="song" />
        </label>
        <label className="Hcard" htmlFor="item-3" id="song-3">
          <img className='HomeSongImg' src="/src/assets/weeknd.jpg" alt="song" />
        </label>
      </div>
    </div>
    </div>
    <div className="Halbumtitles">
      <div className='Hfeatures'>
      <h3>Featured</h3>
      <p>THIS WEEK</p>
      </div>

      <div className='seeAll'>
      <p className='SeeAllp'>See All</p>
    </div>
    </div>
    <div className="HalbumList">

      <div className='wholeCard'>
        <div className="Bcard">
          <div className="face face1">
            <div className="Bcontent">
              <span className="Bstars"></span>
              <p className="java">Generation Why</p>
              <p className="java">Java s.</p>
            </div>
          </div>
          <div className="face face2">
            <img className="bimg" src="https://tse3.mm.bing.net/th/id/OIP.BAEM18CBhq_K0BgAzm90vwHaHa?pid=ImgDet&rs=1"/>
        </div>
        </div>

        <div className="Hcontents">
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
        </div>
        </div>


        <div className='wholeCard'>
        <div className="Bcard">
          <div className="face face1">
            <div className="Bcontent">
              <span className="Bstars"></span>
              <h2 className="python">Python</h2>
              <p className="python">Python is an.</p>
            </div>
          </div>
          <div className="face face2">
           <img className="bimg" src="https://tse2.mm.bing.net/th/id/OIP.EVMQzABbuT_d4dqjhjBBEgHaHa?pid=ImgDet&rs=1" alt="" srcset=""/>
          </div>
        </div>
        <div className="Hcontents">
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
        </div>
        </div>
      

        <div className='wholeCard'>
        <div className="Bcard">
          <div className="face face1">
            <div className="Bcontent">
              <span className="Bstars"></span>
              <h2 className="cSharp">C#</h2>
              <p className="cSharp">C# is .</p>
            </div>
          </div>
          <div className="face face2">
            <img className="bimg" src="https://tse3.mm.bing.net/th/id/OIP.wqF7tBXbVYV3aJbynsewVAHaHa?pid=ImgDet&rs=1" alt="" srcset=""/>
          </div>
        </div>
        <div className="Hcontents">
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
        </div>
        </div>



        

        <div className='wholeCard'>
        <div className="Bcard">
          <div className="face face1">
            <div className="Bcontent">
              <span className="Bstars"></span>
              <h2 className="cSharp">C#</h2>
              <p className="cSharp">C# is .</p>
            </div>
          </div>
          <div className="face face2">
            <img className="bimg" src="https://i.ytimg.com/vi/OQ6Q_SvO7jw/maxresdefault.jpg" alt="" srcset=""/>
          </div>
        </div>
        <div className="Hcontents">
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
        </div>
        </div>


        <div className='wholeCard'>
        <div className="Bcard">
          <div className="face face1">
            <div className="Bcontent">
              <span className="Bstars"></span>
              <h2 className="cSharp">C#</h2>
              <p className="cSharp">C# is .</p>
            </div>
          </div>
          <div className="face face2">
            <img className="bimg" src="https://images.genius.com/98c4c2bd9bbc3b28ec347e0f35e68ddd.1000x1000x1.jpg" alt="" srcset=""/>
          </div>
        </div>
        <div className="Hcontents">
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
        </div>
        </div>
      
    </div>
    <div className="HalbumNames">

    </div>
   </div>

  )
}

export default Body