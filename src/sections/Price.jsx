import React from 'react'


function Price() {
  return (
    <section className='w-full flex flex-col xl:flex-row max-container h-[500px]'>
            <div className='flex flex-1 justify-center items-center flex-col max-container gap-10 w-full'>
                <h1 className='text-[2.3rem] font-montserrat text-dark-blue font-bold'>A Price To Suit Everyone</h1>
                <p className='text-base text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> Aenean commodo ligula eget dolor. Aenean massa. Cum <br/>sociis natoque penatibus et magnis dis parturient montes, <br/>nascetur ridiculus
                </p>
                <div>
                   <h2 className='text-dark-blue text-[3rem] font-bold'>$40</h2>
                    <p>UI Design Kit</p>
                </div> 
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p>See, One price. Simple.</p>
                    <button className='bg-dark-blue hover:bg-light-blue text-white  py-1 px-12 font-montserrat'>Purchase UI Kit</button>
                </div> 

            </div>      
    </section>

    
  )
}

export default Price