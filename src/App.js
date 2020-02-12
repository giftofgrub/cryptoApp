import React, { useState } from 'react';
import './App.css';
import EditableTitle from './components/EditableTitle';
import { connect } from 'react-redux';

function App(props) {
  const [displaying, setDisplaying] = useState({});

  const handleRefresh = () => {
    getFromAPI();
  }

  const getFromAPI = () => {
    const URL = 'https://min-api.cryptocompare.com/data/pricemultifull?';
    const header = `fsyms=${props.currency}&tsyms=${cleanWatching(props.watching)}`;
    let resp;
    fetch(`${URL}${header}`).then( response => {
     return response.json()
    }).then( response => {
      resp = response.RAW[props.currency]
      setDisplaying(resp)
      return;
    })
  }

  const cleanWatching = (watchingString) => {
    let res = watchingString.split(",").map( elem => {
      return (elem.trim());
    })
    return res.join()
  }

  return (
    <div className="App mt-5 text-left">
      <div className="container">
        <br/>
        <h1>Crypto App</h1>
        <br/>
        <div>
          <span className="h4">Welcome </span>
          <EditableTitle type="title" text={props.title}/>
        </div>
        <br/>
        <div>
          <span className="h4">Your default currency is:  </span>
          <EditableTitle type="currency" text={props.currency}/>
        </div>
        <br/>
        <div>
          <span className="h4">You are currently watching the following currencies:  </span>
          <EditableTitle type="watching" text={props.watching}/>
        </div>
        <br/>
        <br/>
        <div>
          <span className="h4">From Currency: </span>
          <span className="h3">{props.currency}</span>
          <button className="ml-3 btn btn-success" onClick={handleRefresh}>Refresh Table</button>
        </div>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Last Updated</th>
              <th>Todays Open</th>
              <th>Todays High</th>
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(displaying).map( key => {
              let obj = displaying[key];
              let date = new Date(0);
              date.setUTCSeconds(displaying[key].LASTUPDATE);
              return(
                <tr key={key}>
                  <td>{obj.TOSYMBOL}</td>
                  <td>{date.toString()}</td>
                  <td>{obj.OPENDAY}</td>
                  <td>{obj.HIGHDAY}</td>
                  <td>{obj.PRICE}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState)
  return {...reduxState};
}

const connectToReduxStore = connect(mapStateToProps);

export default connectToReduxStore(App);
