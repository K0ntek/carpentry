import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Attributes = () => {

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const setWindowDimensions = () => {
          setWindowWidth(window.innerWidth);
      };
      useEffect(() => {
          window.addEventListener('resize', setWindowDimensions);
          return () => {
          window.removeEventListener('resize', setWindowDimensions);
          };
      }, []);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        if(windowWidth > 800){
          gsap.fromTo('.title', { y: 200, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5, scrollTrigger: {
            trigger: '.wrapper',
            start: 'top 60%',
            end: 'top 20%',
            scrub: 2,
          },
        }
      );
        }
    },[])
  return (
    <div className='wrapper'>
         <div className=' ml-[2%] md:ml-[10%] overflow-hidden w-fit lg:h-[170px]'>
            <h1 className=' font-mont text-[50px] sm:text-[80px] lg:text-[110px] xl:text-[150px] font-[800] relative title'>PUNCTUALITY</h1>
         </div>

         <div className=' ml-[20%] sm:ml-[35%] overflow-hidden w-fit lg:h-[170px]'>
            <h1 className=' font-mont text-[50px] sm:text-[80px] lg:text-[110px] xl:text-[150px] font-[300] relative title'>PASSION</h1>
        </div>

         <div className=' ml-[7%] sm:ml-[15%] overflow-hidden w-fit lg:h-[170px]'>
            <h1 className=' font-mont text-[50px] sm:text-[80px] lg:text-[110px] xl:text-[150px] font-[600] relative title'>PRECISION</h1>
         </div>
    </div>
  )
}

export default Attributes