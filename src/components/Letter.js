import React, { Component } from 'react';

class Letter extends Component {
  static machineStates = {
    empty: {
      on: {
        SET_INCORRECT: 'incorrect',
        SET_CORRECT: 'correct'
      }
    },
    incorrect: {
      on: {
        DELETE: 'empty'
      }
    },
    correct: {
      on: {
        DELETE: 'empty'
      }
    }
  }

  onChange = (e) => {
    console.log(this)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.value} />
      </div>
    );
  }
}

export default Letter;
