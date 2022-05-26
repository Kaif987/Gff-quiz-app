import { useEffect, useState } from "react";

const Question = ({answers,question,selected,updateSelection}) => {
    
    return (
        <div>
            <h3>{question}</h3>
            <ul>
                {answers.map((answer,index) => {
                    return <li key={index} onClick = {
                        () =>{
                        updateSelection(answer)
                        selected(answer)
                        console.log(answer)
                        }}> 
                        <button>{answer}</button>
                        </li>
                })}
                
            </ul>
        </div>
    );
}
 
export default Question;