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
      <h3>Featured</h3>
      <p>THIS WEEK</p>
    </div>
    <div className="HalbumList">
      <div className='Hcover'>
        <img className='Halbum' src="https://tse2.mm.bing.net/th/id/OIP.Bi_MgLOxweBOXbtZtjVdaQHaHa?pid=ImgDet&rs=1" alt="" />
        <p className='HsongName'>Euphoria</p>
      <p className='Hartist'>Jungkook</p>
      </div>
      <div className='Hcover'>
      <img className='Halbum' src="https://tse3.mm.bing.net/th/id/OIP.cgx8e_7qBmKt8vWTWAqJTgHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='HsongName'>Shape of you</p>
      <p className='Hartist'>Ed Sheeran</p>
      </div>
      <div className="Hcover">
      <img className='Halbum' src="https://tse2.mm.bing.net/th/id/OIP.I7A9doba6Gl3aKS5laRELgHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='HsongName'>Stay for me</p>
      <p className='Hartist'>Hyuk</p>
      </div>
      <div className="Hcover">
      <img className='Halbum' src="https://tse1.mm.bing.net/th/id/OIP.1ru4hBQdz3brCAQAa5hOPQHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='HsongName'>We dont talk</p>
      <p className='Hartist'>Charlie Puth</p>
      </div>
      <div className="Hcover">
      <img className='Halbum' src="https://tse3.mm.bing.net/th/id/OIP.oK1qTqZqVGk7VNUnYhREVwAAAA?pid=ImgDet&rs=1" alt="" />
      <p className='HsongName'>Love me like you do</p>
      <p className='Hartist'>Ellie Goulding</p>
      </div>
     <div className="Hcover">
     <img className='Halbum' src="https://tse3.mm.bing.net/th/id/OIP.Lifxh5ZRW5xwtuB4imRRAQHaHa?pid=ImgDet&rs=1" alt="" />
     <p className='HsongName'>Sunflower</p>
      <p className='Hartist'>Post Malone</p>
     </div>
      <div className="Hcover">
      <img className='Halbum' src="https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/85/2e/2b/852e2b6c-93ec-806a-95b2-8f5eda2f775c/22UMGIM18886.rgb.jpg/600x600bb.jpg" alt="" />
      <p className='HsongName'>Matsuri</p>
      <p className='Hartist'>Fujii Kaze</p>
      </div>
      <div className="Hcover">
      <img className='Halbum' src="https://parade.com/.image/t_share/MTkyMzA2NDQ3NzEzODM4MzE2/taylor-swift-midnights-lavender-edition-cd-target.jpg" alt="" />
      <p className='HsongName'>Midnight</p>
      <p className='Hartist'>Taylor Swift</p>
      </div>
    </div>
    <div className="HalbumNames">

    </div>
   </div>
  )
}

export default Body