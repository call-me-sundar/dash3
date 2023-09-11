import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SIdeNav() {
    const [isActive, setIsActive] = useState(false);

  const toggleClassName = () => {
    setIsActive(!isActive);
  };

    return (
        <div className="bg-primary position-sticky top-0"style={{ height: '100vh', zIndex:'5' }}>
            <ul className={`nav sidenav flex-column ${isActive && 'active'}`} style={{height:'100vh'}} >
                <Link className="navbar-brand text-white fs-3 text-center py-3" to='/'>
                    DB</Link>
                <li className="nav-item">
                    <Link className="nav-link text-white" to='/' title='Home'>
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to='/tabledatas' title='Table Datas'>
                        <i className="fa-solid fa-database"></i>
                        <span>Table Datas</span></Link>
                </li>
            </ul>
            <div onClick={toggleClassName} className={`position-absolute start-100 menu top-0 cursor-pointer bg-primary`}>
                    <i className={`fa-solid fa-bars text-white ${isActive ? 'd-none' : 'd-block'}`}></i>
                    <i className={`fa-solid fa-xmark text-white ${isActive ? 'd-block' : 'd-none'}`}></i>
                </div>
        </div>

    )
}
