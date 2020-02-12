import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  changeTitle,
  changeCurrency,
  changeWatching
} from '../reducers/actionCreators';

function EditableTitle(props) {
  const [type, setType] = useState(props.type);
  const [text, setText] = useState(props.text);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleClick = () => {
    toggleEdit();
    if (type === "title") {
      props.changeTitle(text);
    } else if (type === "currency") {
      props.changeCurrency(text);
    } else if (type === "watching") {
      props.changeWatching(text);
    }
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <span>
      <span className={`h4 ${!isEditing ? 'd-inline' : 'd-none'}`}>{text}</span>
      <input className={`${isEditing ? 'd-inline' : 'd-none'}`} type="text" name={type} value={text} onChange={handleChange}></input>
      <button className={`ml-3 d-inline btn ${isEditing ? 'btn-primary' : 'btn-warning'}`} onClick={handleClick}>{isEditing ? 'Accept' : 'Edit'}</button>
    </span>
  );
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState)
  return {...reduxState};
}

const connectToReduxStore = connect(
    mapStateToProps,
    {
      changeTitle,
      changeCurrency,
      changeWatching
    });


export default connectToReduxStore(EditableTitle);