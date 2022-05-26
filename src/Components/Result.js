const Result = ({playAgain,score}) => {
    return ( 
        <div>
            <p>You scored {score} out of 5</p>
            <button onClick={() =>{playAgain()}}>Play Again</button>
        </div>
     );
}
 
export default Result;