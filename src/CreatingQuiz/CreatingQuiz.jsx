import { useState } from "react";
import closeButton from "../assets/images/closeButton.png"
import "./CreatingQuiz.css"
import TabComponent from "./TabComponent";
import QuizSettings from "../QuizSettings/QuizSettings.jsx"
import AddingQuestions from "../AddingQuestions/AddingQuestions.jsx";

const  CreatingQuiz=({quizSettings,setQuizSettings})=> {
    const tabsDetails = ["Quiz Settings", "Adding Questions", "Pricing", "Publishing"];
    const [tab, setTab] = useState(0);

    return (
        <div>
            <div className="main-page">
                <div className="title-bar">
                    <div className='close-image-container'>
                        <img className="close-image" src={closeButton} alt="Close Button"></img>
                    </div>
                    <div className="title-bar-heading">
                        <h3>{quizSettings.title}</h3>
                    </div>
                </div>
            </div>

            <div className="tabs-div">
                {
                    tabsDetails.map((tabname, index) => {
                        return <TabComponent key={index} index={index} setTab={setTab} tabName={tabname} />
                    })
                }      
            </div>
            {
                    quizSettings.tab == 0 ? (<QuizSettings setQuizSettings={setQuizSettings} quizSettings={quizSettings} />) :
                    quizSettings.tab == 1 ? (<AddingQuestions quizSettings={quizSettings} setQuizSettings={setQuizSettings}/> ) :
                    quizSettings.tab == 2 ? (<div>Pricing Component</div>) :
                    quizSettings.tab == 3 ? (<div>Publishing Component</div>) :
                                            <div>QUIZ SETTINGS Component </div>
            }
        </div>
    )
}
export default CreatingQuiz;
