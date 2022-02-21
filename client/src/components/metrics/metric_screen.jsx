import MetricContent from './metric_content';
import MetricHeading from './metric_heading'
import MetricDescription from './metrics_description';
import data from './metricsMockJson.json';
import './metrics_styles.css'
const MetricScreen = () => {
    return ( 
        <div className='metrics-screen'>

            <div>
                <MetricHeading />
            </div>
            <div>
                <MetricDescription />
            </div>

            <div className='metrics-content'>
                {data.map((r) => r.metricContents.map((g) => <MetricContent />))}
            </div>
        </div>

    )
}
export default MetricScreen;
