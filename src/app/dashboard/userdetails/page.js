'use client'
import TableView from '@/app/components/TableView'
import { UserContext } from '@/app/context/AppContext'
import {useContext,useState,useMemo} from 'react'
import _debounce from 'lodash/debounce';
import _ from 'lodash';
import CustomAlert from '@/app/components/CustomAlert';

const page = () => {
  const {userdetails} = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSelectedUser,setCurrentSelectedUser] = useState(userdetails[0]);
  const debouncedHandleChange = _debounce((value) => {
    setSearchTerm(value);
  }, 300); 

  const handleChange = (event) => {
    const value = event.target.value;
    debouncedHandleChange(value);
  };
  const filteredUserDetails = useMemo(() => {
    // Use lodash's _.filter for optimized search term comparison
    return  _.filter(userdetails, (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, userdetails]);

  const handleUserClick =(user)=>{
      setCurrentSelectedUser(user)
      document.getElementById('my_modal_3').showModal()
  }


  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
    <section className='lg:w-3/4 lg:h-[500px] rounded-xl flex flex-col'>
    <div className='flex justify-between mb-5'>
    <h1 className='capitalize font-bold text-3xl text-base-content'>User Details</h1>
    <input type="text" placeholder="Search..." onChange={handleChange} className="input input-bordered w-full max-w-xs" />
    </div>
    <CustomAlert user={currentSelectedUser}/>
    <TableView dummyData={filteredUserDetails.length>=1 ? filteredUserDetails : []} handleRowClick={handleUserClick}/>
    </section>
     
    </div>
  )
}

export default page;
