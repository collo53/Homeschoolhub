import { FaHome ,FaSchool} from "react-icons/fa";
function Cards(){
    return(
<div className="flex flex-col md:flex-row  justify-around md:justify-content-center w-full items-center md:w-screen  gap-5 mt-5">

            <div className="flex flex-col justify-content-center items-center p-5 bg-[#ffc01d] text-white w-100  border border-transparent rounded-lg shadow-lg  text-center sm:w-100 ">
                <FaSchool className="text2xl  "/>
                <h2>Learn</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti delectus quos laboriosam voluptatum? Necessitatibus quam quasi assumenda explicabo repellendus dicta recusandae dolore! Possimus voluptas dignissimos fugiat voluptate ipsam commodi.</p>
            </div>
            <div className="flex flex-col justify-content-center items-center p-5 bg-[#06070a] text-white w-100 border border-transparent rounded-lg shadow-lg  text-center ">
                <FaSchool className="text2xl"/>
                <h2>Learn</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti delectus quos laboriosam voluptatum? Necessitatibus quam quasi assumenda explicabo repellendus dicta recusandae dolore! Possimus voluptas dignissimos fugiat voluptate ipsam commodi.</p>
            </div>
            <div className="flex flex-col justify-content-center items-center p-5 bg-[#7231ff] text-white w-100 border border-transparent rounded-lg shadow-lg text-center ">
                <FaSchool className="text2xl"/>
                <h2>Learn</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti delectus quos laboriosam voluptatum? Necessitatibus quam quasi assumenda explicabo repellendus dicta recusandae dolore! Possimus voluptas dignissimos fugiat voluptate ipsam commodi.</p>
            </div>

        </div>
    );
}
export default Cards;