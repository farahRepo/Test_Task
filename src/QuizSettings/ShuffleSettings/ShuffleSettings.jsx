import CheckBox from "../../CheckBox";
import "./ShuffleSettings.css"
const ShuffleSettings = ({ setQuizSettings, quizSettings }) => {

    return (
        <div className="div-checkboxes">
           <CheckBox chckBxLabel="Shuffle Answers"  setQuizSettings={setQuizSettings} />  
           <CheckBox chckBxLabel="Shuffle Questions" setQuizSettings={setQuizSettings} />  
        </div>
    )
}
export default ShuffleSettings;