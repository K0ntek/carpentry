import React, {useEffect} from 'react'
import { MdWork } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { TbBackground } from 'react-icons/tb';
import { FaArrowRight } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import lines from '../assets/lines.png'
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Offer = () => {

    const offer=[
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
        {
            icon: <VscWorkspaceTrusted />,
            subtitle: 'high quality materials'
        },
        {
            icon: <MdOutlineAccessTime  />,
            subtitle: 'execution speed'
        },
        {
            icon: <VscWorkspaceTrusted />,
            subtitle: 'precision'
        },
        {
            icon: <MdPeopleAlt />,
            subtitle: 'qualified staff'
        },
    ]

    const pricing = [
        {
            background : '#171810',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd',
            BgCircle: '#000'
        },
        {
            background : 'rgb(9,9,11)',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd',
            BgCircle: '#222'
        },
        {
            background : '#111',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd',
            BgCircle: '#000'
        },
        {
            background : 'rgb(2,2,6)',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd',
            BgCircle: '#ddd'
        },
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.offer', { y: 300, opacity:0}, { y: 0, opacity:1, duration:.5, stagger: 0.1, scrollTrigger: {
            trigger: '.offerWrapper',
            start: 'top 60%',}});
    },[])

  return (
    <div className=' min-h-fit grid lg:grid-cols-2 w-full overflow-hidden offerWrapper'>

        <div className=' offer space-y-4 py-10 bg-zinc-950 rounded-3xl m-4 lg:me-1'>
            <div className=' flex ml-10'>
                <MdWork className='text-4xl sm:text-5xl mr-2 text-[#cccccc] mt-1'/>
                <h1 className='text-4xl sm:text-5xl font-mont font-[200] text-[#cccccc]'> WHAT WE <span className=' font-[600] text-[#3c4123]'>OFFER</span> ?</h1>
            </div>
                <p className=' text-white text-xl font-mont w-4/5 mx-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod unde id praesentium quas sed similique, numquam saepe, voluptas quo asperiores fuga facere officia deserunt iure ad et molestias illum.</p>
                <div className=' mt-5 grid grid-cols-2 sm:grid-cols-3 mx-auto justify-center gap-3 w-4/5'>
                    {offer.map((offerElement, i)=>{
                        return(
                            <div key={i} className=' w-full aspect-square bg-[#111] rounded-[30px] mx-auto text-[#fff]'>
                                <div className=' relative top-[50%] translate-y-[-60%]'>
                                    <p className=' text-5xl w-fit mx-auto my-2'>{offerElement.icon}</p>
                                    <p className=' text-2xl text-center px-2'>{offerElement.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>

        <div className=' grid sm:grid-cols-2 gap-2 bg-white py-1 lg:py-0 m-4 lg:ms-1'>
            {pricing.map((element, i)=>{
                return(
                   <div className=' offer relative w-full py-5 sm:py-0 overflow-hidden aspect-auto rounded-3xl group' style={{background: element.background, color: element.text}}>
                    <div className=' absolute w-full h-full z-[97] top-0 left-0 group-hover:scale-110 transition-all duration-150' style={{backgroundImage: `url(${lines})`, backgroundSize:'cover', opacity: '30%'}}></div>
                        <div className=' space-y-5 group-hover:scale-110 w-full h-full p-10 transition-all duration-150 relative'>
                            <h1 className=' text-4xl font-mont font-[600]'>{element.name}</h1>
                            <p className=' font-mont  text-lg font-[400]'>{element.desc}</p>
                            {/* <p className=' font-mont font-[600] text-3xl'>{element.price}/</p> */}
                            <div className='w-fit'>
                                <div className=' flex'><p className=' group-hover:tracking-[2px] transition-all duration-150'>READ MORE</p><FaArrowRight className='mt-1 ml-1 group-hover:ml-3 transition-all duration-150' /></div>
                                {/* <div className=' h-[1px] w-0  group-hover:w-1/2 mx-auto bg-white transition-all duration-150'></div> */}
                            </div>
                        </div>
                   </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Offer
