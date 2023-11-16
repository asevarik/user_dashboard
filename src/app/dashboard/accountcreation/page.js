'use client'
import { UserContext } from '@/app/context/AppContext';
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const refUserName = React.useRef();
  const refPhone = React.useRef();
  const refEmail = React.useRef();
  const refPassword = React.useRef();
  const refConfirmPassword = React.useRef();
  const router = useRouter();
  const {addUser,userdetails} = React.useContext(UserContext);
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    if(refPassword.current.value !==refConfirmPassword.current.value){
    return alert("Passwords do not match")
    }
    addUser({
      id:userdetails.length+1,
      username:refUserName.current.value,
      email:refEmail.current.value,
      phone:refPhone.current.value,
      creationDate:new Date().toDateString(),
    })
    router.replace('/dashboard/userdetails')
  }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
    <section className='lg:w-3/4 lg:h-[500px] rounded-xl flex flex-col'>
  <h2 class="text-2xl font-bold mb-4 text-base-content">Account Creation</h2>
  <form onSubmit={handleFormSubmit}>
    <div class="mb-4">
      <label for="name" class="block text-base-content text-sm font-light mb-2">UserName</label>
      <input type="text" ref={refUserName} required placeholder="Type Username here" className="input input-bordered w-full " />
    </div>
    <div class="mb-4">
      <label for="name" class="block text-base-content text-sm font-light mb-2">Phone</label>
      <input type="number" ref={refPhone} required placeholder="Type Phone here" className="input input-bordered w-full " />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-base-content text-sm font-light mb-2">Email</label>
      <input type="email" ref={refEmail} required  placeholder="Type here" className="input input-bordered w-full " />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-base-content text-sm font-light mb-2">Password</label>
      <input type="text" title='the password must contain one lowercase,on uppercase,one number and a special case character' ref={refPassword} required pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$' placeholder="Password" className="input input-bordered w-full " />
    </div>
    <div class="mb-4">
      <label for="email"  class="block text-base-content text-sm font-light mb-2">Confirm Password</label>
      <input type="text" title='the password must contain one lowercase,on uppercase,one number and a special case character' ref={refConfirmPassword} pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$' placeholder="confirm password" className="input input-bordered w-full " />
    </div>
    <button type="submit" class="hover:bg-neutral bg-base-300 text-base-content py-2 px-4 rounded-md ">Submit</button>
  </form>
      </section>
    </div>
  )
}

export default page