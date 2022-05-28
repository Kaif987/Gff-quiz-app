import { useEffect, useState } from "react";
import questionApi from "./Components/QuestionApi"
import Question from "./Components/Question";
import Result from "./Components/Result"
function App() {
  
  const [questions,setQuestions] = useState(null)
  const [score,setScore] = useState(0)
  const[response,setResponse] = useState(0)
  const[selections,setSelections] = useState(Array(5).fill(0))
  const [allAnswered, setAllAnswered] = useState(false)
  const [submitted,setSubmitted] = useState(false)
  
  function updateSelection(index,selection){
    setSelections(prev => {
      const  newSelection = prev
      newSelection[index] =  selection
      console.log(newSelection)
      return newSelection
    })
  }
  
  useEffect(() =>{
    console.log("triggered")
    const allSelected = selections.every((elem) =>{
      return elem != 0
    })

    if(allSelected){
      setAllAnswered(true)
    }
    console.log(allAnswered)
    
    },[allAnswered,response])
  

  function getQuestions(){
    questionApi()
      .then(response =>setQuestions(response))
  }

  function playAgain(){
    questionApi()
      .then(response => setQuestions(response))
    setScore(0)
    setResponse(0)
    setAllAnswered(0)
    setSubmitted(0)
  }

  useEffect(() =>{
    getQuestions()
  },[])

  function computeAnswer(correct,answer){
    setResponse(prev =>(prev + 1))
  }

  function onSubmit(){
    setSubmitted(true)
    questions.forEach((question,index) =>{
      if(selections[index] === question.correct){
        setScore(prev => (prev + 1))
      }
    })
    console.log(score)

  }

  const questionComponent =  questions && questions.map( ({question, answers, correct, questionId},index) => {

    return (<Question key = {questionId} question = {question} answers = {answers} arrayUpdate = {(selection)=>{updateSelection(index,selection)}} selected = {(answer) =>{computeAnswer(correct,answer)}} />) 

  })


  return (
    <div className="App">
      <h1>Quiz App</h1>
      {
      submitted ? 
      <Result playAgain={playAgain} score = {score}/>
      :
      <div>
        {questionComponent}
        {allAnswered && <button onClick = {onSubmit} >Submit Answers</button>}
      </div>
      }
    </div>   
  )
}

export default App;
