import Navbar from '../components/navbar';
import '../home.css';
import Hero from '../components/hero';
import Aboutabout from '../components/aboutabout';
import Team from '../components/team';
import Footer from '../components/Footer';
function About(){
    return(
         <div className="w-screen min-h-screen">

            <div>
                <Navbar/>
            </div>
            <div>
                <Hero/>
            </div>
            <div>
                <Aboutabout/>
            </div>
            <div>
              <Team/>
            </div>
            <div>
                <Footer/>
            </div>
         </div>
    );
}
export default About;