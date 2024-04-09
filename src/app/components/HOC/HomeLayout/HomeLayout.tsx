import React from 'react'
import BottomBar from '../../Utils/BottomBar/BottomBar'

interface HomeLayoutInterface{
    children: any
}

const HomeLayout:React.FC<HomeLayoutInterface> = ({ children }) => {
  return (
    <section className='home-layout'>
        {children}
        <BottomBar />
    </section>
  )
}

export default HomeLayout