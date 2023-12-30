import { useEffect, useState } from "react";

const RadioBtn = ({ radioBtnLabel, handleRadioButton,quizSettings }) => {

    const stateNameWithoutSpaces = radioBtnLabel.replace(/\s/g, '_');
    const handleClick = () => {
        handleRadioButton(stateNameWithoutSpaces)
    }

    return (
        <label>
            <input
                type="radio"
                checked={quizSettings[stateNameWithoutSpaces]}
                // onChange={() => { isChecked(!checked)}}
                onClick={() => handleClick()}
            />
            {radioBtnLabel}
        </label>
    )
}
export default RadioBtn;