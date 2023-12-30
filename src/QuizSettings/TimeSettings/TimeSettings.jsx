import "./TimeSettings.css"
import CheckBox from "../../CheckBox";
import RadioBtn from "../../RadioBtn";
const TimeSettings = ({ quizSettings, setQuizSettings }) => {

    //For Check Box childs set to default
    const handleCheckBoxButton = (checked, label) => {
        console.log(checked, label)
        setQuizSettings((pre) => {
            const preProps = { ...pre };
            preProps[label] = checked
            if (checked === false) {
                preProps['Lock_answers_after_showinng'] = false
            }
            return preProps
        });
    }

    //For Radio Button Only one button is selected at one time.
    const radioBtnProp = ["Total_Quiz_Time", "Per_Question_Time"]
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
        <div className="time-settings-div1">
            <div className="time-settings-div2">
                <RadioBtn handleRadioButton={handleRadioButton} quizSettings={quizSettings} radioBtnLabel="Total Quiz Time" />

                <div className="time-settings-div3">
                    <label className="label2">Minutes</label>
                    <input className="minutes-text"
                        type="text"
                        value={quizSettings.quizTime}
                        onChange={(e) => {
                            if(e.target.value>=1)
                            {
                                setQuizSettings((pre) => ({ ...pre, quizTime: e.target.value }))
                            }
                        }}></input>
                </div>
            </div>
            <div className="time-settings-div2">
                <RadioBtn handleRadioButton={handleRadioButton} quizSettings={quizSettings} radioBtnLabel="Per Question Time" />

                <div className="time-settings-div3">
                    <label className="label2">Minutes</label>
                    <input className="minutes-text"
                        type="text"
                        value={quizSettings.perQuesTime}
                        onChange={(e) => {
                            if(e.target.value>=1)
                            {
                                setQuizSettings((pre) => ({ ...pre, perQuesTime: e.target.value }))
                            }
                        }}></input>
                </div>

                {quizSettings?.Per_Question_Time && (
                    <div className="time-settings-div4">
                        <CheckBox chckBxLabel="Do you want to set this time for all Questions?" handleCheckBoxButton={handleCheckBoxButton} />
                    </div>
                )}
            </div>
            <div className="time-settings-div5">
                <CheckBox chckBxLabel="Show one Question at a time" handleCheckBoxButton={handleCheckBoxButton} />
                {quizSettings?.Show_one_Question_at_a_time && (
                    <CheckBox chckBxLabel="Lock answers after showinng" handleCheckBoxButton={handleCheckBoxButton} />
                )}
            </div>
        </div>
    )
}
export default TimeSettings;