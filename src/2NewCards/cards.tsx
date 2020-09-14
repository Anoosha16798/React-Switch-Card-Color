import React,{Component} from 'react'
import './cards.css';

type ButtonState={
    button?: boolean,
    button1?:boolean,
}

type ButtonProp={

}



class Button extends React.Component <ButtonProp, ButtonState>{
constructor(props:ButtonProp){
super(props)
this.state ={
button: true,
button1:true,
}
this.handleClick = this.handleClick.bind(this);
this.handleClick1=this.handleClick1.bind(this);
}
handleClick(){
this.setState({
button:!this.state.button
})
}
handleClick1(){
this.setState({
button1:!this.state.button1
})
}
render(){
return (
<div className="container">
<button className={this.state.button ?
"buttonTrue": "buttonFalse"}
onClick={this.handleClick1}>
Hi!!
</button>
<button className={this.state.button1 ?
"buttonTrue": "buttonFalse"}
onClick={this.handleClick}>
hello!!
</button>
</div>
)
}
}
export default Button;