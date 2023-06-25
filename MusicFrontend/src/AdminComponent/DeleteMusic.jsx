import React, { useState,useEffect } from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'


function DeleteMusic() {

    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        fetchMusicData();
    }, []);


    const fetchMusicData = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/get/${musicId}`); // API endpoint
            setMusicData(response.data);
        } catch (error) {
            console.error('Error fetching music data:', error);
        }
    };


    const handleDelete = async (musicId) => {
        try {
            await axios.delete(`http://localhost:9090/deleteAMusic/${musicId}`); // Replace with your API endpoint
            fetchMusicData(); // Refetch the music data to update the list
        } catch (error) {
            console.error('Error deleting music:', error);
        }
    };



    return (
        <div className='whole1'>
            <NavHome />
            <div>
                <div className="card2">
                    <div>
                        <p className='cardTitle'>Delete Music</p>
                    </div>

                    <div className="SearchMusic">
                        <div className="box">
                            <form className="searchmusix">
                                <input type="text" class="input" Classname="txt" onMouseOut="this.value = ''; this.blur();" />
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>


                    <div className='viewCard'>

                        {/* Render the music data */}
                        {musicData.map((music) => (
                            <div className="wholecard">
                                <div className="Bcard">
                                <div className="face face1">
                                    <div className="Bcontent">
                                        <span className="Bstars"></span>
                                        <p className="java">{music.title}</p>
                                        <p className="java">{music.id}</p>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <img className="bimg" src="https://tse3.mm.bing.net/th/id/OIP.QuPGm1KvwhTqvOXm2D5F-wHaHa?pid=ImgDet&rs=1" />
                                </div>
                            </div>

                            <div className="Hcontents">
                                <p className='HsongName'>Euphoria</p>
                                <p className='Hartist'>Jungkook</p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => handleDelete(music.id)} class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </div>
                           
                            {/* <div key={music.id}>
                                <h3>{music.title}</h3>
                                <audio controls>
                                    <source src={music.url} type="audio/mpeg" />
                                </audio>
                                <button onClick={() => handleDelete(music.id)}>Delete</button>
                            </div> */}
                            </div>
                        ))}

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
                                    <img className="bimg" src="https://tse3.mm.bing.net/th/id/OIP.QuPGm1KvwhTqvOXm2D5F-wHaHa?pid=ImgDet&rs=1" />
                                </div>
                            </div>
                            <div className="Hcontents">
                                <p className='HsongName'>Euphoria</p>
                                <p className='Hartist'>Jungkook</p>
                            </div>
                            <div className="buttons">
                                <button class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </div>
                        </div>

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
                                    <img className="bimg" src="https://tse1.mm.bing.net/th/id/OIP.sed5qBSzYJ34xeLSjFgGTAAAAA?pid=ImgDet&rs=1" />
                                </div>
                            </div>
                            <div className="Hcontents">
                                <p className='HsongName'>Euphoria</p>
                                <p className='Hartist'>Jungkook</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteMusic