import CardAction from './card_action';
import CardHeader from './card_header';
import CardContent from './card_content';
import './pricing_card_styles.css';

const CardScreen = () => {

  return (
    <div className='card-section'>
      <div className='pricing-container'>
        <div className='card-1'>
          <CardHeader />
          <CardAction />
          <CardContent />
        </div>
      </div>
      <div className='pricing-container'>
        <div className='card-2'>
          <CardHeader />
          <CardAction />
          <CardContent />
        </div>
      </div>
      <div className='pricing-container'>
        <div className='card-3'>
          <CardHeader />
          <CardAction />
          <CardContent />
        </div>
      </div>

    </div>
  )
}
export default CardScreen;