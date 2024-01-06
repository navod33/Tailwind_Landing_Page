import React from 'react'


const Footer = () => {
  return (
    <header className='padding-x py-5 after:absolute z-12 max-container bg-slate-400'>
        <nav className='flex justify-center items-center '>
           <ul className='flex flex-1 justify-center gap-20 items-center font-montserrat'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
           </ul>

           <div className='flex flex-1 justify-center items-center'> 
           <button className='bg-dark-blue hover:bg-light-blue text-white  py-1 px-16 font-montserrat' >
            Buy now
           </button>
           </div>
        </nav>
    </header>
    
  )
}

export default Footer;


{/* <a href="" className='flex flex-1 justify-center items-center'>
<h2 className='font-montserrat text-lg text-dark-blue font-bold'>LANDING</h2>
</a> */}