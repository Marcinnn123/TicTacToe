import React from 'react';
import "../App.css"

function Square({val, position}) {
  return (
    <div className="square" onClick={position}>
      {val}
    </div>
  )
}

export default Square
