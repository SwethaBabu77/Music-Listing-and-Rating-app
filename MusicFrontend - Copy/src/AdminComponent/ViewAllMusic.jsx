import React, { useState } from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
function ViewAllMusic() {


    return (
        <div className='whole1'>
            <NavHome />
            <div>
                <div className="card2">
                    <div>
                        <p className='cardTitle'>View All music</p>
                    </div>

                    <div className="SearchMusic">
                        <div className="box">
                            <form className="searchmusix">
                                <input type="text" class="input" Classname="txt" onMouseOut="this.value = ''; this.blur();" />
                            </form>
                        </div>
                    </div>

                    <div className="card3">
                        <div>
                                <div className='viewMusics'>
                                    <div className='formdiv'>
                                        <label className='AddmusicLabel' htmlFor="musicName">Music Name:</label>
                                    </div>
                                    <div className='formdiv'>
                                        <label className='AddmusicLabel' htmlFor="artistName">Artist Name:</label>
                                       
                                </div>


                                <div className='viewMusics'>
                                    <div className='formdiv'>
                                        <label className='AddmusicLabel' htmlFor="musicGenre">Music Genre:</label>
                                    </div>
                                    <div className='formdiv'>
                                        <label className='AddmusicLabel' htmlFor="songReleaseDate">Song Release Date:</label>
                                    </div>
                                </div>


                                <div className='viewMusics'>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="songLanguage">Song Language:</label>
                                    </div>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="duration">Duration:</label>
                                    </div>
                                </div>


                                <div className='viewMusics'>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="country">Country:</label>
                                    </div>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="overallRate">Overall Rate:</label>
                                    </div>
                                </div>



                                <div className='viewMusics'>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="UploadMusic">Upload Muisc:</label>
                                    </div>
                                    <div>
                                        <label className='AddmusicLabel' htmlFor="imageUrl">Image Url:</label>
                                    </div>
                                </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default ViewAllMusic