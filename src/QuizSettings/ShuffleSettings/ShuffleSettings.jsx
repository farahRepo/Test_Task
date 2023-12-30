import CheckBox from "../../CheckBox";
import "./ShuffleSettings.css"
const ShuffleSettings = ({ setQuizSettings, quizSettings }) => {

    return (
        <div className="div-checkboxes">
           <CheckBox chckBxLabel="Shuffle Answers"  setQuizSettings={setQuizSettings} />  
           <CheckBox chckBxLabel="Shuffle Questions" setQuizSettings={setQuizSettings} />  
            {/* <label>
                <input type="checkbox"
                    value={quizSettings.shuffleQuestionCheckbox}
                    onChange={(e) => {
                        setQuizSettings((pre) => ({ ...pre, shuffleQuestionCheckbox: !quizSettings.shuffleQuestionCheckbox }))
                    }}>
                </input>
                Shuffle Questions
            </label> */}
        </div>
    )
}
export default ShuffleSettings;