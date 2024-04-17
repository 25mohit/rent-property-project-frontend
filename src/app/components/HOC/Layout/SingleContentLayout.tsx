"use client"
import React, { useEffect } from 'react'

interface SingleContentInterface{
    children: any
}

const SingleContentLayout:React.FC<SingleContentInterface> = ({ children }) => {

  useEffect(() => {
    const onResize = () => {
      const containerHTML = document.querySelector('.single-content-layout');
      (containerHTML as HTMLElement).style.height = `${window.innerHeight}px`;
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className='single-content-layout scroll' style={{height: `${window.innerHeight}px`}}> 
        {children}
    </div>
  )
}

export default SingleContentLayout