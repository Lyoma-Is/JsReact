import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Testq from './components/Testq.jsx';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Test/>
    <Text>Text</Text>

    <Text2>Text2</Text2>

    <Test2/>
    <Testq />
    
    <App/>

  </div>
);

function Test(){
  return(
    <p> Test </p>
  )
}

function Text(props){
  return(
    <p>
      {props.children}
    </p>
  )
}

function Text2({children}){
  return(
    <p>
      {children}
    </p>
  )
}

function Test2(){
  let cnt = 5
  return(
    <div>
      <p>{cnt + 10}</p>
      <button>
          click
      </button>
    </div>
  )
}