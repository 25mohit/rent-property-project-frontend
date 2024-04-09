import React from 'react'

interface HomeLayoutInterface{
    children: any
}

const HomeLayout:React.FC<HomeLayoutInterface> = ({ children }) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default HomeLayout