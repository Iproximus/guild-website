var data = require('./mockJson.json');
const CardContent = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <div className='card-content-style'>
            
            <h1 className='card-content-heading'>{obj.cardContent[0].listHeading}</h1>
            <ul className='card-content-list'>
                <li className='card-content-list-text'>{obj.cardContent[0].listContents[0]}</li>
                
            </ul>
            <h1 className='card-content-heading'>{obj.cardContent[0].listHeading}</h1>
            <ul className='card-content-list'>
                <li className='card-content-list-text'>{obj.cardContent[0].listContents[0]}</li>
                
            </ul>
            <h1 className='card-content-heading'>{obj.cardContent[0].listHeading}</h1>
            <ul className='card-content-list'>
                <li className='card-content-list-text'>{obj.cardContent[0].listContents[0]}</li>
                
            </ul>
            </div>
    )
}
export default CardContent