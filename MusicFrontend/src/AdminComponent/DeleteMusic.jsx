import React from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
function DeleteMusic() {
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
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeleteMusic