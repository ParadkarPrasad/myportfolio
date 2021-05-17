import React,{useState} from 'react';
import Typewriter from "typewriter-effect";
import "./index.css";


const Home=()=> {
     const [state] = useState({
         title:"Hello",
         titleTwo: "I'm",
         titleThree: "Prasad Paradkar",
         image: "/images/image3.jpg", 

     });
    return (
        <>
           <div className="home">
            <div className="home-intro">
                <h2>
                    <div className="title">{state.title}</div>
                    <div className="titleTwo">{state.titleTwo}</div>
                    <div className="titleThree">{state.titleThree}</div>
                </h2>
                <div className="text">
                    <Typewriter
                    options={{autoStart: true,
                    loop:true,
                    delay:40,
                    strings:[
                        "I'm Front-End Developer.",
                        "I'm Tech Enthusiast.",
                        "Working on being Full Stack Developer."
                    ],
                    }}/>
            </div>
            </div>
            <div className="home_image">
           <img className="image_bg" src={state.image} alt="bgImage"/>
           </div>
           </div>
          
        </>
    );
};

export default Home;
