import React, { useState } from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
function AddMusic() {
  const [musicName, setMusicName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [musicGenre, setMusicGenre] = useState('');
  const [songReleaseDate, setSongReleaseDate] = useState('');
  const [songLanguage, setSongLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [country, setCountry] = useState('');
  const [overallRate, setOverallRate] = useState('');
  const[imageUrl,setimageUrl]=useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Perform form submission logic, such as saving the data or making an API call

    // Reset form fields
    setMusicName('');
    setArtistName('');
    setMusicGenre('');
    setSongReleaseDate('');
    setSongLanguage('');
    setDuration('');
    setCountry('');
    setOverallRate('');
    setimageUrl('');
  }
  return (
    <div className='whole1'>
      <NavHome />
      <div className="card2">
        <p className='cardTitle'>ADD MUSIC</p>


        <form className='AddForm' onSubmit={handleSubmit}>

          <div className='Inlineform'>
            <div className='formdiv'>
              <label className='AddmusicLabel' htmlFor="musicName">Music Name:</label>
              <input className='AddmusicInput'
                type="text"
                id="musicName"
                value={musicName}
                onChange={(e) => setMusicName(e.target.value)}
                required
              />
            </div>
            <div className='formdiv'>
              <label className='AddmusicLabel' htmlFor="artistName">Artist Name:</label>
              <input className='AddmusicInput'
                type="text"
                id="artistName"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                required
              />
            </div>
          </div>


          <div className='Inlineform'>
            <div className='formdiv'>
              <label className='AddmusicLabel' htmlFor="musicGenre">Music Genre:</label>
              <input className='AddmusicInput'
                type="text"
                id="musicGenre"
                value={musicGenre}
                onChange={(e) => setMusicGenre(e.target.value)}
                required
              />
            </div>
            <div className='formdiv'>
              <label className='AddmusicLabel' htmlFor="songReleaseDate">Song Release Date:</label>
              <input className='AddmusicInput'
                type="date"
                id="songReleaseDate"
                value={songReleaseDate}
                onChange={(e) => setSongReleaseDate(e.target.value)}
                required
              />
            </div>
          </div>


          <div className='Inlineform'>
          <div>
            <label className='AddmusicLabel' htmlFor="songLanguage">Song Language:</label>
            <input className='AddmusicInput'
              type="text"
              id="songLanguage"
              value={songLanguage}
              onChange={(e) => setSongLanguage(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='AddmusicLabel' htmlFor="duration">Duration:</label>
            <input className='AddmusicInput'
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          </div>


          <div className='Inlineform'>
          <div>
            <label className='AddmusicLabel' htmlFor="country">Country:</label>
            <input className='AddmusicInput'
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='AddmusicLabel' htmlFor="overallRate">Overall Rate:</label>
            <input className='AddmusicInput'
              type="number"
              id="overallRate"
              value={overallRate}
              onChange={(e) => setOverallRate(e.target.value)}
              required
            />
          </div>
          </div>



          <div className='Inlineform'>
          <div>
            <label className='AddmusicLabel' htmlFor="UploadMusic">Upload Muisc:</label>
            <input className='AddmusicInput' type="file" accept="image/png, image/jpeg"/>
          </div>
          <div>
            <label className='AddmusicLabel' htmlFor="imageUrl">Image Url:</label>
            <input className='AddmusicInput'
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setimageUrl(e.target.value)}
              required
            />
          </div>
          </div>
           

           <div>
           <button className='upload' type="submit">Submit</button>
           </div>

          


        </form>
      
      </div>
    </div>
  )
}

export default AddMusic