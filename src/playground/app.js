class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.randomSelect = this.randomSelect.bind(this);
        this.removeAllOption = this.removeAllOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeSingleOption = this.removeSingleOption.bind(this);
        this.state = {
            options: props.options
        }
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
    addOption(option){
        if(!option){
            return 'Enter a valid value'
        }
        else if(this.state.options.indexOf(option) != -1){
            return 'This item is already exists';
        }
        this.setState((prevState)=>({options : prevState.options.concat([option])}));
    }
    removeAllOption(){
        this.setState(()=>({ options: [] }));
    }
    removeSingleOption(option){
        this.setState((prevState)=>({
            options: prevState.options.filter(
                (item)=> item !== option)
            }
        ));
    }
    randomSelect() {
        const ranNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[ranNumber]);
    }
    render(){
        return (
            <div>
                <Header doctTitle = {this.state.doctTitle} docSubTitle = {this.state.docSubTitle}/>
                <Action randomSelect = {this.randomSelect} hasOption = {this.state.options.length > 0} />
                <Options 
                    removeAllOption = {this.removeAllOption}
                    options = {this.state.options}
                    removeSingleOption = {this.removeSingleOption}
                />
                <AddOption addOption = {this.addOption} />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props)=>{
    return (
        <div>
            <h2>{props.doctTitle}</h2>
            <h3>{props.docSubTitle}</h3>
        </div>
    );
}
Header.defaultProps = {
    doctTitle: 'Indecidion App',
    docSubTitle: 'Put your life in the hands of a Computer'
}
const Action = (props)=>{
    return (
        <div>
            <button
                onClick = {props.randomSelect} 
                disabled = {!props.hasOption}
            >
                What should do
            </button>
        </div>
    );
}
 
const Options = (props)=>{
    return (
        <div>
            <button onClick = {props.removeAllOption}>Remove all</button>
            {
                props.options.length > 0 ?
                props.options.map(option => <CreateOption key = {option} option = {option} removeSingleOption = {props.removeSingleOption}/>) :
                <p>There is no option</p>
            }
        </div>
    )
}
const CreateOption = (props)=>(
    <div>
        {props.option}
        <button onClick = {(e)=>{props.removeSingleOption(props.option)}}>Remove</button>
    </div>
    )
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.formHandle = this.formHandle.bind(this);
        this.state = {
            err: undefined
        }
    }
    formHandle(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.addOption(option);
        this.setState(()=>({ err: err }));
        if(!err){
            console.log(err);
            e.target.elements.option.value = '';
            
        }
    }
    render(){
        return (
            <div>
                {this.state.err && <p>{this.state.err}</p>}
                <form onSubmit = {this.formHandle}>
                    <input type="text" name="option"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app1'));
