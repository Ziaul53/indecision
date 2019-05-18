import React from 'react';

export default class AddOption extends React.Component{
    state = {
        err: undefined
    }
    formHandle = (e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.addOption(option);
        this.setState(()=>({ err: err }));
        if(!err){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.err && <p className="add-option-eror">{this.state.err}</p>}
                 <form className="add-option" onSubmit = {this.formHandle}>
                    <input className="add-option-input" type="text" name="option"></input>
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        );
    };
}