'use client'
import React, { useLayoutEffect, useState } from 'react';

interface TestPageLayout{
  children: any
}

const Page:React.FC<TestPageLayout> = ({ children}) => {
    const [containerH, setContainerH] = useState(0)

  useLayoutEffect(() => {
    const setContainerHeight = () => {
      const navElement = document.querySelector('.lessSpace1') as HTMLElement;
      const bottomElement = document.querySelector('.lessSpace2') as HTMLElement;

      if (navElement && bottomElement) {
        const navHeight = navElement?.offsetHeight ;
        const bottomHeight = bottomElement?.offsetHeight;
        const windowHeight = window.innerHeight;
        const containerHeight = windowHeight - navHeight - bottomHeight;

        const containers = document.querySelectorAll('.mainPlayArea');
        containers.forEach(container => {
            (container as HTMLElement).style.height = `${containerHeight}px`;
        });
        setContainerH(containerHeight)
      }
    };

    setContainerHeight();

    window.addEventListener("resize", setContainerHeight);
    document.addEventListener("DOMContentLoaded", setContainerHeight);

    return () => {
      window.removeEventListener("resize", setContainerHeight);
      document.removeEventListener("DOMContentLoaded", setContainerHeight);
    };
  }, []);

  return (
    <div className='parent' style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="nav" style={{ height: '60px' }}>
        NavBar
      </div>
      <div className="container" style={{ height: `${containerH}px`}}>
       {children}
      </div>
      <div className="bottom" style={{ height: '70px' }}>
        Bottom Bar
      </div>
    </div>
  );
};

export default Page;
