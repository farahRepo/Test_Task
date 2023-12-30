import { useEffect, useState } from "react";

const CheckBox = ({ chckBxLabel, handleCheckBoxButton }) => {
    const [checked, isChecked] = useState(false)

    const stateNameWithoutSpaces = chckBxLabel.replace(/\s/g, '_');
    if(handleCheckBoxButton)
    {
        useEffect(() => {
            handleCheckBoxButton(checked, stateNameWithoutSpaces)
        }, [checked])
    }
    return (
        <label>
            <input
                type="checkbox"
                value={checked}
                onChange={() => { isChecked(!checked) }}
            />
            {chckBxLabel}
        </label>
    );
};


export default CheckBox;