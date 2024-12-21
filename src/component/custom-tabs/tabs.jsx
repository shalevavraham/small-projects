import React, { useState } from "react";
import "./style.css"


const Tabs = ({tabsContent, onChange}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    return(
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map((tabsItem, index) => (
                <div className={`tabs-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={tabsItem.label}>
                    <span className="label">{tabsItem.label}</span>

                </div>))}
            </div>
            <div className="content" style={{color: "red"}}>
                    {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs;