import { Component } from "react";
import Show from "./show";

class App extends Component{
  state = {
    count: 0
  }
  
  setState({count=this.state.count +1})

  render() {
    return <div><Show count={this.state.count} /></div>;
  }
}

export default App;
