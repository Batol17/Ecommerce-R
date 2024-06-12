import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import AdminNavBar from '../../component/dashboard/AdminNavBar'


function dashboard() {
 
  return (
    <div>
      <AdminNavBar />
      <Sidebar />
    </div>
  )
}

export default dashboard