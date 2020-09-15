import React,{Component} from 'react'
import Card from'./CardUI';
type BState={
Card1?:any,
Card2?:any,
left?:any,
right?:any

}


/*REVIEW*/

/*Let us check
what happens now  any change?*/
class Cards extends React.Component<any,BState>{
    constructor(props:any){
        super(props);
        this.state={
           // count:0,
                Card1: true,
                Card2: true,
                left: 'red',
                right:'lightblue'
        };
this.ChangeGreen = this.ChangeGreen.bind(this);
this.ChangeYellow=this.ChangeYellow.bind(this);
}
ChangeGreen(){
this.setState({
Card2:!this.state.Card2
})
}
ChangeYellow(){
this.setState({
Card1:!this.state.Card1
})
}

Changeright(){
 this.setState({
Card1:!this.state.Card1
})
    this.state.Card1? this.setState({left:'red'}):
this.setState({
    left:'green'
})
}
Changeleft(){
    this.ChangeGreen()
    this.state.Card2? this.setState({right:'lightblue'}):
this.setState({
    right:'black'
})
}
    /*
 ChangeGreen(){

  this.setState({count:this.state.count+1})
  if (this.state.count%2 != 0)
    this.setState({backgroundColor1:'Red'})
else
    return this.setState({backgroundColor1:'Yellow'});
    }
    ChangeYellow(){
       // this.setState({ backgroundColor: 'Lightblue' })
        this.setState({count:this.state.count+1})
  if (this.state.count%2 != 0)
    this.setState({backgroundColor:'Lightblue'})
else
    return this.setState({backgroundColor:'Grey'});
    }*/
    render(){
        const style1={
            backgroundColor: this.state.left
        }
        const style2={
            backgroundColor: this.state.right
        }
        return(
            <div className="container-fluid d-flex justify-content-center" >
               <div className=
"RedCard" style={style1}
>
                               <div className="col-md-4">
                               <h1>{this.state.Card2}</h1>
                               <Card title="Switch" Change={()=>this.Changeleft()}Name="To Blue/Black">
</Card>
</div>
                    </div>
                    <div className=
"BlueCard" style={style2}>
                    <div className="col-md-4">
                    <h1>{this.state.Card1}</h1>
                    <Card title="Switch" Change={()=>this.Changeright()} Name="To Green/Red">
                            </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;