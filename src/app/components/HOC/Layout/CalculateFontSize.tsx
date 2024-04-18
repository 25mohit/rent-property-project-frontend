"use client"
import React, { useEffect } from 'react';

interface TestInterface{
    children: any
}
const CalculateFontSize:React.FC<TestInterface> = ({children}) => {
  useEffect(() => {
    const calculateFontSizes = () => {
      const windowWidth = window.innerWidth;
      const root = document.querySelector(":root");
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
