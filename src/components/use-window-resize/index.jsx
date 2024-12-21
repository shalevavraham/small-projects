import React, { useLayoutEffect, useState } from "react";

const UseWindowResize = () => {
  const [windowSize, setWindowSize] = useState({ 
    width: 0, 
    height: 0 
});

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useLayoutEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return() =>{
            document.removeEventListener('resize', handleResize)
        }
    },[])
    return windowSize;

};

export default UseWindowResize;