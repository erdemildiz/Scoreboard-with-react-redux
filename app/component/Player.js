import React from 'react';

export default React.createClass({
  addPoint(point){
    this.props.updatePlayerPoint(this.props.index, point, 'inc');
    this.props.addPlay(this.props.index, point, this.props.players);
    setTimeout(() => this.props.updateLocalStorage(this.props.players, 'players'), 600);
    setTimeout(() => this.props.updateLocalStorage(this.props.plays, 'plays'), 600);
  },
  updateStatus(){
    this.props.changeUpdateStatus(true, this.props.playerName, this.props.index);
    setTimeout(() => this.props.updateLocalStorage(this.props.action, 'action'), 600);
  },
  render(){
    return(
      <section className='player'>
        <div className='player-info'>
          <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.updateStatus}></i> { this.props.playerName }
        </div>
        <div className='points'>
          <span onClick={ this.addPoint.bind(null, 2) }>2pt</span>
          <span onClick={ this.addPoint.bind(null, 3) }>3pt</span>
          <label>{ this.props.point }</label>
        </div>
      </section>
    )
  }
});
