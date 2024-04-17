"use client"
import { useEffect } from 'react'

interface multiContentInterface{
    children: any
}
const MultiContentLayout:React.FC<multiContentInterface> = ({ children }) => {

  useEffect(() => {
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
    <div className='multi-content-layout'>
        <div className="nav" style={{height: '60px'}}></div>
        <section className='container'>{children}</section>
        <div className="bottom" style={{height: '60px'}}></div>
    </div>
  )
}

export default MultiContentLayout