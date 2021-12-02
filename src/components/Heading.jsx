import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";

function Heading(){
  const [flip, set] = useState(false);
  const [index, setIndex] = useState(0);

  const words = [" BUILD ", " DEVELOP ", " EXPAND ", "GROW"];

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 500,
    onRest: () => 
    {
      setIndex((prevValue)=>{
        return index === words.length - 1 ? 0 : prevValue + 1;
      })
      set(!flip);
    },
  })

    return <div className="heading-container">
    <h1 className="main-heading">I WILL ASSIST YOU TO</h1>
    <animated.h1 style={props} className="grow-text">{words[index]}</animated.h1> 
    <h1 className="main-heading-two" >YOUR BRAND, PRODUCT.</h1>
    <p className="sub-heading">I am enthusiastic about my work and, I always wear a smile. Let me be a part of your success.</p>
    </div>
}

export default Heading;