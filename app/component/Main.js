import React from 'react';
require('../style/style.scss');
//components
import Header from './Header';
import Player from './Player';
import Play from './Play';

export default React.createClass({

  getPlayers(){
    return this.props.players.map((value, i) => (value.person !== undefined ? <Player key={i} playerName={value.person} {...this.props} point={value.point}  index={i}/> : false));
  },

  getPlays(){
    let plays = this.props.plays.map((value, i) => (value.person !== undefined ? <Play key={i} {...this.props} playerName={value.person} playerId={value.playerId} point={value.point} index={i} /> : false));
    return plays.reverse();
  },

  getTotal(){
    let total = 0;
    this.props.players.map((value) => total += value.point);
    return total;
  },

  addOnePlayer(e){
    e.preventDefault();
    const playerName = this.refs.player.value;
    if(playerName !== ''){
      this.props.addPlayer(playerName, () => console.log('callback'));
      setTimeout(() => this.props.updateLocalStorage(this.props.players, 'players'), 600);
      this.refs.playerForm.reset();
    } else{
      alert('Please enter player');
    }
  },

  editOnePlayer(e){
    e.preventDefault();
    const { index } = this.props.action;
    const playerName = this.refs.player.value;
    if(playerName !== '' && index !== null){
      this.props.updatePlayerName(index, playerName);
      this.props.changeUpdateStatus(false, null, null);
      setTimeout(() => this.props.updateLocalStorage(this.props.players, 'players'), 600);
      setTimeout(() => this.props.updateLocalStorage(this.props.action, 'action'), 600);
      this.refs.player.value = '';
    } else {
      alert('Please enter player');
    }
  },

  componentWillReceiveProps(nextProps){
      if(nextProps.action.update && nextProps.action.person !== null){
        this.refs.player.value = nextProps.action.person.trim();
      }
  },

  render(){
    return(
      <div>
        <div className='wrapper'>
          <h2 className='board-main-title'>Score Keeper</h2>
          <Header leftText='Name' rightText='Points' />
          { this.getPlayers() }
          <div className='board-total'> <h3>Total</h3> <span>{ this.getTotal() }</span></div>
          <form ref='playerForm' onSubmit={ this.props.action.update  ? this.editOnePlayer : this.addOnePlayer } >
            <div className='board-add-edit'>
              <input type='text' placeholder='Add/Edit Player' ref='player' />
              <button type='submit' id='save-btn'>{ this.props.action.update ? 'Update' : 'Save' }</button>
              <button type='reset' id='cancel-btn'>Cancel</button>
            </div>
          </form>
          <Header leftText='Player' rightText='Points' />
          { this.getPlays() }
        </div>
      </div>
    );
  }
});
