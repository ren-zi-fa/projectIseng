import React from "react";


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor")
  }

  componentDidMount(){
    this.setState({count:10})
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
    if (this.state.count === 10){
        this.setState({count:0})
    }
  }
  render() {
    return (
      <div className="flex justify-center">
        <p className="text-xl font-bold">{this.state.count}</p>
       
        <button
          className="bg-blue-300 px-2 py-2 rounded-lg mx-4 "
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}
