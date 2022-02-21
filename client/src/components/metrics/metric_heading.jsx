import './metrics_styles.css'
var data = require('./metricsMockJson.json');

const MetricHeading = () => {
    var obj;
    for(var i=0;i<data.length;i++)
    {
        obj=data[i];
    }
    return(
        <div className='metrics-heading'>{obj.metricTitle}</div>
    )
}
export default MetricHeading;