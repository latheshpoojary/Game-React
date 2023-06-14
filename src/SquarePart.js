import React from 'react'

const SquarePart = ({ value, onSquareClick }) => {
  
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

export default SquarePart
