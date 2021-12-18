import React from "react";

class App extends React.Component {
    
  state = {
    name: "Diego Brito",
    counter: 0,
  };
 
  handleClick = () => this.setState({name: 'Diego Ramos Brito'});
  
  handleAncorClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const { name, counter } = this.state;

    return (
      <>
        <h1 onClick={ this.handleClick }>
          { name }
        </h1>
        <a href="https://google.com" onClick={this.handleAncorClick}>
          Google { counter }
        </a>
      </>
    );
  }
}

export default App;
