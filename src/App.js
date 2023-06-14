import logo from './logo.svg';
import './App.css';
import SquarePart from './SquarePart';
import { useState } from 'react';
function App() {
  const [isSubmit,setIsSubmit]=useState(true)
  
  const [square, setSquare] = useState(Array(9).fill(null));
  const handleClick=(i)=>{
    if(square[i] || checkWinner(square)) return
    const temp=square.slice();
    console.log("temp",temp);
    if (isSubmit) {
      temp[i] = "x";
      setIsSubmit(false)
    }
    else {
      temp[i] = "o";
      setIsSubmit(true);
    }
    setSquare(temp)
    console.log(square);
  }
  const winner =checkWinner(square);
  let status;
  if (winner){
    status="Winner is: "+winner;
  }
  else{
    status="Next Turn is :"+(isSubmit?"x":"o");
  }
  function checkWinner(square){
    const posibility = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8]
    ];
    for(let i=0;i<posibility.length;i++){
      const [a,b,c]=posibility[i];
      if(square[a] && square[a]===square[b] && square[a]===square[c])
      {
        return square[a];
      }
        

    }
    return null;
  }
  return (
    <div className="container">
      <div>{status}</div>
      <div className="board-row">
        <SquarePart value={square[0]} onSquareClick={() => handleClick(0)} />
        <SquarePart value={square[1]} onSquareClick={() => handleClick(1)} />
        <SquarePart value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <SquarePart value={square[3]} onSquareClick={() => handleClick(3)} />
        <SquarePart value={square[4]} onSquareClick={() => handleClick(4)} />
        <SquarePart value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <SquarePart value={square[6]} onSquareClick={() => handleClick(6)} />
        <SquarePart value={square[7]} onSquareClick={() => handleClick(7)} />
        <SquarePart value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
