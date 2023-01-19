import { Component } from "react";

class Informacion extends Component{
    constructor(props){
        super(props);
        const{edad}=this.props;
        this.state={suma:edad}
    }
    sumar(){
        this.setState({suma:this.state.suma + 1 })
    }
    render(){
        const {nombre,color}=this.props;
    
 
        return(
            <>
            <h1>{nombre}</h1>
            <p>Age: {this.state.suma}</p>
            <p>hair Color: {color}</p>
            <button onClick={this.sumar.bind(this)}>Birthday Button for {nombre}</button>
            </>
        )
    }
}
export default Informacion;