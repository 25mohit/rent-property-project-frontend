"use client"
import { useEffect } from 'react'
import BottomBar from "../components/Utils/BottomBar/BottomBar";
import HeaderBar from "../components/Utils/HeaderBar/HeaderBar";

export default function Layout({ children }: any){
    
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
            <div className="headerSpace"><HeaderBar /></div>
            <section className='multiContentLayout scroll'>
                {children}</section>
            <div className='bottomBarSpace'><BottomBar /></div>
        </>
    )
}