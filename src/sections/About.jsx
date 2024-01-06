import React from 'react'



function About() {
  return (
    <section className='w-full flex flex-col xl:flex-row max-container gap-10 h-[600px] '>
            <div className='flex flex-col flex-1 justify-center item-start gap-4'>
                <h2 className='text-[2.3rem] font-montserrat text-light-blue font-bold'> Light, Fast & Powerful</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                    ridiculus <br/><br/>
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className='flex justify-start item-start py-9'>
                    <div className='flex flex-1 flex-col justify-center gap-3'>
                    <img src="src\assets\icons\COMBIN~1.PNG" 
                        alt=""
                        width={40}
                        height={40}
                        className='object-contain relative z-10'
                    />
                    <h5 className='font-bold'>Title Goes Here</h5>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>

                    <div className='flex flex-1 flex-col justify-center gap-3'>
                    <img src="src\assets\icons\COMBIN~1.PNG" 
                        alt=""
                        width={40}
                        height={40}
                        className='object-contain relative z-10'
                    />
                    <h5 className='font-bold'>Title Goes Here</h5>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>

                </div>
            </div>
            <div className='flex flex-1'>
            <img src="src\assets\images\aboutUs.JPG" 
                alt=""
                width={500}
                height={502}
                className='object-contain relative z-10 top-[-5%] left-10'
            />
            </div>

    </section>
  )
}

export default About
