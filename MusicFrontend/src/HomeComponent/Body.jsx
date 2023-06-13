import React ,{useState} from 'react'
import './Body.css'
import Header from './Header'

function Body() {
 
  return (
    <div className="body">
    <Header />
    <hr/>
    <div className="bodyInfo">
    <div className="container">
      <input className="radios" type="radio" name="slider" id="item-1" defaultChecked />
      <input className="radios" type="radio" name="slider" id="item-2" />
      <input className="radios" type="radio" name="slider" id="item-3" />
      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img src="/src/assets/aintme.jpg" alt="song" />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img src="https://i.ytimg.com/vi/Lv6EV478u3U/maxresdefault.jpg" alt="song" />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img src="/src/assets/weeknd.jpg" alt="song" />
        </label>
      </div>
    </div>
    </div>
    <div className="albumtitles">
      <h3>Featured</h3>
      <p>THIS WEEK</p>
    </div>
    <div className="albumList">
      <div className='cover'>
        <img className='album' src="https://tse2.mm.bing.net/th/id/OIP.Bi_MgLOxweBOXbtZtjVdaQHaHa?pid=ImgDet&rs=1" alt="" />
        <p className='songName'>Euphoria</p>
      <p className='artist'>Jungkook</p>
      </div>
      <div className='cover'>
      <img className='album' src="https://tse3.mm.bing.net/th/id/OIP.cgx8e_7qBmKt8vWTWAqJTgHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='songName'>Shape of you</p>
      <p className='artist'>Ed Sheeran</p>
      </div>
      <div className="cover">
      <img className='album' src="https://tse2.mm.bing.net/th/id/OIP.I7A9doba6Gl3aKS5laRELgHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='songName'>Stay for me</p>
      <p className='artist'>Hyuk</p>
      </div>
      <div className="cover">
      <img className='album' src="https://tse1.mm.bing.net/th/id/OIP.1ru4hBQdz3brCAQAa5hOPQHaHa?pid=ImgDet&rs=1" alt="" />
      <p className='songName'>We dont talk</p>
      <p className='artist'>Charlie Puth</p>
      </div>
      <div className="cover">
      <img className='album' src="https://tse3.mm.bing.net/th/id/OIP.oK1qTqZqVGk7VNUnYhREVwAAAA?pid=ImgDet&rs=1" alt="" />
      <p className='songName'>Love me like you do</p>
      <p className='artist'>Ellie Goulding</p>
      </div>
     <div className="cover">
     <img className='album' src="https://tse3.mm.bing.net/th/id/OIP.Lifxh5ZRW5xwtuB4imRRAQHaHa?pid=ImgDet&rs=1" alt="" />
     <p className='songName'>Sunflower</p>
      <p className='artist'>Post Malone</p>
     </div>
      <div className="cover">
      <img className='album' src="https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/85/2e/2b/852e2b6c-93ec-806a-95b2-8f5eda2f775c/22UMGIM18886.rgb.jpg/600x600bb.jpg" alt="" />
      <p className='songName'>Matsuri</p>
      <p className='artist'>Fujii Kaze</p>
      </div>
      <div className="cover">
      <img className='album' src="https://parade.com/.image/t_share/MTkyMzA2NDQ3NzEzODM4MzE2/taylor-swift-midnights-lavender-edition-cd-target.jpg" alt="" />
      <p className='songName'>Midnight</p>
      <p className='artist'>Taylor Swift</p>
      </div>
    </div>
    <div className="albumNames">

    </div>
   </div>
  )
}

export default Body