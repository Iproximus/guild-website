var data = require('./metricsMockJson.json');
const MetricDescription = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <div className='metrics-description'>
            {obj.metricDescription}
            </div>
    )
}
export default MetricDescription;