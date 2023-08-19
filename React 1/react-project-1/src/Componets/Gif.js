import React from "react";
import { gif } from "./Data.js";
import '../Style.css';

function Gifs(props){
    // console.log(props.img);
      return(<>
         <div className="video-card">
          <img src={props.img} className="video-card-image" alt="" />
          <video src={props.video} muted loop className="card-video"></video>
       </div>
      </>);
  }
const Gif = () =>{
    return(<>
         <div className="video-card-container"> 
            <Gifs img={gif[0].img} video={gif[0].video}/>
            <Gifs img={gif[1].img} video={gif[1].video}/> 
            <Gifs img={gif[2].img} video={gif[2].video}/>
            <Gifs img={gif[3].img} video={gif[3].video}/>
            <Gifs img={gif[4].img} video={gif[4].video}/>
         </div>
    </>);
} 

export default Gif;