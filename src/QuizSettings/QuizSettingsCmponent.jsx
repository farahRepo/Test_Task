import { useState } from "react";
import downArrow from "../assets/images/down-arrow.png"
import upArrow from "../assets/images/up-arrow.png"
import "./QuizSettings.css"
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ShuffleSettings from "./ShuffleSettings/ShuffleSettings";
import FeedBackSettings from "./FeedBackSettings/FeedBackSettings";
import AttempSettings from "./AttemptSettings/AttempSettings";
import TimeSettings from "./TimeSettings/TimeSettings";
function QuizSettingsComponent({ index, componentName, quizSettings,setQuizSettings }) {
    
    const [componentIndex, setComponentName] = useState(null);
    return (

        <div className="drop-down-1">
            <div className="drop-down-2">
                <div className="drop-down-2-1">{componentName}</div>
                <div className=".drop-down-2-2">
                    <button className="drop-down-2-2-btn" onClick={() => { setComponentName((ind) => { if (ind === null) return index; else return null }) }} >
                       {
                        (componentIndex===null) ? 
                        <img src={downArrow} ></img> : <img src={upArrow} ></img> 
                       }
                    </button>
                </div>
            </div>
            {
                componentIndex == 0 ? (<GeneralInfo className="drop-down-1" setQuizSettings={setQuizSettings} quizSettings={quizSettings}/>) :
                    componentIndex == 1 ? (<ShuffleSettings  setQuizSettings={setQuizSettings} quizSettings={quizSettings}/>) :
                        componentIndex == 2 ? (<FeedBackSettings  setQuizSettings={setQuizSettings} quizSettings={quizSettings} />) :
                            componentIndex == 3 ? (<AttempSettings  setQuizSettings={setQuizSettings} quizSettings={quizSettings} />) :
                                componentIndex == 4 ? (<TimeSettings  setQuizSettings={setQuizSettings} quizSettings={quizSettings}/>) : null
            }
        </div>
    )
}
export default QuizSettingsComponent;

