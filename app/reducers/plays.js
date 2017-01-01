export default function play_action(state = [], action){
  const playerId = action.playerId;

  switch (action.type) {
    case 'ADD_PLAY':
      return [
        ...state,
        {
          person: action.players[playerId].person,
          point: action.point
        }
      ];
    case 'REMOVE_PLAY':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}
