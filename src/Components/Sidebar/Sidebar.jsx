import React from 'react'
import Patients from '../../Assets/profile-circle-svgrepo-com.png';
import HR from '../../Assets/database-1-svgrepo-com.png';
import Labs from '../../Assets/funnel-thin-svgrepo-com.png';
import Pharma from '../../Assets/shop-svgrepo-com.png';
import Regis from '../../Assets/newspaper-newsletter-svgrepo-com.png';
import Cons from '../../Assets/form-svgrepo-com.png';
import Droper from '../../Assets/dropper-eyedropper-svgrepo-com.png';
import Bill from '../../Assets/money-cash-svgrepo-com.png';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sb-main'>
      <div className="sb-box">
        <h4>Dashboards</h4>
        <div className="sb-b1">
            <img src={Patients} alt="" className='sb-img' />
            <h5>Patients</h5>
        </div>
        <div className="sb-b2">
            <img src={HR} alt="" className='sb-img' />
            <h5>HR</h5>
        </div>
        <div className="sb-b3">
            <img src={Labs} alt="" className='sb-img'/>
            <h5>Labs</h5>
        </div>
        <div className="sb-b4">
            <img src={Pharma} alt="" className='sb-img'/>
            <h5>Pharma</h5>
        </div>
        <div className="sb-box">
        <h4>Processes</h4>
        <div className="sb-b1">
            <img src={Regis} alt="" className='sb-img'/>
            <h5>Registrations</h5>
        </div>
        <div className="sb-b2">
            <img src={Cons} alt="" className='sb-img'/>
            <h5>Consultations</h5>
        </div>
        <div className="sb-b3">
            <img src={Droper} alt="" className='sb-img' />
            <h5>Tests & Reports</h5>
        </div>
        <div className="sb-b4">
            <img src={Bill} alt="" className='sb-img'/>
            <h5>Billing</h5>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
