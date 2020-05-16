import React, { Component } from 'react';

import Letter from './Letter'

class Word extends Component {
  render() {
  	console.log(this.props)
    return (
      <div>
      	{this.props.value.split('').map(letter =>
      		<Letter expected={letter} />
      	)}
      </div>
    );
  }
}

export default Word;
