'use client'
import { useLayoutEffect, useState } from 'react';

const Page = () => {
    const [containerH, setContainerH] = useState(0)

  useLayoutEffect(() => {
    const setContainerHeight = () => {
      const navElement = document.querySelector('.nav') as HTMLElement;
      const bottomElement = document.querySelector('.bottom') as HTMLElement;

      if (navElement && bottomElement) {
        const navHeight = navElement?.offsetHeight ;
        const bottomHeight = bottomElement?.offsetHeight;
        const windowHeight = window.innerHeight;
        const containerHeight = windowHeight - navHeight - bottomHeight;

        const containers = document.querySelectorAll('.container');
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
      <div className="container">
        Container <br />
        {containerH}px
      </div>
      <div className="bottom" style={{ height: '70px' }}>
        Bottom Bar
      </div>
    </div>
  );
};

export default Page;
