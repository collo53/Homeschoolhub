import React from 'react';
import Sidebar from '../components/sidebar'; 
import Cards from '../components/cards'; 
import '../home.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-w-screen " >
      <Sidebar/>
      <div className="flexitems-center justify-center h-screen mt-4">
      
        <div className='m-7 w-full max-w-screen '>
        <Cards/>
        </div>
        <div className='text-blue-600 text-center mt-20 w-full max-2xl mx-auto'>
          <h2 className='font-bold text-[#ffc01d]'>What we Offer</h2>
          <p className='text-sm leading-7 w-100 mx-auto text-black'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-8 gap-12 w-full bg-neutral-200 px-6 py-10 md:px-20 md:py-20 leading-9">
  {/* Text Section */}
  <div className="flex flex-col w-full md:w-1/2">
    <h1 className="text-[#ffc01d] text-3xl font-bold mb-4">About Us</h1>
    <p className="text-black text-base mb-4">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean.
    </p>
    <ul className="text-black space-y-2">
      <li><span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
      <li><span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
      <li><span className="text-[#ffc01d] mr-2">✓</span>Separated they live</li>
    </ul>

    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <button className="bg-[#ffc01d] text-white px-6 py-2 rounded-md hover:bg-black transition-all">
        Admission
      </button>
      <button className="text-[#ffc01d] border border-[#ffc01d] px-6 py-2 rounded-md hover:bg-[#ffc01d] hover:text-white transition-all">
        Learn More
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img
      src="https://images.unsplash.com/photo-1727553957823-a54c8ff6a3ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="About Us"
      className="w-full h-auto object-cover rounded-lg shadow-md"
    />
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
