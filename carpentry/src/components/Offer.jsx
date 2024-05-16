import React from 'react'
import { MdWork } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { TbBackground } from 'react-icons/tb';
import { FaArrowRight } from "react-icons/fa6";

const Offer = () => {

    const offer=[
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
        {
            icon: <RiPaintFill />,
            subtitle: 'painting'
        },
    ]

    const pricing = [
        {
            background : '#f0e2db',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#000'
        },
        {
            background : '#222',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd'
        },
        {
            background : '#0c0d07',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#ddd'
        },
        {
            background : '#efc9b8',
            name: 'OPTION1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: '500 $',
            text: '#000'
        },
    ]

  return (
    <div className=' min-h-fit grid lg:grid-cols-2 w-full bg-zinc-950 overflow-hidden'>

        <div className=' space-y-4 py-10'>
            <div className=' flex ml-10'>
                <MdWork className='text-5xl mr-2 text-[#cccccc] mt-1'/>
                <h1 className='text-5xl font-mont font-[200] text-[#cccccc]'> WHAT WE <span className=' font-[600] text-[#3c4123]'>OFFER</span> ?</h1>
            </div>
                <p className=' text-white text-xl font-mont w-4/5 mx-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod unde id praesentium quas sed similique, numquam saepe, voluptas quo asperiores fuga facere officia deserunt iure ad et molestias illum.</p>
                <div className=' mt-5 grid grid-cols-2 sm:grid-cols-3 mx-auto justify-center gap-3 w-4/5'>
                    {offer.map((offerElement, i)=>{
                        return(
                            <div key={i} className=' w-full aspect-square bg-[#111] rounded-[30px] mx-auto text-[#fff]'>
                                <div className=' relative top-[50%] translate-y-[-60%]'>
                                    <p className=' text-5xl w-fit mx-auto my-2'>{offerElement.icon}</p>
                                    <p className=' text-2xl text-center'>{offerElement.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>

        <div className=' grid sm:grid-cols-2 gap-1 bg-white px-1 py-1 lg:py-0'>
            {pricing.map((element, i)=>{
                return(
                   <div className='w-full  overflow-hidden aspect-video sm:aspect-auto rounded-2xl group' style={{backgroundColor: element.background, color: element.text}}>
                        <div className=' space-y-5 hover:scale-110 w-full h-full p-10 transition-all duration-150'>
                            <h1 className=' text-4xl font-mont font-[600]'>{element.name}</h1>
                            <p className=' font-mont  text-lg font-[400]'>{element.desc}</p>
                            <p className=' font-mont font-[600] text-3xl'>{element.price}/</p>
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