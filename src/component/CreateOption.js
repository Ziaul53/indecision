import React from 'react';

const CreateOption = (props)=>(
    <div className="option">
       <p className="option-text">{props.count}.{props.option}</p>
        <button className="button button--link"
        onClick = {(e)=>{props.removeSingleOption(props.option)}}>Remove</button>
    </div>
)
export default CreateOption;