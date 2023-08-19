import React from "react";
import movies from "./Data";
import '../Style.css';
function Card(props){
    return(<>
        <div className="caraousel-container">
          <div className="caraousel">
           <div className="slider">
            <div className="slide-content">
             <h1 className="movie-title">{props.name}</h1>
             <p className="movie-des">
               {props.des}
             </p>
            </div>
          <img src={props.poster} alt="poster" />
        </div> 
      </div>
    </div>
    </>);
}

const Slide = () => {
    return(<>
         <Card name={movies[0].name} des={movies[0].des} poster = {movies[0].image}/>
         <Card name={movies[1].name} des={movies[1].des} poster = {movies[1].image}/>
         <Card name={movies[2].name} des={movies[2].des} poster = {movies[2].image}/>
         <Card name={movies[3].name} des={movies[3].des} poster = {movies[3].image}/>
         <Card name={movies[4].name} des={movies[4].des} poster = {movies[4].image}/>
    </>);
} 

export default Slide;