
import React from 'react';
import logo from './logo.svg';
import './card-style.css';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bgColor: ""
      }
    }
  
  
    boxClick = (e) => {
      this.setState({
        bgColor: "green"
      })
    }
  
    render() {
      return (
        <div className="App">
  
  
          <article className='experimentsHolder'>
           
            <div className="blue" 
            style={{backgroundColor: this.state.bgColor}}
             onClick={this.boxClick}>Change Color</div>
          </article>
  
        </div>
      );
    }
  }