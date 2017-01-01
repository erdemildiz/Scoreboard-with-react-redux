import { createStore } from 'redux';
import reducer from './reducers/index';

import Players from './stores/players';
import Plays from './stores/plays';

setLocalStorage(Players, 'players');
setLocalStorage(Plays, 'plays');
setLocalStorage({ update: false, index: null, person: null }, 'action');

function setLocalStorage(value, key){
  if(window.localStorage.getItem(key) == null){
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

const states = {
  players: JSON.parse(window.localStorage.getItem('players')),
  plays: JSON.parse(window.localStorage.getItem('plays')),
  action: JSON.parse(window.localStorage.getItem('action'))
}

const store = createStore(reducer, states);

export default store;
