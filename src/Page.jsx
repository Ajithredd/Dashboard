import React from 'react'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import People from './Assets/people-group-svgrepo-com.png';
import ddown from './Assets/dropdown-arrow-svgrepo-com.png';
import com from './Assets/people-community-svgrepo-com.png';
import darrow from './Assets/down-arrow-svgrepo-com (1).png';
import rarrow from './Assets/arrow-right-curve-svgrepo-com.png';
import progres from './Assets/bar-chart-diagram-graph-horizontal-svgrepo-com.png';
import Labs from './Assets/money-svgrepo-com.png';
import Dollor from './Assets/dollar-bill-svgrepo-com.png';
import './Page.css';

const Page = () => {
  return (
    <div className='Page'>
       <Header/>
       <div className="main">
        <div className="sb">
        <Sidebar/>
        </div>
      
       <div className="db">
          <div className="cons">
            <img src={People} alt="" />
            <p>Consultants</p>
           </div>
       
           
            <div className="bx">
               <div className="filter">
                <p>Filters</p>
               
               </div>
                <div className="sel">
                    <p>Select Range</p>
                    <img src={ddown} alt="" />
                </div>
                <div className="check">
                    <div className="cbx">

                    </div>
                    <p>Summary</p>
                </div>
                <div className="check">
                    <div className="cbx">

                    </div>
                    <p>Branch Wise</p>
                </div>
            </div>
        
      
       <div className="crdbx">
        <div className="card">
            <div className="line">

            </div>
            <div className="mid">
            <h5>Consultant Count</h5>
                <h2>90/900</h2>
                <p>Today/Period</p>
            </div>
            <div className="end">
               <img src={com} alt="" />
            </div>
        </div>
        <div className="card" >
            <div className="line" id='l2'>

            </div>
            <div className="mid" >
            <h5>Consultations</h5>
                <h2>11/25</h2>
                <p>Today/Period</p>
            </div>
            <div className="end" id='b2'>
               <img src={progres} alt="" />
            </div>
        </div>
        <div className="card" >
            <div className="line" id='l3'>

            </div>
            <div className="mid">
            <h5>Labs</h5>
                <h2>25/560</h2>
                <p>Today/Period</p>
            </div>
            <div className="end" id='b3'>
               <img src={Labs} alt="" />
            </div>
        </div>
        <div className="card" >
            <div className="line" id='l4'>

            </div>
            <div className="mid">
            <h5>DietPlans</h5>
                <h2>25/250</h2>
                <p>Today/Period</p>
            </div>
            <div className="end" id='b4'>
               <img src={Dollor} alt="" />
            </div>
        </div>
       </div>
       <div className="table">
       
        <div className="title">
        <h2>Consultants</h2>
        <div className="imgs">
            <div className="imgbx">
                <img src={darrow} alt="" />
            </div>
            <div className="imgbx">
                <img src={rarrow} alt="" />
            </div>
        </div>
        </div>
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Patient Count</th>
      <th>Labs</th>
      <th>Diet Plans</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>20</td>
      <td>Lab A</td>
      <td>Diet Plan X</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>15</td>
      <td>Lab B</td>
      <td>Diet Plan Y</td>
    </tr>
    <tr>
      <td>Michael Johnson</td>
      <td>10</td>
      <td>Lab C</td>
      <td>Diet Plan Z</td>
    </tr>
    <tr>
      <td>Emily Davis</td>
      <td>18</td>
      <td>Lab D</td>
      <td>Diet Plan W</td>
    </tr>
    <tr>
      <td>William Brown</td>
      <td>22</td>
      <td>Lab E</td>
      <td>Diet Plan V</td>
    </tr>
    <tr>
      <td>Emma Wilson</td>
      <td>12</td>
      <td>Lab F</td>
      <td>Diet Plan U</td>
    </tr>
    <tr>
      <td>Ava Martinez</td>
      <td>25</td>
      <td>Lab G</td>
      <td>Diet Plan T</td>
    </tr>
    <tr>
      <td>Noah Garcia</td>
      <td>17</td>
      <td>Lab H</td>
      <td>Diet Plan S</td>
    </tr>
  </tbody>
</table>
       </div>
       </div>
       </div>
    
    </div>
  )
}

export default Page
