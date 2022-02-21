import bgVideo from './video/bgVideo.mp4'
import './video_container_styles.css'
const VideoContainer = () => {
    return ( 
        <div className="video-container">
  
          <video autoPlay loop muted>
            <source src={bgVideo} type="video/mp4" />
          </video>
          
       {/* <div className='text-wrapper'>
         <h1>Background Video in React</h1>
         <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
       </div> */}
     </div>
   ); 
}
export default VideoContainer;