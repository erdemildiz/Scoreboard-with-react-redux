export default function playerAction(state=[], action) {  
  const i = action.id;
  const doIt = action.doIt;

  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          person: action.person,
          point: 0
        }
      ];
    case 'UPDATE_PLAYER_POINT':
        let currentPoint = state[i].point;
        return [
          ...state.slice(0, i),
          Object.assign(state[i], { point: currentPoint >= 0 ? (doIt == 'inc' ?  currentPoint + action.point : currentPoint - action.point) : 0 }),
          ...state.slice(i + 1)
        ]
    case 'UPDATE_PLAYER_NAME':
      return [
        ...state.slice(0, i),
        Object.assign(state[i], { person: action.person }),
        ...state.slice(i + 1)
      ]
    case 'UPDATE_LOCAL_STORAGE':
      setLocalStorage(action.value ,action.key);
    default:
      return state;
  }
}


function setLocalStorage(value, key){
  if(window.localStorage.getItem(key) !== null){
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
