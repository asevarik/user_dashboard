'use client'
import { UserContext } from './context/AppContext'
import {useState} from 'react';
import './globals.css'
import { DARK, LIGHT, dummyData } from './constants';
import DarkThemeSwitch from './components/DarkThemeSwitch';



export default function RootLayout({ children }) {
  const [userdetails,setUserDetails] = useState(dummyData)
  const [isDarkTheme,setisDarkTheme] = useState(DARK)
  const addUser = (user)=>{
    const newUserDetails = [...userdetails,user];
    setUserDetails(newUserDetails)
  }
  const handleDarkTheme = ()=>{
    if(isDarkTheme == DARK){
      setisDarkTheme(LIGHT)
    }else{
      setisDarkTheme(DARK)
    }
  }
  return (
    <UserContext.Provider value={{userdetails,addUser,handleDarkTheme}}>
    <html lang="en">
      <title>User Dashboard</title>
      <body data-theme={isDarkTheme}>
       <DarkThemeSwitch/>
        {children}</body>
    </html>
    </UserContext.Provider>
  )
}
