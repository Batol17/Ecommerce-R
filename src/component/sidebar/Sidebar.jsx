import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
import { FaUsersLine } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";

function Sidebar() {
    return (
        <div>
            <div className="row">
                <div className="col-auto min-vh-100 bg-light  pt-5 text-white ">
                    <ul className='text-dark '>
                        <li className='py-2  list-group-item'>
                            <a href="" className="nav-link px-1 ">
                                <i >
                                    <Link to='dashboard' className="nav-link">
                                        <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </Link>
                                </i>
                            </a>
                        </li>
                        <li className='py-2 list-group-item'>
                            <a href="" className="nav-link px-1">
                                <i className="bi-speedometer">
                                    <Link to='users' className="nav-link">
                                        <FaUsersLine />
                                        <span className="ms-1 ps-2 d-none d-sm-inline">Users</span>

                                    </Link>

                                </i>
                            </a>
                        </li>
                        <li className='py-2 list-group-item'>
                            <a href="" className="nav-link px-1">
                                <i className="bi-table">
                                    <MdProductionQuantityLimits/>
                                    <span className="ms-1  ps-2 d-none d-sm-inline">Product</span>

                                </i>
                            </a>
                        </li>
                        <li className='py-2 list-group-item'>
                            <a href="" className="nav-link px-1">
                                <i className="bi-heart">
                                    <span className="ms-1 ps-2 d-none d-sm-inline">Dashboard</span>
                                    
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar