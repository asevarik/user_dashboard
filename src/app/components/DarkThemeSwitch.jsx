'use client'
import React from 'react'
import { UserContext } from '../context/AppContext'
import { DARK } from '../constants'
import { Sun, Moon } from 'react-feather';

const DarkThemeSwitch = () => {
    const {isDarkTheme,handleDarkTheme} = React.useContext(UserContext)
  return (
    <div className='absolute top-9 right-20 z-50'>
    <div className='flex gap-3'>
    <Moon/>
    <input type="checkbox" value={isDarkTheme===DARK} className="toggle toggle-md hover:cursor-pointer" onClick={handleDarkTheme}/>
    <Sun/>
    </div>
    </div>
  )
}

export default DarkThemeSwitch