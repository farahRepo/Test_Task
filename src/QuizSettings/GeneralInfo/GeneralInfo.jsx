import { useState,useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import "./GeneralInfo.css"
import { createQuiz,getQuiz } from "../../redux/reduxSlice";
import { useSelector,useDispatch } from "react-redux";
import QuizSettings from "../QuizSettings";
const GeneralInfo=({quizSettings,setQuizSettings})=>{
     //For Quill Editor
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];
    const module ={
        toolbar: toolbarOptions,
    };
    return(
            <div>
                <h5>Title</h5> 
                <input placeholder="Enter Title Here ... " value={quizSettings?.title} onChange={(e)=>setQuizSettings((pre)=>({...pre,title:e.target.value}))} ></input>
                <h5>Description</h5>
                <ReactQuill modules={module} theme="snow" value={  quizSettings?.description} onChange={(e)=>setQuizSettings((pre)=>({...pre,description:e}))} ></ReactQuill>
            </div>
    )
}
export default GeneralInfo;