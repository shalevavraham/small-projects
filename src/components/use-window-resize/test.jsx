import React from "react";
import UseWindowResize from "./index"

const UseWindowResizeTest = () => {
    const windowSize = UseWindowResize()
    const {width, height} = windowSize;
    return(
        <div>
            <h1>Use window size Hook</h1>
            <p>Width is: {width}</p>
            <p>Height is: {height}</p>

        </div>
    )
}

export default UseWindowResizeTest