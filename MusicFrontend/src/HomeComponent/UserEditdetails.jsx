import React from 'react'
import './AllSongs.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import './UserContent.css'
function UserEditdetails() {
    return (
        <div className="player">
            <div className="playerBody">
                <Sidebar />
                <Header />
                <div className="Homebody">
                    <div className="HomebodyInfo">
                        <div className="Users">
                            <div className='UserImage'>
                                <img className='Avatar' src="/src/assets/Avatar.png" alt="Avatar" />
                                <div className="AvatarName">
                                    <h3>User</h3>
                                </div>
                                <div className="formfields">
                                    <form className='EditForm'>

                                        <div className='UserFormfields'>
                                            <label className='UserfieldsLabel' htmlFor="Usernames">Name:</label>
                                            <input className='Userfieldsinput'
                                                type="text"
                                                id="Usernames"
                                                required
                                            />
                                        </div>

                                        <div className='UserFormfields'>
                                            <div>
                                                <label className='UserfieldsLabel' htmlFor="UploadMusic">Update Image:</label>
                                                <input className='Userfieldsinput' type="file" accept="image/png, image/jpeg" />
                                            </div>
                                        </div>
                                        <div className='usersubmit'>
                                            <button className='userSubmit'>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserEditdetails