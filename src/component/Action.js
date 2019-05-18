import React from 'react';

const Action = (props)=>{
    return (
        <div>
            <button
            className="big-button"
                onClick = {props.randomSelect} 
                disabled = {!props.hasOption}
            >
                What should do
            </button>
        </div>
    );
}
export default Action;