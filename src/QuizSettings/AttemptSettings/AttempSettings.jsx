import { useState } from "react";
import "./AttempSettings.css"
import CheckBox from "../../CheckBox";
const AttempSettings=({quizSettings,setQuizSettings}) => {


    const [count, setCount] =useState(0);

    function handleMinus() {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
        setQuizSettings((pre) => ({...pre,noOfAttemptsValue:count}))
    }
     function handlePlus(){
        setCount((prevCount) => prevCount + 1);
        setQuizSettings((pre) => ({...pre,noOfAttemptsValue:count}))
    }

    const handleCheckBoxButton = (checked, label) => {
        console.log(checked, label)
        setQuizSettings((pre) => {
            const preProps = { ...pre };
            preProps[label] = checked
            if (checked === false) {
                preProps['Number_of_Attempts'] = 0
                preProps['quizScoreType'] = 'Lowest'
           }
            return preProps
        });
    }

    return (
        <div>
            <div className="Attempt-settings-div1">
            <CheckBox handleCheckBoxButton={handleCheckBoxButton} chckBxLabel="Allow Multiple Attempts" setQuizSettings={setQuizSettings} />  
            </div>
            {
                quizSettings.Allow_Multiple_Attempts && (
                    <div className="Attempt-settings-div2">
                        <div className="Attempt-settings-div3">
                            <label className="Attempt-settings-label">Quiz Score to keep</label>
                            <div className="dropdown-div">
                                <select className="dropdown-div-select" 
                                    value={quizSettings.quizScoreType} 
                                    onChange={(e) => {
                                        setQuizSettings((pre) => ({ ...pre, quizScoreType: e.target.value }))
                                    }}>
                                    <option value="Lowest">Lowest</option>
                                    <option value="Average">Average</option>
                                    <option value="Highest">Highest</option>
                                    <option value="Matching">Matching</option>
                                    <option value="Easy Questions">Easy Questions</option>
                                </select>
                            </div>
                        </div>

                        <div className="Attempt-settings-div4">
                                <CheckBox handleCheckBoxButton={handleCheckBoxButton} chckBxLabel="Number of Attempts" setQuizSettings={setQuizSettings} />  
                            {
                                quizSettings.Number_of_Attempts ? (<div className="stepper-div">
                                <button className="stepper-btn" onClick={handleMinus}>-</button>
                                <input className="stepper-input" type="text" value={quizSettings.noOfAttemptsValue} readOnly />
                                <button className="stepper-btn"  onClick={handlePlus}>+</button>
                            </div>) : (                            <div className="stepper-div">
                                <button disabled className="stepper-btn" onClick={handleMinus}>-</button>
                                <input className="stepper-input" type="text" value={quizSettings.noOfAttemptsValue} readOnly />
                                <button disabled className="stepper-btn"  onClick={handlePlus}>+</button>
                            </div>)
                            }

                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default AttempSettings;