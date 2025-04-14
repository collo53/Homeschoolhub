import React from "react";

import { FaHome } from "react-icons/fa";
function Footer() {
    return(

        <div className="flex justify-evenly items-center bg-black text-white">
            <div className="">
                <h2 className="text-3xl font-bold">Have a Question</h2>

                   <ul>
                    <li>
                        <FaHome className="text-2xl pr-2" />
                        <p>Odeon Cinema ,Kenyatta Avenue,Nairobi</p>
                    </li> 
                    <li>
                        <FaHome className="text-2xl pr-2" />
                        <p>+254743707136</p>
                    </li>
                    <li>
                        <FaHome className="text-2xl pr-2" />
                        <p>collinskamau09@gmail.com</p>
                    </li>
                    
                   </ul>
                

        
            </div>

            <div className="">
                <h2 className="text-3xl font-bold ">Links</h2>
                    <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact</a></li>
                    </ul>
            </div>
    

        </div>

    );
}
export default Footer;