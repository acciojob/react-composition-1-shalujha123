import React from "react"

const Tab = ({items,setActiveTab}) => {
    return(
        <div>
            <ul>
                {items.map((item,index) => (
                    <li key={index} onClick={() => setActiveTab(index)}>{item.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Tab