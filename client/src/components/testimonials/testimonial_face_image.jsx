var data = require('./testimonialMockJson.json');
const TestimonialFaceImage = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <img src={obj.image} alt="FaceImage" className='testimonial-face-image'/>
    )
}
export default TestimonialFaceImage