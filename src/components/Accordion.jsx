import React, {useState} from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Accordion =({title, text})=>{
const[clicked, setClicked] = useState(false)
const clickHandler =()=>{
    
    setClicked(!clicked)
}    
return(
    <div className="accordion">
        <div className="accordion-item">
            <div className="accordion-item-heading" onClick={()=>clickHandler()}>
                <span>{title}</span>
                <span>{clicked ? <FaChevronUp/> : <FaChevronDown/>}</span>
                </div>

            <div className={`accordion-item-body ${clicked ? 'active': ''}`}>
                <div className="accordion-item-body-content">
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    </div>
)
}
export default Accordion;