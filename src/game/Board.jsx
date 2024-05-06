import React, { useState } from 'react'
import Box from './Box'

function Board() {
    const [state,setState]=useState(Array(9).fill(null));
    const[xTurn,setXTurn]=useState(true);
   
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if( state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                console.log(state[b]);
               return state[a];
            }
        }
        return false;
    }
    const isWinner= checkWinner();
    
    const handleClick=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState=[...state];
        copyState[index]=xTurn? "X": "0" ;
        setState(copyState);
        setXTurn(!xTurn);
    }
     const resetHandle=()=>{
        setState(Array(9).fill(null))
     }

  return (
      <div class='board'>
      {isWinner ? (<div class='result'>{isWinner} Won the Game <button onClick={resetHandle}>Play Again</button></div>) :
      ( <div class='game-structure'>
        <h1> Please move player<div class='turn'> {xTurn? "X": "0"}</div> </h1>
            <div class='board-row'>
                <Box value={state[0]} onClick={()=>handleClick(0)}/>
                <Box value={state[1]}  onClick={()=>handleClick(1)}/>
                <Box value={state[2]} onClick={()=>handleClick(2)}/>
            </div>
            <div class='board-row'>
                <Box value={state[3]} onClick={()=>handleClick(3)}/>
                <Box value={state[4]} onClick={()=>handleClick(4)}/>
                <Box value={state[5]} onClick={()=>handleClick(5)}/>
            </div>
            <div class='board-row'>
                <Box value={state[6]} onClick={()=>handleClick(6)}/>
                <Box value={state[7]} onClick={()=>handleClick(7)}/>
                <Box value={state[8]} onClick={()=>handleClick(8)}/>
            </div>
         <button onClick={resetHandle}>Reset</button>
         </div>)}
        </div>
      
  )
}

export default Board