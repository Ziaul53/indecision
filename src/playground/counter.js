
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.hanndleAddOne = this.hanndleAddOne.bind(this);
        this.hanndleMinusOne = this.hanndleMinusOne.bind(this);
        this.hanndleReset = this.hanndleReset.bind(this);
        this.state = {
            count: props.count,
            name: props.name
        }
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        if(count){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(prevProps, prevState){  
        //console.log('update');
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
            // console.log(this.state.count);
        }
    }
    hanndleAddOne(){
        this.setState((prevState)=>( {count: prevState.count + 1} ));
    }
    hanndleMinusOne(){
        this.setState((prevState)=>({count: prevState.count - 1}));
    }
    hanndleReset(){
        this.setState(()=>({
                count:0,
                name:'nayeem'
            }));
    }
    render(){
        return (
            <div>
                <h1>the owner of app: {this.state.name}</h1>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.hanndleMinusOne}>-1</button>
                <button onClick={this.hanndleReset}>Reset</button>
                <button onClick={this.hanndleAddOne}>+1</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0,
    name:"tofazzal"
}




ReactDOM.render(<Counter />, document.getElementById('app'));


<button onClick = {(e)=>{props.removeSingleOption(props.option)}}>Remove</button>