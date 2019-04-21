import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import axios from "axios";
const backend_url = "http://127.0.0.1:8000";

export default class App extends Component {
  state = {
    loading: "yes",
    res: [],
  };

  componentDidMount() {
    axios.get(backend_url + "/ping/").then(res => {
      this.setState({
        res: res.data,
        loading: "no",
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <h1>Status Page</h1>

        {this.state.loading === "yes" ? (
          <>Checking system status</>
        ) : (
          <>
            <p style = {{"color":"green" , "fontSize": "1.5em"}} >{this.state.res.message}</p>
            <p>{this.state.res.ping}</p>
          </>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
