import TestimonialContent from './testimonial_content';
import TestimonialFaceImage from './testimonial_face_image';
import TestimonialLogo from './testimonial_logo';
import TestimonialNameDesignation from './testimonial_name_designation';
import './testimonial_styles.css';
const Testimonial = () => {
    return(
      <div className='testimonial-card-style'>
      <div className='testimonial-card-top'>
      </div>
      <TestimonialFaceImage/>
<div className='testimonial-content-container'>
  <TestimonialContent/>
  <TestimonialLogo/>
  <TestimonialNameDesignation/>
</div>
</div>
    )
}

export default Testimonial;