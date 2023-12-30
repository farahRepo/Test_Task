import myReducer from "./reduxSlice"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        reducerSlice:myReducer,
    },
 });


//  export default function GeneralInfo({quiz,setQuiz}) {
//     const handleInputChange = (event) => {
//       setQuiz((pre) => ({ ...pre, title: event.target.value }));
//     };
//   const ahdjkl=useSelector((state)=>state.myReducer.quiz)
//   // useEffect(()=>{
//   // setQuiz((preState)=>({...preState,...ahdjkl}))
//   // },[ahdjkl])
//   useEffect(()=>{
//   console.log(quiz)
//   },[quiz])

//     const dispatch = useDispatch();
//     const handleSaveClick = () => {
//       dispatch(createQuiz(quiz));
//     };
//     useEffect(() => {
//       dispatch(getQuiz());
//     }, [dispatch]);
//     const handlechecbox=(e)=>{
//       console.log("chkbox",e)
//       setQuiz((pre) => ({ ...pre, checkbox: e }))
//     }
//     return (
//       <div className="generalInfoBox">
//         <Header setQuiz={setQuiz} quiz={quiz} />
//         <label className="titleTextSTyling" htmlFor="yourInput">
//           Title Here..
//         </label>
//         <input
//           className="titleTextField titlePlaceholder"
//           type="text"
//           id="yourInput"
//           value={quiz.title}
//           onChange={handleInputChange}
//           placeholder="Text"
//         />
//         <label className="descriptionText">Description</label>
//         <QuillEditor
//           className=" descriptionField descriptionPlaceholder"
//           theme="snow"
//           value={quiz.description}
//           modules={additionalModules}
//           onChange={(value) => setQuiz((pre) => ({ ...pre, description: value }))}
//           // onChange={(value) => setQuiz(() => ({ description: value }))}
//           placeholder="Description"
//         />
//   <CheckBoxComponent checkbox2={quiz.checkbox} handlechecbox={handlechecbox} text='lafjl'/>
//         <button
//           onClick={
//             handleSaveClick
//             // localStorage.setItem("quiz", JSON.stringify(quiz));
//           }
//         >
//           save
//         </button>
//       </div>
//     );
//   } 
