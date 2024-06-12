import React from 'react'

function NavBar() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: ' #3d71bb',height:70 }}>
                <div className="container-fluid">
                    {/* Avatar */}
                    <ul className='navbar-nav  w-100 d-flex flex-row-reverse text-white'>
                        <div className='border-dark'>
                            <span className='pe-2'>Welcome John Doe 👋🏻</span>
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle " style={{height:50}} alt="Avatar" />
                        </div>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default NavBar