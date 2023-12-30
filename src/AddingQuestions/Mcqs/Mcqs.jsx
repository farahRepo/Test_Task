import "../Mcqs/Mcqs.css"
import { useState } from "react";
import AddMcqOption from "./AddMcqOption/AddMcqOption.jsx"
import plusImg from "../../assets/images/plus.png"
import plusImgG from "../../assets/images/plusG.png"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuestion, getQuestion } from "../../redux/reduxSlice.js";
const Mcqs = ({mcqQuestionObj, setMcqQuestionObj, quizSettings, setQuizSettings }) => {
    const [selectedBtn, setSelectedBtn] = useState('single');
    const dispatch = useDispatch()
   
    //For Buttons Multi Select or Single Select 
    const handleBtnClick = (variant) => {
        if (variant === 'single') 
        { setQuizSettings((pre) => ({ ...pre, mcqsOptionType: "Single_Select"}))  }
        else { setQuizSettings((pre) => ({ ...pre, mcqsOptionType:"Multi_Select"   })) }
        setSelectedBtn(variant);
    };

    // Add new Option and save old options 
    const handleAddOption = () => {
        setMcqQuestionObj((pre) => {
            let oldData = { ...pre }
            oldData.options = [...oldData.options,{ corrRNot: "Incorrect", option: "" }]
            return oldData
        });
    }

    // Add MCQ Question to a local storage  
    const handleClickSave = () => {
        dispatch(addQuestion(mcqQuestionObj));
        //  navigate('/addQuestions');
    };

    return (
        <div>
            <div className="statement-div">
                <label className="label">Write your statement</label>
                <input className="statement-input" placeholder="Write your statement Here..." value={mcqQuestionObj.statement}
                    onChange={(e) => setMcqQuestionObj((pre) => ({ ...pre, statement: e.target.value }))}></input>
                {/* <textarea className="statement-input" placeholder="Write your statement Here..."></textarea> */}
            </div>
            <div className="btns-div2">
                <button className={`btns-select ${selectedBtn === 'multi' ? 'selected' : ''}`}
                    onClick={() => handleBtnClick('multi')}>
                    <label> Multi Select </label>
                </button>
                <button className={`btns-select ${selectedBtn === 'single' ? 'selected' : ''}`}
                    onClick={() => handleBtnClick('single')}>
                    <label> Single Select</label>
                </button>
            </div>
            
            {mcqQuestionObj?.options?.map((option, index) => (
                <AddMcqOption quizSettings={quizSettings} mcqQuestionObj={mcqQuestionObj} key={index} index={index} option={option} setMcqQuestionObj={setMcqQuestionObj} />
            ))}
            <button onClick={handleAddOption} className="add-btn-div">
                <img src={plusImg}></img> Add Option</button>
            <button className="general-FeedBack-btn">
                <img src={plusImgG}></img> General Feedback </button>
            <div className="last2-btns">
                <button className="lastbtn">Cancel</button>
                <button className="lastbtn" onClick={handleClickSave}>Save</button>
            </div>
        </div>
    )
}
export default Mcqs;