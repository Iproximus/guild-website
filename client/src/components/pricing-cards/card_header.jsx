import {GrFacebook} from "react-icons/gr";
var data = require('./mockJson.json');
const CardHeader = () => {
    var obj;
    for(var i=0;i<data.length;i++)
            {
                obj= data[i];   
            }
    return(

        <div className="card-header">
            
            <GrFacebook/>
            <h4 className="card-heading">{obj.heading}</h4>
            <h2 className="card-subHeading">{obj.subHeading}</h2>
            <h1 className="card-action-content">{obj.cardActionContent}</h1>
        </div>
    )

}
export default CardHeader;