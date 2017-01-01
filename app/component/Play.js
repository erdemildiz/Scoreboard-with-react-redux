import React from 'react';

export default React.createClass({
  removePlay(){
    this.props.removePlay(this.props.index);
    this.props.updatePlayerPoint(this.props.playerId, this.props.point, 'dec');
    setTimeout(() => this.props.updateLocalStorage(this.props.plays, 'plays'), 600);
  },
  render(){
    return(
      <section className='play'>
        <span><i className="fa fa-times" aria-hidden="true" onClick={ this.removePlay }></i> { this.props.playerName }</span>
        <span>{ this.props.point }</span>
      </section>
    )
  }
});
