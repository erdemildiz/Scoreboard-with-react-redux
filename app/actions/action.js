
// Player
export function addPlayer(person){
  return {
    type: 'ADD_PLAYER',
    person: person,
    point: 0
  }
}

export function removePlayer(id){
  return {
    type: 'REMOVE_PLAYER',
    id: id
  }
}

export function updatePlayerPoint(id, point, doIt){
  return {
    type: 'UPDATE_PLAYER_POINT',
    id: id,
    doIt: doIt,
    point: point
  }
}

export function updatePlayerName(id, person){
  return {
    type: 'UPDATE_PLAYER_NAME',
    id: id,
    person: person
  }
}

export function addPoint(id, point){
  return {
    type: 'ADD_POINT',
    point: point
  }
}

export function removePoint(id, point){
  return {
    type: 'REMOVE_POINT',
    point: point
  }
}

//Play
export function addPlay(playerId, point, players){
  return {
    type: 'ADD_PLAY',
    playerId: playerId,
    point: point,
    players: players
  }
}

export function removePlay(id){  
  return {
    type: 'REMOVE_PLAY',
    id: id
  }
}

//Action
export function changeUpdateStatus(update, person, index){
  return {
    type: 'CHANGE_UPDATE_STATUS',
    update: update,
    person: person,
    index: index
  }
}

//localStorage
export function updateLocalStorage(value, key){
  return {
    type: 'UPDATE_LOCAL_STORAGE',
    value: value,
    key: key
  }
}
