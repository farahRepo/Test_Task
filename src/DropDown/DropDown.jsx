import downArrow from "../assets/images/down-arrow.png"
import upArrow from "../assets/images/up-arrow.png"
import { useState } from "react";
import "../DropDown/DropDown.css"

const DropDown = ({ options,setQuizSettings,quizSettings,stateName }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleItemClick = (e) => {
         const stateValueWithoutSpaces = e.replace(/\s/g, '_');
        setQuizSettings((pre) => ({ ...pre, [stateName]: stateValueWithoutSpaces}))
        // setQuizSettings((pre) => ({ ...pre, [stateName]: e }))
        setDropdownOpen(false);
    };
    const stateValueWithSpaces = quizSettings[stateName].replace(/_/g, ' ');
    return (
        <>
            <div className="main-divDD">
                <div>   <label className="dropdown-labelDD"></label> {stateValueWithSpaces} </div>
                <div>   <button className="dropdown-btnDD" onClick={toggleDropdown} >
                                {(isDropdownOpen) ? <img src={upArrow}></img> :
                                                    <img src={downArrow}></img>
                                }
                        </button>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="dropdown-options-divDD ">
                    {options.map((option) => (<div key={option} onClick={() => handleItemClick(option)}> {option} </div>))}
                </div>)
            }
        </>
    )
}
export default DropDown;