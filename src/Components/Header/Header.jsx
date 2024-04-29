import React from 'react'
import ddown from '../../Assets/dropdown-arrow-svgrepo-com.png'

import search from '../../Assets/search-alt-1-svgrepo-com.png'
import Add from '../../Assets/add-svgrepo-com.png'
import Notif from '../../Assets/notification-bell-svgrepo-com.png'
import Profile from '../../Assets/profile-circle-svgrepo-com.png'
import './Header.css'

const Header = () => {
  return (
    <div className='h-main'>
        <div className="hr-srchbtn">
            <div className="hr-patients">
                  <p>Patients</p>
                  <div className="hr-pts-img">
                  <img src={ddown} alt="" />
                  </div>
                  
            </div>
            <div className="hr-search">
            <input type="text" className="search-input" placeholder="Search..."/>
        <img src={search} alt="Search" className="search-icon"/>
   
           </div>
        </div>
        <div className="hr-new">
          
           <img src={Add} alt="" className='add-icon' />
          
           <p className='new-p'>Add New</p>
        </div>
        <div className="hr-profile">
           <div className="hr-pr-img" >
           <img src={Notif} alt="" id='notif' />
           </div>
           <div className="hr-pr-img">
           <img src={Profile} alt="" />
           </div>
        </div>
      
    </div>
  )
}

export default Header
