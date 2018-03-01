import React from 'react'; //allows us to write JSX, transpile and use react
import ReactDOM from 'react-dom'; //allows us to put things on the DOM
import './index.css'; //brings style into application
import App from './App'; //brings the component in
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //grab this and replace with App
registerServiceWorker();
