import React from 'react'

const OfferDesc = () => {

    const description =[
        {
            img:'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:1,
            background: '#171810',
            text: '#ddd'
        },
        {
            img:'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:2,
            background: 'rgb(9,9,11)',
            text: '#ddd'
        },
        {
            img:'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:3,
            background: '#111',
            text: '#ddd'
        },
        {
            img:'https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'OPTION',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam iste voluptatibus numquam dolorum ea iusto vel, adipisci veritatis quo corrupti quisquam saepe aperiam maiores, accusantium beatae delectus? Culpa quam sapiente ea excepturi. Dicta aliquam alias qui blanditiis possimus, commodi accusantium laudantium dignissimos, harum dolores quia impedit cum voluptate deserunt!',
            id:4,
            background: '#ccc',
            text: '#000'
        },
    ]

  return (
    <div>
        {description.map((descElement, i)=>{
            return(
                <div key={i}>
                   {i%2==0&&(
                        <div className='grid lg:grid-cols-2 gap-2 my-2 px-2'>
                            <div>
                                <img src={descElement.img} alt={descElement.name} className=' aspect-video object-cover rounded-3xl'/>
                            </div>
                            
                            <div className=' text-white rounded-3xl' style={{background: descElement.background, color: descElement.text}}>
                                <h1 className=' text-8xl xl:text-9xl font-mont font-[600] m-6'>{descElement.name}</h1>
                                <p className=' text-xl w-4/5 text-justify mx-auto'>{descElement.desc}</p>

                                    <div className='w-fit group mx-auto my-6'>
                                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#3d3d3d] transition-all duration-150'></div>
                                            <button className='bg-black/20 text-white px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150'>COME BACK</button>
                                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#ffffff] transition-all duration-150'></div>
                                    </div>
                            </div>
                        </div>
                   )}

                    {i%2!=0&&(
                        <div className='grid lg:grid-cols-2 gap-2 my-2 px-2'>
                            <div className=' text-white rounded-3xl'  style={{background: descElement.background, color: descElement.text}}>
                                <h1 className=' text-8xl xl:text-9xl font-mont font-[600] m-6'>{descElement.name}</h1>
                                <p className=' text-xl w-4/5 text-justify mx-auto'>{descElement.desc}</p>

                                    <div className='w-fit group mx-auto my-6'>
                                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#3d3d3d] transition-all duration-150'></div>
                                            <button className='bg-black/20 px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150' style={{color: descElement.text}}>COME BACK</button>
                                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#ffffff] transition-all duration-150'></div>
                                    </div>
                            </div>

                            <div>
                                <img src={descElement.img} alt={descElement.name} className=' aspect-video object-cover rounded-3xl'/>
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