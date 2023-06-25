import React, { useState } from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
import axios from 'axios';
import Loaders from '../Loaders';
function ViewAllMusic() {
    const [searchTerm, setSearchTerm] = useState('');
    const [musicData, setMusicData] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:9090/viewAllMusics');
            setMusicData(response.data);
            console.log(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='whole1'>
            {loading && <Loaders />}
            <NavHome />
            <div>
                <div className="card2">
                    <div>
                        <p className='cardTitle'>View All music</p>
                    </div>

                    <div className="SearchMusic">
                        <div className="box">
                            <form className="searchmusix" onSubmit={handleSearch}>
                                <input type="text" class="input" Classname="txt" onMouseOut="this.value = ''; this.blur();" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                <button type='submit'>submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="card3">

                        <div>
                            <div className="viewMusics">
                                {musicData ? (
                                    <div>
                                        {/* Display the fetched music data */}
                                        {musicData.map((music) => (
                                            <div key={music.id}>
                                                <p>ID: {music.id}</p>
                                                <p>Username: {music.Username}</p>
                                                {/* Add other fields based on your data structure */}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div>No music data available.</div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewAllMusic