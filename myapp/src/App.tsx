import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [cart, setCart] = useState([])

  // 画面表示時
  useEffect(() => {

  })

  const products = ["りんご", "ぶどう", "バナナ", "キウイ"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='App-body'>
        <h1 style={{"textDecoration": "underline"}}>買い物画面</h1>
        <h2>かごの中身: {cart.join("、")}</h2>
        <h2>商品一覧</h2>
        { products.map((product) => (
          <div>
            <h3>・{ product }</h3>
            <button>追加</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
