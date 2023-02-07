import { Component } from "react";
import Show from "./Show";

class App extends Component{
  constructor(){
    super();

    this.state = {
      count: 0
    };

    //Ispravno je pozvati u metodi componentDidMount()
    setInterval(() => {
      this.setState({count: this.state.count + 1});
      // this.state.count = this.state.count + 1; Ovo ne raditi!!!
    }, 1000);
  }

  render() {
    return (
      <div>
        <Show count={this.state.count} />
      </div>
    );
  }
}

export default App;
