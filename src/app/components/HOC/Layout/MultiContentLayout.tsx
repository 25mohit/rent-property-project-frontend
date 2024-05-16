"use client"
import { useEffect } from 'react'
import HeaderBar from '../../Utils/HeaderBar/HeaderBar';
import BottomBar from '../../Utils/BottomBar/BottomBar';
import CalculateFontSize from './CalculateFontSize';

interface multiContentInterface{
    children: any
}
const MultiContentLayout:React.FC<multiContentInterface> = ({ children }) => {

  useEffect(() => {
    const setContainerHeight = () => {
      const navElement = document.querySelector('.headerSpace') as HTMLElement;
      const bottomElement = document.querySelector('.bottomBarSpace') as HTMLElement;

      if (navElement && bottomElement) {
        const navHeight = navElement?.offsetHeight ;
        const bottomHeight = bottomElement?.offsetHeight;
        const windowHeight = window.innerHeight;
        const containerHeight = windowHeight - navHeight - bottomHeight;

        const containers = document.querySelectorAll('.multiContentLayout');
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
    <>
      <div className='headerSpace'><HeaderBar/></div>
      <section className='multiContentLayout scroll'>{children}</section>
      <div className='bottomBarSpace'><BottomBar/></div>
      </>
  )
}

export default MultiContentLayout