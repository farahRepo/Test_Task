import "../AddMcqOption/AddMcqOption.css"
import crossIcon from "../../../assets/images/CrossIcon.png"
import downArrow from "../../../assets/images/down-arrow.png"
import upArrow from "../../../assets/images/up-arrow.png"
import { useEffect, useState } from "react"
import DropDown from "../../../DropDown/DropDown"
import { useDispatch } from "react-redux"
import { getQuestion } from "../../../redux/reduxSlice"

const AddMcqOption = ({ quizSettings,mcqQuestionObj, setMcqQuestionObj, option, index }) => {
  const chooseOptions = ['Correct', 'Incorrect'];

 //for Drop Down 
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  //For Adding Value of option that is correct or Not Without Multi Select Or Single Select Login
  // const handleItemClick = (e) => {
  //   setMcqQuestionObj((prev) => {
  //     const updatedOptions = { ...prev };
  //     updatedOptions.options[index] = {
  //       ...option,
  //       corrRNot: e,
  //     };
  //     return updatedOptions;
  //   })
  //   setDropdownOpen(false);
  // };
   
  //For Adding Value of option that is correct or Not With Multi_Select Or Single_Select Login
  const handleItemClick = (e) => {
   // If Single_select, only allow one correct option
    if (quizSettings.mcqsOptionType === 'Single_Select' && e === 'Correct') { 
      setMcqQuestionObj((prev) => {
        const updatedOptions = { ...prev };
        updatedOptions.options = updatedOptions.options.map((opt, i) => ({
          ...opt,
          corrRNot: i === index ? e : 'Incorrect',
        }));
        return updatedOptions;
      });
    }
    // If Multi_Select, set correct/incorrect for the selected option
    else if (quizSettings.mcqsOptionType  === 'Multi_Select') {
      setMcqQuestionObj((prev) => {
        const updatedOptions = { ...prev };
        updatedOptions.options = updatedOptions.options.map((opt, i) => ({
          ...opt,
          corrRNot: i === index ? e : opt.corrRNot,
        }));
        return updatedOptions;
      });
    }
    setDropdownOpen(false);
  };

  //For Adding a new option of MCQ statement to a state
  const handleOptionChange = (e) => {
    setMcqQuestionObj((prev) => {
      const updatedOptions = { ...prev };
      updatedOptions.options[index] = {
        ...option,
        option: e.target.value,
      };
      return updatedOptions;
    });
  };

  //For Deleting an option from state
  const handleDeleteOption = (index) => {
    setMcqQuestionObj((prev)=> {
      const updatedOptions = { ...prev };
      updatedOptions.options = prev.options.filter((_, i) => i !== index);
      return updatedOptions;
    });
  }
  return (
    <>
      <div className="option-div">
        <label className="label-num" >{index + 1}</label>
        <div className="option-div2">
          <input key={index} className="option-div-input" placeholder="Enter Option"
            onChange={handleOptionChange} value={mcqQuestionObj.options[index].option} ></input>
        </div>
        {/* --------------DropDown----------------  */}
        <div className="main-divDD">
          <div>   <label className="dropdown-labelDD"></label> {mcqQuestionObj.options[index].corrRNot} </div>
          <div>   <button className="dropdown-btnDD" onClick={toggleDropdown} >
            {(isDropdownOpen) ? <img src={upArrow}></img> :
              <img src={downArrow}></img>
            }
          </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-options-divDD ">
            {chooseOptions.map((option) => (<div key={option} onClick={() => handleItemClick(option)}> {option} </div>))}
          </div>)
        }
        {/* --------------DropDown----------------  */}
        <button className="btn-icon" onClick={()=>handleDeleteOption(index)}> <img alt="Delete option" src={crossIcon}></img> </button>
      </div>
    </>
  )
}
export default AddMcqOption;