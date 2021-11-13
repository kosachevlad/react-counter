import './App.css';
import {connect} from 'react-redux'
import React, { Component } from 'react';
import Counter from './Counter'
import { add, sub, addNumber, asyncAdd } from './redux/actions/actions';

class App extends Component {
  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Counter <strong>{this.props.counter}</strong></h2>
        <hr/>
        <div className="actions">
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Sub 1</button>
        </div>

        <div className="actions">
          <button onClick={() => this.props.onAddNumber(15)}>Add</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Sub</button>
        </div>

        <div className="actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Add async 100</button>
        </div>

        <Counter />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
