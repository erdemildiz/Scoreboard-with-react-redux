import { combineReducers } from 'redux';

import players from './players';
import plays from './plays';
import action from './action';

const Reducers = combineReducers({
  players: players,
  plays: plays,
  action: action
});

export default Reducers;
