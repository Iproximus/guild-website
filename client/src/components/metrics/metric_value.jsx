import data from './metricsMockJson.json';
const MetricValue = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i].metricContents[i];
    }
    return(
            <div className='metrics-value'>
                {obj.metricValue}
                </div>
        
    )
}
export default MetricValue;