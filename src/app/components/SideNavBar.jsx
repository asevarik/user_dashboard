import Link from 'next/link'
import React from 'react'

const SideNavBar = ({childern}) => {
  return (
  <div  className="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn bg-base-300 drawer-button lg:hidden absolute top-6 right-4 z-10"> &#9776;</label>
   {childern}
  </div> 
  <aside className="drawer-side 0 justify-center align-center">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-neutral flex flex-col  gap-64">
      {/* Sidebar content here */}
      
      <h1 className='capitalize text-3xl text-base-content font-bold ml-12'>dashboard</h1>
      <div className='flex flex-col gap-3'>
      <li><Link className='text-base-content' href='/dashboard/userdetails'>User Details</Link></li>
      <li><Link className='text-base-content' href='/dashboard/accountcreation'>Account Creation</Link></li> 
      </div>
    </ul>
  </aside>
</div>
  )
}

export default SideNavBar