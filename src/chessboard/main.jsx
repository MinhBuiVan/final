import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Title from './Title.jsx';
import ChessBoard from './ChessBoard/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Title title={"This is title"} />
    <ChessBoard />
  </React.StrictMode>,
)
