import Header from './Header/Header.jsx'
import CreatingQuiz from './CreatingQuiz/CreatingQuiz.jsx';
import { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddingQuestions from './AddingQuestions/AddingQuestions.jsx';
import { useDispatch } from 'react-redux';
import { createQuiz } from './redux/reduxSlice.js';



const USER_NAME = "Numan";
const App = () => {
  const scoreLevel = ["Lowest", "Average", "Highest", "Matching", "Easy Questions"];

  const [quizSettings, setQuizSettings] = useState({
    tab:0  ,                //for Tabs of Quiz Setting
    //Quiz Setting page
    title: "Untitled",
    description: "",

    responseOnceRbtn: false,        //Only once after each attempt

    showCorrectAnsRbtn: false,      //Lets Student see their current answers
    showCorrectAnsDate: null,             //Show correct Ans at
    hideCorrectAnsDate: null,             //Hide correct Ans at

    quizScoreType: scoreLevel[0],                    //Quiz Score to keep 
    noOfAttemptsValue: 0,             //Number of Attempts Value from stteper

    quizTime: 0,                      //Total Quiz Time Minutes
    perQuesTime: 0,                   // Per  Question Time in minutes
    
    //Add Questions Page
    questionType:"Select Type",
    quizScore:0,
    difficultyLevel:"",

    //Add Question MCQ Component
     mcqs: [null],
     mcqsOptionType: "Single_Select",
     mcqsOptionAns:"Correct",

  });
  const dispatch =useDispatch()
  useEffect(() => {
    console.log("from app", quizSettings);
    dispatch(createQuiz(quizSettings));
  }, [quizSettings]);
 


  return (
    <>
      {/* --------- ROUTING ---------- */}
      <Header userName={USER_NAME} />
        {/* <Routes>
          <Route exact path='/' element= {<CreatingQuiz setQuizSettings={setQuizSettings} quizSettings={quizSettings}/>}> </Route>
          <Route exact path='/addQuestions' element= {<AddingQuestions setQuizSettings={setQuizSettings} quizSettings={quizSettings}/>}> </Route>
        </Routes> */}
      <CreatingQuiz setQuizSettings={setQuizSettings} quizSettings={quizSettings} />
    </>
  )
}

export default App
