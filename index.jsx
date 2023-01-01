import React from "react";
import ReactDOM from "react-dom";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: "" };
  }

  componentDidMount() {
    this.setState({
      list: "apples",
    });
  }

  addToList = () => {
    let input = document.getElementById("inputField").value;
    let updatedList = this.state.list + "\n" + input;
    this.setState({
      list: updatedList,
    });
    document.getElementById("inputField").value = "";
  };

  removeFromList = () => {
    let input = document.getElementById("inputField").value;
    let filteredList = this.state.list.replace("\n" + input, "");
    this.setState({
      list: filteredList,
    });
    document.getElementById("inputField").value = "";
  };

  resetList = () => {
    this.setState({
      list: "apples",
    });
  };

  render() {
    return (
      <div id="counter">
        <h3>{this.state.list}</h3>
        <div className="controls">
          <input type="text" id="inputField" placeholder="Item name..."></input>
          <button style={{fontWeight: "bold"}} onClick={this.addToList}>
            Add to List
          </button>
          <button style={{color: "red"}} onClick={this.removeFromList}>Remove from List</button>
          <button
            onClick={this.resetList}
            disabled={this.state.list == "apples"}
          >
            Reset List
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
