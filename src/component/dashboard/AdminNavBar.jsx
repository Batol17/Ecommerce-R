import React from 'react'

function NavBar() {
   const img= localStorage.getItem('img')
   const name= localStorage.getItem('name')
  
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: ' #3d71bb',height:70 }}>
                <div className="container-fluid">
                    {/* Avatar */}
                    <ul className='navbar-nav  w-100 d-flex flex-row-reverse text-white'>
                        <div className='border-dark'>
                            <span className='pe-2'>Welcome {name} 👋🏻</span>
                            <img src={img} className="rounded-circle " style={{height:60}} alt="Avatar" />
                        </div>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default NavBar