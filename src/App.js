import React from 'react';
import './App.css';
import EditableTitle from './components/EditableTitle';

function App() {
  return (
    <div className="App mt-5 text-left">
      <div className="container">
        <div>
          <span className="h4">Welcome </span>
          <EditableTitle type="title" text="sampTitle"/>
        </div>
        <br/>
        <div>
          <span className="h4">Your default currency is:  </span>
          <EditableTitle type="currency" text="sampCurr"/>
        </div>
        <br/>
        <div>
          <span className="h4">You are currently watching the following currencies:  </span>
          <EditableTitle type="watching" text="sampBTC, sampETC"/>
        </div>
        <br/>
        <br/>
        <div>
          <span className="h4">From Currency: </span>
          <span className="h3">USD</span>
          <button className="ml-3 btn btn-success">Refresh Table</button>
        </div>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Todays Open</th>
              <th scope="col">Todays High</th>
              <th scope="col">Current Price</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        
      </div>
      
      
      
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
