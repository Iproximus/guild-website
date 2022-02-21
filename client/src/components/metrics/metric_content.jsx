import { GrInstagram } from "react-icons/gr";
import MetricSubtitle from './metric_subtitle';
import MetricValue from './metric_value';
import './metrics_styles.css'
const MetricContent = () => {
    return(
        <div className="metrics-container">
            <div className="icon-style"><GrInstagram size={28}/></div>
            <div><MetricValue/></div>
            <div><MetricSubtitle/></div>
        </div>
    )
}
export default MetricContent;