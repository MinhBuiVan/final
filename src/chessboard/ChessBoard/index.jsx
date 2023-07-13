import { useState, useEffect } from 'react';
import { Image } from 'antd';
import './style.css';
import chessboardsvg from '../assets/chessboard.png'

function ChessBoard() {
  const [num, setNum] = useState();
  const [board, setBoard] = useState([]);
  const [color1, setColor1] = useState('white');
  const [color2, setColor2] = useState('black');
  const [change, setChange] = useState(color2);

  const make = () => {
    const A = [];
    for (let i = 0; i < num; i++) {
      const row = Array.from({ length: num });
      A.push(row);
    }
    setBoard(A);
  };

  useEffect(() => {
    make();
  }, [num]);

  const handleClick = () => {
    setChange(!change);
  }

  const handleColor1 = {
    backgroundColor: color1,
  };

  const handleColor2 = {
    backgroundColor: color2,
  };
  
  const handleChange = () => {

    return (
      <div>
          {board.map((r, row_idx) => {
          return (
            <div className="row" key={row_idx}>
              {r.map((c, column_idx) => {
                return (
                  <div
                    className="chess"
                    style={(row_idx + column_idx) % 2 === 0 ? (change ? handleColor1 : handleColor2) : (change ? handleColor2 : handleColor1)}
                    key={column_idx}
                    onClick={handleClick}
                  ></div>
                );
              })}
            </div>
          );
          })}
        </div>
    )
  }
  
  return (
    <div className='wrapper_chessboard'>
      <div className='content_chess'>
        <div className='chess_header'>
          <h1 className='chess_title'>Chess Board</h1>
          <Image
              width={80}
              src={chessboardsvg}
              preview={false}
          />
        </div>
        <div className='group_choose_number'>
          <span className='choose_number_text'>Choose a number</span>
          <input
            onChange={(e) => setNum(e.target.value)}
          />
          <button className='chess_btn' onClick={handleClick}>Click</button>
        </div>
        <div className='group_choose_option'>
          <div className='group_choose_color'>
            <span className='choose_number_text'>Choose 1st Color</span>
            <input className='input_color' type='color' defaultValue="#ffffff" onChange={(e) => setColor1(e.target.value)}></input>
          </div>
          <div className='group_choose_color'>
            <span className='choose_number_text'>Choose 2nd Color</span>
            <input className='input_color' type='color' defaultValue="#000000" onChange={(e) => setColor2(e.target.value)}></input>
          </div>
        </div>
      </div>
      
        {handleChange()}
      
    </div>
  );
}

export default ChessBoard;