import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';


const HeaderWrapper = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div>
       <div className=' grid grid-cols-[49%_2%_49%] z-[99]'>
          <div className=' w-full h-screen bg-[url("https://images.unsplash.com/photo-1524169741802-fe62fbccd1a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-[60%]'></div>
          <div className=' w-full h-full bg-black'></div>
          <div className=' w-full h-screen bg-[url("https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-[60%]'></div>
       </div>
        
       <div className=' absolute top-0 left-0 w-full'>
        <Header/>
        </div>

    </div>
  )
}

export default HeaderWrapper