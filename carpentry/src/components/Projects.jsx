import React from 'react'
import { FaS } from 'react-icons/fa6';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {

  const realisations = [
    {
      image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582417728413-b2347161b864?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'livingroom renovation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam dignissimos earum ipsam ullam dolorum facilis modi placeat dolor suscipit.'
    },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    }
  };

  return (
    <div className=' py-10 bg-[#eddbf01c]' id='projects'>
        <div className=' flex ml-10 mx-auto justify-center'>
                <VscWorkspaceTrusted className='text-5xl mr-2 text-[#292c1c] mt-1'/>
                <h1 className=' text-4xl sm:text-5xl font-mont font-[200] text-[#292c1c]'> OUR LAST <span className=' font-[600] text-[#292c1c]'>REALISATIONS</span>.</h1>
            </div>
            <div className=' w-5/6 mx-auto'>
                <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={500}
                className='pb-3'
                
              >
                 {realisations.map((realisation, i)=>{
                    return(
                      <div className=' m-3 overflow-hidden rounded-3xl' key={i}>
                          <img src={realisation.image} alt={realisation.name} className=' rounded-3xl aspect-square md:aspect-[9/12] w-auto h-auto block object-cover hover:scale-125 transition-all duration-150'/>
                          {/* <h1 className=' text-3xl font-[600] font-mont'>{realisation.name}</h1>
                          <p className='text-lg text-justify'>{realisation.description}</p> */}
                      </div>
                    )
                  })}
              </Carousel>
                </div>
    </div>
  )
}

export default Projects