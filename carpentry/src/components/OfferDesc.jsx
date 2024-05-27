import React from 'react'
import { useState, useEffect } from 'react';
import lines from '../assets/lines.png'
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';

const OfferDesc = () => {

    const description =[
        {
            img:'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:1,
            background: '#171810',
            text: '#ddd',
            link : 'option1',
        },
        {
            img:'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:2,
            background: 'rgb(9,9,11)',
            text: '#ddd',
            link : 'option2',
        },
        {
            img:'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:3,
            background: '#111',
            text: '#ddd',
            link : 'option3',
        },
        {
            img:'https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION4',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:4,
            background: 'rgb(2,2,4)',
            text: '#ddd',
            link : 'option4',
        },
    ]

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
        gsap.registerPlugin(ScrollTrigger)

        if (window.innerWidth > 1024){
            let images = document.querySelectorAll('.image')
            images.forEach(image=>{
                // gsap.set(image, {opacity:0, scrollTrigger:{trigger:image, start:'top 120%', toggleActions:'restart'}})
                gsap.fromTo(image, { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration:.5, stagger: 0.1, scrollTrigger: {
                    trigger: image,
                    start: 'top 60%',}});
            })

            let lines = document.querySelectorAll('.lines')
            lines.forEach(linesElement=>{
                gsap.fromTo(linesElement, { y: 300, opacity:0}, { y: 0, opacity:.1, duration:.5, stagger: 0.1, scrollTrigger: {
                    trigger: linesElement,
                    start: 'top 60%',}});
        
            })

            let content = document.querySelectorAll('.content')
            content.forEach(contentElement=>{
                gsap.fromTo(contentElement, { y: -300, opacity: 0 }, { y: 0, opacity: 1, duration:.5, stagger: 0.1, scrollTrigger: {
                    trigger: contentElement,
                    start: 'top 40%',}});
            })
            }
    },[])

  return (
    <div id='offerWrapp'>
        {description.map((descElement, i)=>{
            return(
                <div key={i} id={descElement.link}>
                   {i%2==0&&(
                        <div className=' contentWrapper grid lg:grid-cols-2'  style={{background: descElement.background, color: descElement.text}}>
                            <div className='overflow-y-hidden'>
                                <div className=' mx-3 mt-3 lg:me-0 lg:ms-3 lg:my-3 image'>
                                    <img src={descElement.img} alt={descElement.name} className=' aspect-video lg:aspect-square object-cover rounded-3xl'/>
                                </div>
                           </div>
                            
                            <div className=' text-white rounded-3xl relative'>
                            <div className=' absolute w-full h-full z-[97] top-0 left-0 lines' style={{backgroundImage: `url(${lines})`, backgroundSize:'cover', opacity: '50%'}}></div>

                               <div className=' relative top-[50%] translate-y-[-50%] z-[98] py-7'>
                                <h1 className=' text-7xl sm:text-8xl xl:text-9xl font-mont font-[600] m-6 content'>{descElement.name}</h1>
                                    <p className=' text-xl w-4/5 text-justify mx-auto content'>{descElement.desc}</p>

                                        <Link to='offerWrapper' smooth={true} spy={true}>
                                            <div className='w-fit group mx-auto my-6'>
                                                <div className=' mx-auto w-1/2 group-hover:w-4/5 bg-[silver] h-[2px] transition-all duration-150'></div>
                                                    <button className='bg-black/20 text-white px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150'>COME BACK</button>
                                                <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#ffffff] transition-all duration-150'></div>
                                            </div>
                                        </Link>
                               </div>
                            </div>
                        </div>
                   )}

                    {windowWidth > 1024 && i%2!=0&&(
                        <div className=' contentWrapper grid lg:grid-cols-2'  style={{background: descElement.background, color: descElement.text}}>
                            <div className=' text-white rounded-3xl relative'>
                            <div className=' absolute w-full h-full  top-0 left-0 lines z-[97]' style={{backgroundImage: `url(${lines})`, backgroundSize:'cover', opacity: '50%'}}></div>
                                    <div className=' relative top-[50%] translate-y-[-50%] z-[98] py-7'>
                                        <h1 className=' text-7xl sm:text-8xl xl:text-9xl font-mont font-[600] m-6 content'>{descElement.name}</h1>
                                            <p className=' text-xl w-4/5 text-justify mx-auto content'>{descElement.desc}</p>

                                            <Link to='offerWrapper' smooth={true} spy={true}>
                                                <div className='w-fit group mx-auto my-6'>
                                                    <div className=' mx-auto w-1/2 group-hover:w-4/5 bg-[silver] h-[2px] transition-all duration-150'></div>
                                                        <button className='bg-black/20 text-white px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150'>COME BACK</button>
                                                    <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#ffffff] transition-all duration-150'></div>
                                                </div>
                                            </Link>
                                    </div>
                            </div>

                           <div className='overflow-y-hidden'>
                                <div className='  mx-3 mt-3 lg:ms-0 lg:me-3 lg:my-3 image'>
                                    <img src={descElement.img} alt={descElement.name} className=' aspect-video lg:aspect-square object-cover rounded-3xl'/>
                                </div>
                           </div>
                        </div>
                   )}

                    {windowWidth < 1024 && i%2!=0&&(
                        <div className=' contentWrapper grid lg:grid-cols-2'  style={{background: descElement.background, color: descElement.text}}>

                            <div className='overflow-y-hidden'>
                                <div className='  mx-3 mt-3 lg:me-0 lg:ms-3 lg:my-3 image'>
                                    <img src={descElement.img} alt={descElement.name} className=' aspect-video lg:aspect-square object-cover rounded-3xl'/>
                                </div>
                           </div>

                            <div className=' text-white rounded-3xl relative'>
                            <div className=' absolute w-full h-full z-[97] top-0 left-0 lines' style={{backgroundImage: `url(${lines})`, backgroundSize:'cover', opacity: '10%'}}></div>
                                    <div className=' relative top-[50%] translate-y-[-50%] z-[98] py-7'>
                                        <h1 className=' text-7xl sm:text-8xl xl:text-9xl font-mont font-[600] m-6 content'>{descElement.name}</h1>
                                            <p className=' text-xl w-4/5 text-justify mx-auto content'>{descElement.desc}</p>

                                            <Link to='offerWrapper' smooth={true} spy={true}>
                                                <div className='w-fit group mx-auto my-6'>
                                                    <div className=' mx-auto w-1/2 group-hover:w-4/5 bg-[silver] h-[2px] transition-all duration-150'></div>
                                                        <button className='bg-black/20 text-white px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150'>COME BACK</button>
                                                    <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#ffffff] transition-all duration-150'></div>
                                                </div>
                                            </Link>
                                    </div>
                            </div>
                        </div>
                   )}
                </div>
            )
        })}
    </div>
  )
}

export default OfferDesc