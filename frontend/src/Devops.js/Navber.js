import React from 'react'

export default function Navber() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow px-5">


                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                    <h3>Hi, Admin</h3>
                <div className='ms-auto'>
                    <button type="button" className="btn btn-outline-danger py-1 px-3 fs-6 shadow-none">Logout</button>
                </div>

            </nav>
        </div>
    )
}
