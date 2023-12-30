import { useEffect, useState } from "react"
import downArrow from "../assets/images/down-arrow.png"
import upArrow from "../assets/images/up-arrow.png"
import "./AddingQuestions.css"
import Mcqs from "./Mcqs/Mcqs"
import DropDown from "../DropDown/DropDown"
import { useDispatch } from "react-redux"
import { addAllQuestions, getQuestion } from "../redux/reduxSlice"
const AddingQuestions = ({ quizSettings, setQuizSettings }) => {
    
    // List for Selecting Type of QUestion
    const questions = ["Multiple Choice Answers", "True/False", "Fill in the Blanks", "Matching", "Essay Questions"]

    // For If condition to convert Quetsion Type from UI in a valid Variable Name
    const name = quizSettings.questionType
    const questionTypeWithSpaces = name.replace(/_/g, ' ');
    
    //An Object holding Only one MCQ at a time
    const [mcqQuestionObj, setMcqQuestionObj] = useState({statement: "",
                                                          options: [{ corrRNot: "Incorrect", option: "" }],})

    //An Object That have all Questions of MCQs
    const [allQuestions, setAllQuestions] = useState([]);

    //To add All QUestions in a local storage
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addAllQuestions(allQuestions))
    }, [allQuestions]);
    
    //Handles for Difficulty Level 
    const handleEasyClick = () => {
        setQuizSettings((pre) => ({ ...pre, difficultyLevel: "Easy" }))
    }
    const handleMediumClick = () => {
        setQuizSettings((pre) => ({ ...pre, difficultyLevel: "Medium" }))
    }
    const handleHardClick = () => {
        setQuizSettings((pre) => ({ ...pre, difficultyLevel: "Hard" }))
    }

    //Handle to add new QUestion so that previous added to local storage and Object is empty to hold new MCQ
    const handleAddNewQ = () => {
        if (questions[0] === questionTypeWithSpaces) {
            setAllQuestions((pre) => ([...pre, mcqQuestionObj]))
            setQuizSettings((pre) => ({ ...pre, questionType: "Multiple_Choice_Answers" }))
            setMcqQuestionObj({
                statement: "",
                options: [{ corrRNot: "Incorrect", option: "" }],
            })
        }
    }
    return (
        <div>
            <DropDown options={questions} stateName="questionType" setQuizSettings={setQuizSettings} quizSettings={quizSettings} />

            <div>
                <div className="set-div">
                    <label className="label">Set Time</label>
                    <div className="set-point-div">
                        <label className="add-label" >Min</label>
                        <input className="add-textbx" type="text" value={quizSettings.quizTime}></input>
                    </div>
                    <label className="label">Set Point</label>
                    <input className="add-textbx" type="text" onChange={(e) => {
                        if (e.target.value >= 1) {
                            setQuizSettings((pre) => ({ ...pre, quizScore: e.target.value }))
                        }
                    }}>
                    </input>
                </div>
                <div className="difficulty-div">
                    <label className="label">Difficulty</label>
                    <div class="btns-div">
                        <button className="difficulty-btn1" onClick={handleEasyClick}>Easy</button>
                        <button className="difficulty-btn2" onClick={handleMediumClick} >Medium</button>
                        <button className="difficulty-btn3" onClick={handleHardClick}>Hard</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    (questionTypeWithSpaces === questions[0]) ? <Mcqs mcqQuestionObj={mcqQuestionObj} setMcqQuestionObj={setMcqQuestionObj} quizSettings={quizSettings} setQuizSettings={setQuizSettings} /> :
                        (quizSettings.questionType === questions[1]) ? <div> {questions[1]} </div> :
                            (quizSettings.questionType === questions[2]) ? <div> {questions[2]} </div> :
                                (quizSettings.questionType === questions[3]) ? <div> {questions[3]} </div> : null
                }
            </div>
            <button onClick={handleAddNewQ} className="add-Q-btn">Add New Question</button>
        </div >
    )
}
export default AddingQuestions;