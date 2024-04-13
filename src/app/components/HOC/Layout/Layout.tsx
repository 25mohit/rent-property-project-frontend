
'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'

interface LayoutInterface{
    children: any
}
const Layout:React.FC<LayoutInterface> = ({ children }) => {
    const [fontSize, setFontSize] = useState('16px'); // Initial font size

    // useEffect(() => {
    //   // Function to calculate font size dynamically
    //   const calculateFontSize = () => {
    //     // Calculate font size based on window width or any other criteria
    //     const windowWidth = window.innerWidth;
    //     const calculatedFontSize = `${windowWidth / 20}px`; // Adjust this calculation as needed
    //     setFontSize(calculatedFontSize);
    //   };
  
    //   // Call the calculateFontSize function initially and on window resize
    //   calculateFontSize();
    //   window.addEventListener('resize', calculateFontSize);
  
    //   // Cleanup event listener
    //   return () => {
    //     window.removeEventListener('resize', calculateFontSize);
    //   };
    // }, []); // Run only on component mount
    // console.log("fontSize", fontSize)

    // let windowWidthCalculated,windowHeightCalculated; 
    const [windowHeightCalculated, setWindowHeightCalculated] = useState(0)
    const [windowWidthCalculated, setWindowWidthCalculated] = useState(0)
    
    useLayoutEffect(() => {
        function setRemForHTML() {
            console.log('RU')
            if (window.innerWidth) {
                setWindowWidthCalculated(window.innerWidth)
                setWindowHeightCalculated(window.innerHeight);
             }
             else if (document.documentElement && document.documentElement.clientWidth){
                setWindowWidthCalculated(document.documentElement.clientWidth)
                setWindowHeightCalculated(document.documentElement.clientHeight);
             }
             else if (document.body && document.body.clientWidth) {
                setWindowWidthCalculated(document.body.clientWidth)
                setWindowHeightCalculated(document.body.clientHeight);
             }
             if(windowWidthCalculated > 480)
                {
                    let tempWidth = Math.round(windowHeightCalculated*412/914);
                    if(tempWidth >= 479)
                        setWindowWidthCalculated(480);
                    else
                        setWindowWidthCalculated(tempWidth);
                }
                
            // alert('ads')
        }
         window.addEventListener("resize", setRemForHTML);
        //  document.addEventListener("DOMContentLoaded", setRemForHTML);

         return () => {
            window.removeEventListener("resize", setRemForHTML);
            // document.removeEventListener("DOMContentLoaded", setRemForHTML);
         }
    },[])
    
    console.log("windowWidthCalculated", windowWidthCalculated, windowHeightCalculated)
  return (
    <div>
        {/* <h1 style={{fontSize}}>Mohit Agarwal</h1> */}
        {/* {windowWidthCalculated} <br></br> */}
        {/* <span>{fontSize}</span> */}
        {children}
    </div>
  )
}

export default Layout