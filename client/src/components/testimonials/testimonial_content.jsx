var data = require('./testimonialMockJson.json');

const TestimonialContent = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return (  
        <div>
            {obj.testimonialContent}
        </div>
    )

}

export default TestimonialContent;