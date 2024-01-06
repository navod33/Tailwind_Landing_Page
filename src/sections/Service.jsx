import React from 'react'


function Service({imgUrl}) {
  return (
    <section className='w-full flex flex-col xl:flex-row max-container h-[500px]'>

            <div className='flex justify-center items-center flex-1 z-10 ml-auto'>
                <img src={imgUrl}
                alt=""
                width={500}
                height={502}
                className='object-contain relative z-10'
                />
            </div>
     
            <div className='flex flex-1 justify-center items-start flex-col max-container gap-10 w-full'>
                <h1 className='text-[2.3rem] font-montserrat text-dark-blue font-bold'>Light, Fast & Powerful</h1>
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor. Aenean massa. Cum <br/>sociis natoque penatibus et magnis dis parturient montes, <br/>nascetur ridiculus
                <br></br><br></br>
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium<br/> quis, sem. Nulla consequat massa quis enim.
                </p>

            </div>
      
      
    </section>

    
  )
}

export default Service