import React from 'react'
import NavHome from './NavHome'
import './AdminHome'
import './AddMusic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function EditMusic() {
    return (
        <div className='whole1'>
            <NavHome />
            <div class="card2">
                <p className='cardTitle'>EDIT MUSIC</p>
                <div className="SearchMusic">
                    <div className="box">
                        <form className="searchmusix">
                            <input type="text" class="input" Classname="txt" onMouseOut="this.value = ''; this.blur();" />
                        </form>
                    </div>
                </div>
                <div className="formss">
                    <div className='forminputFields'>
                    <label className='labelfeild' for='inputs'>Song name</label>
                    <input type="text" className='inputfields' name='inputs'/>
                    </div>

                    <div className='forminputFields'>
                    <label className='labelfeild' for='inputs'>Artist Name</label>
                    <input type="text" className='inputfields' name='inputs'/>
                    </div>

                    <div className='forminputFields'>
                    <label className='labelfeild' for='inputs'>Song name</label>
                    <input type="text" className='inputfields' name='inputs'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMusic