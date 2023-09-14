

import Compression from './Components/Compression';

import Login from './Components/Login';
import Logout from './Components/Logout';
import SaleReport from './Components/SaleReport';
import './dashboard.css'
import './Salesreport.css'
import './Compression.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Userimage from './images/Userimage.jpg'
import { AiOutlineRocket } from 'react-icons/ai'
import { LiaAddressCardSolid } from 'react-icons/lia'
import { useState } from 'react';
import Dashboardss from './Components/Dashboardss';



function App() {
  const [active, IsActive] = useState(1);
  return (
    <div>
     
      <div className='row xs'>
        <div className='col-lg-6 text-start'>
          <div className='d-flex mt-2 ' >
            <p className='fw-bold text-center' > Demeter Fragrances</p>
            <FontAwesomeIcon icon={faBars} className='d1 mt-1' />
          </div>

        </div>
        <div className='col-lg-6 d-flex justify-content-end d4'>
          <div className='d9 d-flex'>
            <img src={Userimage} className='sizing1' />
            <p className='mt-2 d8 '>Alina Mclourd   <span className='d-block fw-bold text-secondary d7 text-center'>VP People Manager  </span> </p>
          </div>
          {/* <p className=''>VP People Manager </p> */}

          <div className=' d5 mt-3'>
            <FontAwesomeIcon icon={faCalendar} className='d6' />
          </div>
        </div>
      </div>

      <div className='row aq'>
        <div className='col-lg-2'>
          <p className='d11 fw-bold '>  DASHBOARD  </p>

          <div className='container ' >
            <ul className="list-group " >

              <li className="fw-bold " onClick={() => IsActive(1)} style={active === 1 ? { backgroundColor: 'rgb(224,243,255)' } : { color: 'black' }}>
                <AiOutlineRocket className='t1' />
                Dashboard
              </li>

              <li className="t5" onClick={() => IsActive(2)} style={active === 2 ? { backgroundColor: 'rgb(224,243,255)' } : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Sale Report
              </li>

              <li className="t5" onClick={() => IsActive(3)} style={active === 3 ? { backgroundColor: 'rgb(224,243,255)' } : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Compression Report
              </li>

              <li className="t5" >
                <LiaAddressCardSolid className='t1' />
                Items Report</li>

              <li className="t5">
                <LiaAddressCardSolid className='t1' />
                Cogs Report</li>

            </ul>
          </div>

        </div>
        <div className='col-lg-10 active t4'>

          {active == 1 && <>
            <Dashboardss />
          </>}
          {active == 2 && <>
            <SaleReport />
          </>}
          {active == 3 && <>
            <Compression />
          </>}
        </div>
      </div>
    </div>
  );
}

export default App;
