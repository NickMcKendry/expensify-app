import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Editing expense with id of {props.match.params.id}</h3>
    </div>
  )
}

export default EditExpensePage;
