import React, { useRef, useEffect} from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import gsap from 'gsap';

const Frame = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: plum;
    margin: 50px;
    border-radius: 20px;
`;

const Gsapp = styled.div`
    width: 200px;
    height: 200px;
    background-color: plum;
    margin: 50px;
    border-radius: 20px;
`;

export const Example = () => {
    const boxRef = useRef(null);
    
    useEffect(() => {
        gsap.fromTo(boxRef.current, { x: "-=100px",}, {x: "+=100px", rotate: "+=100", duration: 2})
    })

  return (
      <>
        <Frame whileHover={{scele: 2.2}} whileTap={{scale: 0.9}}/>
        <Gsapp ref={boxRef}/>
      </>
    
  )
}
