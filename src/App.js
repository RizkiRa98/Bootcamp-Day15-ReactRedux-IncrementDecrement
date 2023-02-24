import React from "react";
//menyambungkan react komponen dengan redux store
import { connect } from "react-redux";

class App extends React.Component {
  // State increment
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT",
    });
  };
  // State decrement
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT",
    });
  };

  render() {
    return (
      <div
        className="App container mt-5 d-flex justify-content-center"
        style={{
          textAlign: "center",
        }}
      >
        <button
          onClick={this.decrement}
          className="btn btn-danger"
          style={{ marginRight: "50px" }}
        >
          -1
        </button>
        <h4 className="mt-5 display-1">{this.props.count}</h4>
        <button
          onClick={this.increment}
          className="btn btn-success"
          style={{ marginLeft: "50px" }}
        >
          +1
        </button>
      </div>
    );
  }
}

// Variable untuk menyimpan perhitungan yang dibutuhkan
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
