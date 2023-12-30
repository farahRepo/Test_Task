import "../QuizSettings/QuizSettings.css"
import QuizSettingsComponent from "./QuizSettingsCmponent";
import {  useDispatch } from "react-redux";
import { createQuiz} from "../redux/reduxSlice.js";
import { useNavigate } from "react-router-dom";
const QuizSettings = ({ quizSettings, setQuizSettings }) => {
    const QuizComponentsName = ["General Info", "Shuffle Settings", "Feedback Settings", "Attempt Settings", "Time Settings"];
  
    const navigate=useNavigate();
    const dispatch = useDispatch();


    const handleClickSaveAndCont = () => {
        dispatch(createQuiz(quizSettings));
        setQuizSettings((pre) => ({ ...pre, tab: 1 }))        
        //  navigate('/addQuestions');
    };

    const handleReset = () => {
        localStorage.clear();
    }
    return (
        <div className="drop-down-div">
            {
                QuizComponentsName.map((componentName, index) => {
                    return <QuizSettingsComponent key={index} componentName={componentName} quizSettings={quizSettings} setQuizSettings={setQuizSettings} index={index} />
                })
            }
            <div className="footer-btn-div">
                <button className="footer-btn" onClick={handleReset} >Reset All</button>
                <button onClick={handleClickSaveAndCont} className="footer-btn" >Save & Continue</button>
            </div>

        </div>


    )
}
export default QuizSettings;