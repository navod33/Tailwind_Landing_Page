import React from 'react'
// import { heroMain } from "../assets/images";


function Hero() {
  return (
    <section className='w-full flex flex-col xl:flex-row max-container h-[800px]  gap-10'>
     
            <div className='flex flex-1 justify-center items-start flex-col max-container gap-10 w-full ml-10'>
                <h1 className='text-[2.3rem] font-montserrat text-dark-blue font-bold'>Introduce Your Product <br/>Quickly & Effectively</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br></br><br></br>
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className='flex justify-center items-start gap-6 mt-5'>
                    <button className='bg-dark-blue hover:bg-light-blue text-white  py-1 px-12 font-montserrat'>Purchase UI Kit</button>
                    <button className='border border-dark-blue hover:bg-light-blue hover:text-white text-dark-blue py-1 px-14 font-montserrat'>
                    Learn More
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-1'>
                <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" 
                alt=""
                width={610}
                height={502}
                className='object-contain relative z-10'
                />
            </div>
      
    </section>
  )
}

export default Hero