import { useState } from "react";
import "./FeedBackSettings.css"
import CheckBox from "../../CheckBox";
import RadioBtn from "../../RadioBtn";
const FeedBackSettings = ({ quizSettings, setQuizSettings }) => {
    const handleCheckBoxButton = (checked, label) => {
        console.log(checked, label)
        setQuizSettings((pre) => {
            const preProps = { ...pre };
            preProps[label] = checked
            if (checked === false) {
                preProps['Only_once_after_each_attempt'] = false
                preProps['Lets_Student_see_their_current_answers'] = false
                preProps['showCorrectAnsDate'] = null
                preProps['hideCorrectAnsDate'] = null
            }
            return preProps
        });
    }
    const radioBtnProp = ["Only_once_after_each_attempt", "Lets_Student_see_their_current_answers"]
    const handleRadioButton = (selectedText) => {
        radioBtnProp.map((nn) => {
            const stateNameWithoutSpaces = nn.replace(/\s/g, '_');

            setQuizSettings((pre) => {
                const preProps = { ...pre };
                if (stateNameWithoutSpaces === selectedText) {
                    preProps[selectedText] = true;
                }
                else {
                    preProps[stateNameWithoutSpaces] = false
                }
                console.log(stateNameWithoutSpaces, selectedText, "preProps", preProps)
                return preProps
            });
        });
    };


    return (
        <div>
            <div className="feedback-settings-div1">
            <CheckBox handleCheckBoxButton={handleCheckBoxButton} chckBxLabel="Lets Student see their responses" quizSettings={quizSettings} setQuizSettings={setQuizSettings} />  
            </div>
            {
                (quizSettings?.Lets_Student_see_their_responses) ? (
                    <div className="feedback-settings-div2">
                             <RadioBtn handleRadioButton={handleRadioButton} radioBtnLabel="Only once after each attempt" quizSettings={quizSettings}/>
                            <RadioBtn handleRadioButton={handleRadioButton} radioBtnLabel="Lets Student see their current answers" quizSettings={quizSettings} /> 
                        <div className="correct-ans-div">
                            Show correct Ans at
                            <div className="ans-placeHolder">
                                <input className="ans-textbox" 
                                       type="date"
                                       value= {quizSettings.showCorrectAnsDate}
                                       onChange={(e) => {
                                        setQuizSettings((pre) => ({ ...pre, showCorrectAnsDate: e.target.value }))
                                    }}>
                                    </input>
                            </div>
                        </div>
                        <div className="correct-ans-div">
                            Hide correct Ans at
                            <div className="ans-placeHolder">
                                <input className="ans-textbox" 
                                       type="date"
                                       value= {quizSettings.hideCorrectAnsDate}
                                       onChange={(e) => {
                                        setQuizSettings((pre) => ({ ...pre, hideCorrectAnsDate: e.target.value }))
                                    }}></input>
                            </div>
                        </div>
                    </div>): (  null)
            }
        </div>
    )
}
export default FeedBackSettings;