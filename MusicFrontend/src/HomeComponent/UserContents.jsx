import React from 'react'
import './UserContent.css'

import { Link } from 'react-router-dom';
function UserContents() {
    return (
        <div className="Homebody">
            <div className="HomebodyInfo">
                <div className="Users">
                    <div className='UserImage'>
                        <img className='Avatar' src="/src/assets/Avatar.png" alt="Avatar" />
                        <div className="AvatarName">
                            <h3>User</h3>
                        </div>
                        <Link to="/Home/EditDetails">
                        <div className="editDetails">
                            <p className='detailsavartar'>Edit details</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContents