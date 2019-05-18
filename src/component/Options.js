import React from 'react';
import CreateOption from './CreateOption';
const Options = (props)=>{
    return (
        <div >
        <div className="widget-header">
        <h3 className="widget-header__title">Your Option</h3>
        <button 
        className="button button--link"
        onClick = {props.removeAllOption}>Remove all</button>
        </div>
            {
                props.options.length > 0 ?
                props.options.map((option,index )=> (<CreateOption key = {option} count={index+1} option = {option} removeSingleOption = {props.removeSingleOption}/>)) :
                <p className="widget-message">There is no option</p>
            }
        </div>
    )
}

export default Options;