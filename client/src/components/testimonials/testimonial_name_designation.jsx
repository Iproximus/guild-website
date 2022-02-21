var data = require('./testimonialMockJson.json');

const TestimonialNameDesignation=()=>{
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <div class="pb-5">
            <p className='testimonial-name-designation'>{obj.testimonialName}, {obj.testimonialDesignation}</p>
        </div>
    )
}
export default TestimonialNameDesignation