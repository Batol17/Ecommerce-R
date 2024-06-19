import React, {  useState } from 'react'
import axiosIns from '../../axios/axios';






function Alert({id}) {





  // delete user 
  const deleteUser = async (id) => {
   const token =localStorage.getItem('token')
    try {
      const res = await axiosIns.delete(`api/users/${id}`,
        { headers: { Authorization: `Bearer ${token} ` } }
      )
      window.location.pathname('/dashboard/users')

    } catch (e) {
  
      console.log(e, 'error');
    }
  }
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          Are You Sure To Delete ?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <button type="button" className="btn btn-primary" onClick={()=>deleteUser(id) }>Yes</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Alert