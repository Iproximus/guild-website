import data from './metricsMockJson.json';
const MetricSubtitle = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i].metricContents[i];
    }
    return(
        <div className='metrics-subtitle'>
                {obj.metricSubtitle}
                </div>
        
    )
}
export default MetricSubtitle;