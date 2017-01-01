import React from 'react';

export default React.createClass({
  render(){
    return(
      <div className='board-title'>
        <span>{this.props.leftText}</span>
        <span>{this.props.rightText}</span>
      </div>
    )
  }
});
