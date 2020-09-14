class SampleApp extends React.Component {
    state = {
      color: 'red'
    }
    onChange = () => {
       this.setState({ color: 'green' });
    }
    render () {
      return (
        <div 
         style={{ backgroundColor: this.state.color }} 
         onClick={this.onChange}
        >
          <p>Some content goes here</p>
          <p>Some other content</p>
        </div>
      );
    }
  }