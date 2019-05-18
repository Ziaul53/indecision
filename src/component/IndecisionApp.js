import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModel'

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    closeModal = ()=>{
        this.setState(()=>({selectedOption: undefined}));
    }
    addOption = (option)=>{
        if(!option){
            return 'Enter a valid value'
        }
        else if(this.state.options.indexOf(option) != -1){
            return 'This item is already exists';
        }
        this.setState((prevState)=>({options : prevState.options.concat([option])}));
    }
    removeAllOption = ()=>{
        this.setState(()=>({ options: [] }));
    }
    removeSingleOption = (option)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter(
                (item)=> item !== option)
            }
        ));
    }
    randomSelect = ()=> {
        const ranNumber = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=>({selectedOption: this.state.options[ranNumber]}))
    }
    componentDidMount(){
        try{
            const json = JSON.parse(localStorage.getItem('options'));
            if(json){
                this.setState(()=>({options:json}));
        }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render(){
        return (
            <div>
                <Header doctTitle = {this.state.doctTitle} docSubTitle = {this.state.docSubTitle}/>
                <div className="container">
                    <Action randomSelect = {this.randomSelect} hasOption = {this.state.options.length > 0} />
                <div className="widget">
                <Options 
                removeAllOption = {this.removeAllOption}
                options = {this.state.options}
                removeSingleOption = {this.removeSingleOption}
            />
            <AddOption addOption = {this.addOption} />
                </div>
                </div>
                <OptionModal closeModal = {this.closeModal} selectedOption = {this.state.selectedOption}/>
            </div>
        );
    }
}
export default IndecisionApp;