import React, { useState } from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

function Sidebar() {

  return (
    <div className='sidebar'>
      <img className='sidebarLogo' src="/src/assets/muzixlogo.png" alt="MuzixLogo"/>
      <SidebarOptions/>
    </div>
  );
}

export default Sidebar;
