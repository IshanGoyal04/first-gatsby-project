import React from 'react'
import Navbar from './Navbar'
import './../styles/global.css'
export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        {/** content for each page */}
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Demo Project</p>
      </footer>
    </div>
  )
}
