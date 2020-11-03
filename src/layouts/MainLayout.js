import React from 'react'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'

const MainLayout = ({ children }) => {
  return (
    <main>
      <SideNav />
      <div>
        <Header />
        {children}
      </div>
    </main>
  )
}

export default MainLayout