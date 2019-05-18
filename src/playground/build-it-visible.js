

class VisiblilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visiblility: true
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                visiblility : ! prevState.visiblility
            } 
        });
        // console.log(this.state.visiblility);
    }
    render(){
        //console.log(this.props);
        return (
            <div>
                <h1>Visiblility Toggler</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visiblility ? 'Hide content' : 'Show Content'}
                </button>
                {this.state.visiblility && (<p>here is content</p>) }
            </div>
        );
    }
}


ReactDOM.render(<VisiblilityToggle test="tofazzal" />, document.getElementById('app'));