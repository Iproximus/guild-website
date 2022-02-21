var data = require('./testimonialMockJson.json');

const TestimonialLogo = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <div className='testimonial-logo-container'>
            <img src={obj.testimonialLogo} alt="Logo" className='testimonial-logo'/>
        </div>
    )
}

export default TestimonialLogo;