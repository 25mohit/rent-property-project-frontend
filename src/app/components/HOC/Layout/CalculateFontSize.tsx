"use client"
import React, { useEffect } from 'react';

interface TestInterface{
    children: any
}
const CalculateFontSize:React.FC<TestInterface> = ({children}) => {
  useEffect(() => {
    const calculateFontSizes = () => {
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      
      const root = document.querySelector(":root");
      if(windowWidth > 480)
        {
            let tempWidth = Math.round(windowHeight*412/914);
            if(tempWidth >= 479)
                windowWidth = 480;
            else
                windowWidth = tempWidth;
        }

      (root as HTMLElement).style.fontSize = (windowWidth / 425) + "px";

      const hiddenDivToCheckFont = document.createElement('div');
      hiddenDivToCheckFont.id = 'hiddenDivToCheckFont';
      hiddenDivToCheckFont.style.fontSize = '16px';
      hiddenDivToCheckFont.style.display = 'block';
      hiddenDivToCheckFont.style.width = 'fit-content';
      hiddenDivToCheckFont.style.position = 'fixed';
      hiddenDivToCheckFont.style.top = '0px';
      hiddenDivToCheckFont.style.left = '0px';
      hiddenDivToCheckFont.style.zIndex = '-1';
      document.getElementsByTagName('html')[0].appendChild(hiddenDivToCheckFont);
      hiddenDivToCheckFont.innerHTML = 'A B C D E F G H';

      const fontMultiplier = 114 / hiddenDivToCheckFont.offsetWidth;

      for (let i = 10; i <= 60; i++) {
        const root = document.querySelector(':root')
        if(root !== undefined){
            (root as HTMLElement).style.setProperty('--fontSize' + i, i * fontMultiplier + "rem");
        }
      }

      hiddenDivToCheckFont.remove();
    };

    calculateFontSizes();

    window.addEventListener('resize', calculateFontSizes);

    return () => {
      window.removeEventListener('resize', calculateFontSizes);
    };
  }, []);

return(
    <>
        {children}
    </>
)
};

export default CalculateFontSize;
