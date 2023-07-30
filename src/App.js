import './App.css';
import { useState, useEffect } from 'react';
import Square from './components/Square';
import { Posibilities } from './Posibilities';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  useEffect(() => {
    const winCheck = () => {
      Posibilities.forEach((current) => {
        if (board[current[0]] === board[current[1]] && board[current[0]] === board[current[2]] && board[current[0]] !== "") {
          alert(`Congratulations ${player === "X" ? "O" : "X"}! You won!`);
          setPlayer("X");
          setBoard(["", "", "", "", "", "", "", "", ""]);
        }
      });
    };
    const tieCheck = () => {
      const isTie = board.every((val) => val !== "");

      if (isTie) {
        alert("It's a tie!");
        setPlayer("X");
        setBoard(["", "", "", "", "", "", "", "", ""]);
      }
    };

    winCheck();
    tieCheck();
  }, [board, player]);

  const position = (pos) => {
    if (board[pos] === "") {
      const newBoard = [...board];
      newBoard[pos] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} position={() => { position(0) }} />
          <Square val={board[1]} position={() => { position(1) }} />
          <Square val={board[2]} position={() => { position(2) }} />
        </div>
        <div className='row'>
          <Square val={board[3]} position={() => { position(3) }} />
          <Square val={board[4]} position={() => { position(4) }} />
          <Square val={board[5]} position={() => { position(5) }} />
        </div>
        <div className='row'>
          <Square val={board[6]} position={() => { position(6) }} />
          <Square val={board[7]} position={() => { position(7) }} />
          <Square val={board[8]} position={() => { position(8) }} />
        </div>
      </div>
    </div>
  );
}

export default App;
