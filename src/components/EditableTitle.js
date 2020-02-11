import React, { Component, useState } from 'react'

function EditableTitle(props) {
  const [type, setType] = useState(props.type);
  const [text, setText] = useState(props.text);
  const [isEditing, setIsEditing] = useState(false);
  
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
      <button className={`ml-3 d-inline btn ${isEditing ? 'btn-primary' : 'btn-warning'}`} onClick={toggleEdit}>{isEditing ? 'Accept' : 'Edit'}</button>
    </span>
  );
}



export default EditableTitle;