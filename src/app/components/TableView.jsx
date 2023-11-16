'use client'
import React from 'react'

const TableView = ({dummyData,handleRowClick}) => {
  return (
    <div className="overflow-x-auto max-h-96 table-pin-rows">
    <table className="table !z-0">
      {/* head */}
      <thead>
        <tr className='font-semibold text-xl text-center text-base-content'>
          <th>Id</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody className='text-base-content text-center'>
      {dummyData.length >=1 && dummyData.map((row)=>{
       return( <tr key={row.id} onClick={()=>handleRowClick(row)} className='hover:cursor-pointer'>
         <th>{row.id}</th>
         <td>{row.username}</td>
         <td>{row.email}</td>
         <td>{row.phone}</td>
         <td>{row.creationDate}</td>
       </tr>
       )
      })}
      </tbody>
    </table>
  </div>
  )
}

export default TableView;