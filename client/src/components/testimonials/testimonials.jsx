import Testimonial from './testimonial';
import Marquee from "react-fast-marquee";
import './testimonial_styles.css';
var data = require('./testimonialMockJson.json');


const Testimonials = () => {

    return (
        <div>
            <div><h1 className='heading' id='testimonials'>Testimonials</h1></div>
            <Marquee pauseOnHover={true} speed={50}>
                <div className='testimonials-style'>


                    {
                        data.map((user) => <Testimonial />)
                    }
                </div>
            </Marquee>
        </div>


    );
}
export default Testimonials;