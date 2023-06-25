import React, { useState, useEffect } from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
import axios from 'axios';
import Loaders from '../Loaders';

function EditMusic() {
    const [musicData, setMusicData] = useState(null);
    const [musicName, setMusicName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [musicGenre, setMusicGenre] = useState('');
    const [songReleaseDate, setSongReleaseDate] = useState('');
    const [songLanguage, setSongLanguage] = useState('');
    const [duration, setDuration] = useState('');
    const [country, setCountry] = useState('');
    const [overallRate, setOverallRate] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [musicId, setMusicId] = useState('');

    useEffect(() => {
        if (musicId) {
            setLoading(true);
            axios
                .get(`https://localhost:9090/get/${musicId}`)
                .then(response => {
                    setMusicData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [musicId]);

    function handleSubmit(event) {
        event.preventDefault();

        // Perform form submission logic, such as saving the data or making an API call
        const updatedMusicData = {
            musicName,
            artistName,
            musicGenre,
            songReleaseDate,
            songLanguage,
            duration,
            country,
            overallRate,
            imageUrl
        };

        axios.post(`https://localhost:9090/updateAMusic/${musicId}`, updatedMusicData)
            .then(response => {
                // Handle the success response here
                console.log('Music details updated successfully');
                setMusicData(response.data);
                setLoading(false);
            }).catch(error => {
                // Handle the error here
                console.error(error);
                setLoading(false);
            });
    }

    // Reset form fields



    return (
        <div className='whole1'>
            {loading && <Loaders/>}
            <NavHome />
            <div>
                <div className="card2">
                    <div>
                        <p className='cardTitle'>Edit all music</p>
                    </div>

                    <div className="SearchMusic">
                        <div className="box">
                            <form className="searchmusix">
                                <input type="text" class="input" Classname="txt" onChange={(e) => setMusicId(e.target.value)} value={musicId} />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>

                    <form className='AddForm' onSubmit={handleSubmit}>

                        <div className='Inlineform'>
                            <div className='formdiv'>
                                <label className='AddmusicLabel' htmlFor="musicName">Music Name:</label>
                                <input className='AddmusicInput'
                                    type="text"
                                    id="musicName"
                                    value={musicName}
                                    onChange={(e) => setMusicName(e.target.value)}
                                    defaultValue={musicData ? musicData.musicName : ''}
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
                                    defaultValue={musicData ? musicData.artistName : ''}
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
                                    defaultValue={musicData ? musicData.musicGenre : ''}
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
                                    defaultValue={musicData ? musicData.songReleaseDate : ''}
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
                                    defaultValue={musicData ? musicData.songLanguage : ''}
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
                                    defaultValue={musicData ? musicData.duration : ''}
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
                                    defaultValue={musicData ? musicData.country : ''}
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
                                    defaultValue={musicData ? musicData.overallRate : ''}
                                    required
                                />
                            </div>
                        </div>



                        <div className='Inlineform'>
                            <div>
                                <label className='AddmusicLabel' htmlFor="UploadMusic">Upload Muisc:</label>
                                <input className='AddmusicInput' type="file" accept="image/png, image/jpeg" />
                            </div>
                            <div>
                                <label className='AddmusicLabel' htmlFor="imageUrl">Image Url:</label>
                                <input className='AddmusicInput'
                                    type="text"
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setimageUrl(e.target.value)}
                                    defaultValue={musicData ? musicData.imageUrl : ''}
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
        </div>
    )
}

export default EditMusic