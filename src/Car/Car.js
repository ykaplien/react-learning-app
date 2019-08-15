import React from 'react';
import './Car.css'

const Car = (props) => {
    return (
      <div className='Car'>
          <h2>Car name: {props.name}</h2>
          <p><strong>Year: {props.year}</strong></p>
          <input type="text" onChange={props.onChangeName} value={props.name}/>
          <button onClick={props.onDelete}>Delete</button>
          {/*<button onClick={props.onClick}>{props.name + ' to title'}</button>*/}
      </div>
    );
};

export default Car;