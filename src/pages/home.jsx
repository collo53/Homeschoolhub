import React from 'react';
import Sidebar from '../components/sidebar'; 
import Cards from '../components/cards'; 
import '../home.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className=" " >
      <Sidebar/>
      <div className="flexitems-center justify-center h-screen mt-4">
      <div className='flex flex-col items-center justify-center'>
          <p className="text-blue-900 border border-black-200 rounded-lg w-100 p-4 ">
            Announcing our next round of funding 
            <a href="#" className="text-purple-300 pl-1">Read more</a>
          </p>
        </div>
        <div className='flex justify-center align-items-center mt-4 w-full'>
        <Cards/>
        </div>
        <div className='text-blue-600 text-center mt-20 w-full max-2xl mx-auto'>
          <h2 className='font-bold text-[#ffc01d]'>What we Offer</h2>
          <p className='text-sm leading-7 w-100 mx-auto text-black'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='flex justify-center  mt-8 gap-12 w-full bg-neutral-200 p-20 leading-9'>

            <div className='flex flex-col   '>
              <h1 className='text-[#ffc01d]'>
                About Us
              </h1>
              <p className='w-100 text-black' >
              Far far away, behind the  word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <ul className='text-black leading-9 '>
                <li><span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
                <li> <span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
                <li><span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
              </ul>
              <div className='flex gap-8 mt-5'>
            <button className='bg-[#ffc01d] hover:bg-black'> Admission</button>
            <button className=' text-[#ffc01d] hover:bg-[#ffc01d] hover:text-white '>Learn More</button>
          </div>
            </div>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1727553957823-a54c8ff6a3ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-150 h-100 object-center object-fit-cover'/>
          </div>
          
        </div>
        <div>
       <Footer/>
       </div>
      </div>
      
    </div>
  );
}

export default Home;
