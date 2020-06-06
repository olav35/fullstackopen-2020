import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
