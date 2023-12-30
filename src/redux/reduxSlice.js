import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

export const createQuiz=createAsyncThunk('createQuiz',async(payload,thunkApi)=>{
  // console.log('i am in slice',payload)
  localStorage.setItem('quizz',JSON.stringify(payload))
  return payload
})

export const getQuiz=createAsyncThunk('getQuiz',async(thunkApi)=>{
  const respone=JSON.parse(localStorage.getItem('quizz'))
  // console.log('i am in get slice',respone)
  return respone
})

export const addQuestion=createAsyncThunk('addQuestion',async(payload,thunkApi)=>{
  localStorage.setItem('question', JSON.stringify(payload))
  return payload
})
export const getQuestion=createAsyncThunk('getQuestion',async(payload,thunkApi)=>{
  console.log("get question is running...",payload )
  const response= JSON.parse(localStorage.getItem('question'))
  return response
})

export const addAllQuestions =createAsyncThunk('addAllQuestions',async(payload,thunkApi)=>{
  console.log("In add all Questions redux slice",payload)
  localStorage.setItem('allQuestions',JSON.stringify(payload))
  return payload
})

const initialState = {
  quiz:{}
};
const reducerSlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(createQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    }).addCase(getQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    })
    .addCase(addQuestion.fulfilled,(state,action)=>
    {
      state.quiz=action.payload
    })
    .addCase(getQuestion.fulfilled,(state,action)=>{
      state.quiz=action.payload
    })
    .addCase(addAllQuestions.fulfilled,(state,action)=>{
      state.quiz=action.payload
    })
  }
});
// export const {setTabIndex,saveUserData} = reducerSlice.actions;
export default reducerSlice.reducer;
