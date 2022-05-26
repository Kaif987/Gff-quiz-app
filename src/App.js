import { useEffect, useState } from "react";
import questionApi from "./Components/QuestionApi"
import Question from "./Components/Question";
import Result from "./Components/Result"
function App() {
  
  const [questions,setQuestions] = useState(null)
  const [score,setScore] = useState(0)
  const[selections,setSelections] = useState(Array(5).fill(0))
  const [allAnswered, setAllAnswered] = useState(false)
  
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
    
    },[JSON.stringify(selections),allAnswered])
  

  function getQuestions(){
    questionApi()
      .then(response =>setQuestions(response))
  }

  function playAgain(){
    questionApi()
      .then(response => setQuestions(response))
    setScore(0)
  }

  useEffect(() =>{
    getQuestions()
    console.log(questions)
  },[])

  function computeAnswer(correct,answer){
    if(answer === correct){
        setScore(prev => (prev + 1))
      }
  }

  // only submit when all question have been answered
  // show score when submit button is pressed
  // show another button which says "Play again"


  // how would you track if each question is answered or not
  


  return (
    <div className="App">
        <h1>Quiz App</h1>
        {questions && questions.map( ({question, answers, correct, questionId},index) => {
          return <Question 
          key = {questionId}
          question = {question}
          answers = {answers} 
          updateSelection = {(selection)=>{updateSelection(index,selection)}} 
          selected = {(answer) =>{computeAnswer(correct,answer)}}
          />
        })}
          {allAnswered && <button>Submit Answers</button>}
    </div>
  );
}

export default App;
