"use client"
import React, { useEffect } from 'react'

interface SingleContentInterface{
    children: any
}

const SingleContentLayout:React.FC<SingleContentInterface> = ({ children }) => {

  useEffect(() => {
    const onResize = () => {
      const containerHTML = document.querySelector('.singleContentLayout');
      (containerHTML as HTMLElement).style.height = `${window.innerHeight}px`;
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className='singleContentLayout scroll' style={{height: `${window.innerHeight}px`}}> 
        {children}
    </div>
  )
}

export default SingleContentLayout