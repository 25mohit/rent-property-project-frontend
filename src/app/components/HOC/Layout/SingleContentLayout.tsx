"use client"
import React, { useEffect, useState } from 'react'

interface SingleContentInterface{
    children: any
}

const SingleContentLayout:React.FC<SingleContentInterface> = ({ children }) => {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
      const onResize = () => {
          setHeight(window.innerHeight);
      };

      if (typeof window !== 'undefined') {
          window.addEventListener('resize', onResize);
          setHeight(window.innerHeight);
          return () => window.removeEventListener('resize', onResize);
      }
  }, []);

  const containerStyle = {
      height: height ? `${height}px` : '100vh', // Use calculated height or default to 100vh
  };
  return (
    <div className='single-content-layout scroll' style={containerStyle}> 
        {children}
    </div>
  )
}

export default SingleContentLayout