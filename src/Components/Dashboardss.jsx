import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineRocket } from 'react-icons/ai'
import { LiaAddressCardSolid } from 'react-icons/lia'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { FaCircleDot } from 'react-icons/fa6'
import Chart from "react-apexcharts";
import Userimage from '../images/Userimage.jpg'


function Dashboardss(props) {
    const [width, setWidth] = useState(100);
    const [wid, setWid] = useState(100);
    const [wids, setWids] = useState(100);
    const [widts, setWidts] = useState(100);
    const [value, setValue] = useState(0);

    const [state, setstate] = useState({
        options: {
            chart: {
                type: "bar",
                height: 550,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "80%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["transparent"],
            },
            yaxis: {
                show: true,
                showAlways: true,
                showForNullSeries: true,
                logBase: 10,
                tickAmount: 6,
            },

            // {
            //     id: "basic-bar"
            // },
            xaxis: {
                categories: ["January", "Februry", "March", "April", "May", "June", "July", "August"]
            },

        },
        series: [
            {
                name: "Dataset 1",
                data: [10, 40, 45, 50, 49, 60, 70, 65],
                color: "rgb(220,53,69)"
            },
            {
                name: "Dataset 2",
                data: [10, 42, 41, 60, 43, 30, 73, 31],
                color: "rgb(0,123,255)"
            },
            {
                name: "Dataset 3",
                data: [10, 42, 41, 60, 43, 30, 73, 31],
                color: "rgb(40,167,69)"

            }
        ]
    });
    const [states, setstates] = useState({
        options: {
            chart: {
                type: "line",

            },

        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight'
        },





        series: [
            {
                name: "Dataset",
                data: [10, 40, 45, 50, 49, 60, 70, 65],
                color: "rgb(220,53,69)"
            },
            {
                name: "Dataset 2",
                data: [10, 30, 36, 60, 43, 30, 73, 31],
                color: "rgb(0,123,255)"
            },


        ]
    });
    const changeWidth = (event) => {
        setWidth(event.target.value);
    };
    const changeWid = (event) => {
        setWid(event.target.value);
    };
    const changeWids = (event) => {
        setWids(event.target.value);
    };
    const changeWidts = (event) => {
        setWidts(event.target.value);
    };
    return (
        <div>
            <div className='container'>

                <div className='row'>

                    <div className='col-lg-4 mt-3 t7  d-flex'>
                        <div className='tyt'>
                            <p className='fw-bold text-white '>Total Order <span className='d-block t8'> Last year expenses</span> </p>
                        </div>
                        <h3 className='fw-bold text-white mt-3'>$568</h3>
                    </div>

                    <div className='col-lg-4 c1 t77 mt-3 d-flex '>
                        <div className='tyt'>
                            <p className='fw-bold text-white '>Clients <span className='d-block t8'> Last year expenses</span> </p>
                        </div>
                        <h3 className='fw-bold text-white mt-3'> 1896</h3>
                    </div>


                    <div className='col-lg-4 mt-3 t77 c265 d-flex '>
                        <div className='tyt'>
                            <p className='fw-bold text-white '>Followers <span className='d-block t18'> Last year expenses</span> </p>
                        </div>
                        <h3 className='fw-bold text-white mt-3'>46%</h3>
                    </div>
                </div>

                <div className='row '>
                    <div className='col-lg-6 mt-3  c4 '>
                        <div className=' d-flex sas'>
                            <p className='mt-3 ds  fw-bold'> Sales Report</p>
                            <div className='d-flex mt-3 nb1'>
                                <p className='w1 '>Last</p>
                                <p className='w12'>Current</p>
                            </div>
                        </div>
                        <div className='hr_line'></div>





                        <div className='c67 mt-3'>
                            <Chart
                                series={state.series}
                                options={state.options}
                                type="bar"
                                width="500"
                            />
                        </div>

                        <div className=''>
                            <p className='text-secondary  mt-4 kl'>TOP AUTHORS</p>
                            <ul className="">
                                <li className="list-group-item">
                                    <div className='d-flex cvx'>
                                        <img src={Userimage} className='sizing ' />
                                        <p className='fw-bold jk mt-2'>Ella-Rose-Henry <span className='d-block text-secondary pl'>Web Developer</span></p>
                                        <p className='text-secondary gf mt-2'>$ <span className='bh text-secondary'>129</span></p>
                                        <IoIosArrowDown className='mt-3 az' />

                                    </div>
                                </li>
                                <li className="list-group-item ">
                                    <div className='d-flex cvx'>
                                        <img src={Userimage} className='sizing ' />
                                        <p className='fw-bold jk mt-2'>Ruben Tillman <span className='d-block text-secondary pl'>Web Developer</span></p>
                                        <p className='text-secondary gff mt-2'>$ <span className='bh text-secondary'>54</span></p>
                                        <IoIosArrowUp className='mt-3 az1' />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className='d-flex cvx'>
                                        <img src={Userimage} className='sizing ' />
                                        <p className='fw-bold jk mt-2'>Winni Wagstaff <span className='d-block text-secondary pl'>Web Developer</span></p>
                                        <p className='text-secondary gf mt-2'>$ <span className='bh text-secondary'>429</span></p>
                                        <FaCircleDot className='mt-3 az2' />
                                    </div>
                                </li>

                            </ul>

                        </div>


                    </div>
                    <div className='col-lg-6 c4 mt-3 sa'>
                        <div className=' d-flex sas'>
                            <p className='mt-3 ds  fw-bold'> Bandwidth Report</p>
                            <div className='d-flex mt-2 nb'>
                                <button type="button" className="btn btn bnm rew  text-white">Tab1</button>
                                <button type="button" className="btn btn rew fw-bold">Tab2</button>
                            </div>
                        </div>
                        <div className='hr_line'></div>

                        <Chart className=" mj"
                            series={states.series}
                            options={states.options}
                            type="line"
                            width={500}
                        />
                        <p className='text-center cd2 '> <AiOutlineArrowLeft />175.5%<span className='text-secondary dcd'>increased server resources</span></p>

                        <div className='row cde1'>
                            <div className='col-lg-6'>
                                <div className='d-flex '>
                                    <p className='text-start fw-bold ft mt-3'>{`${width}%`}</p>
                                    <p className='text-secondary sx mt-3'>Generated Leads</p>
                                </div>
                                <input
                                    type='range'
                                    onChange={changeWidth}
                                    min={1}
                                    max={100}
                                    step={1}
                                    value={width}
                                    className='opp'

                                />

                            </div>
                            <div className='col-lg-6'>
                                <div className='d-flex '>
                                    <p className='text-start fw-bold ft mt-3'>{`${wid}%`}</p>
                                    <p className='text-secondary sx mt-3'>Submitted Tickers</p>
                                </div>
                                <input
                                    type='range'
                                    onChange={changeWid}
                                    min={1}
                                    max={100}
                                    step={1}
                                    value={wid}
                                    className='dfd'
                                />

                            </div>
                            <div className='col-lg-6'>
                                <div className='d-flex '>
                                    <p className='text-start fw-bold ft mt-3'>{`${wids}%`}</p>
                                    <p className='text-secondary sx mt-3'>Server Allocation</p>
                                </div>
                                <input
                                    type='range'
                                    onChange={changeWids}
                                    min={1}
                                    max={100}
                                    step={1}
                                    value={wids}
                                    className='vgh'
                                />

                            </div>
                            <div className='col-lg-6'>
                                <div className='d-flex '>
                                    <p className='text-start fw-bold ft mt-3'>{`${widts}%`}</p>
                                    <p className='text-secondary sx mt-3'>Generated Leads</p>
                                </div>
                                <input
                                    type='range'
                                    onChange={changeWidts}
                                    min={1}
                                    max={100}
                                    step={1}
                                    value={widts}
                                    className='mm1'
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardss;