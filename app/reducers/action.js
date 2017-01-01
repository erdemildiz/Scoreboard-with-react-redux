export default function actionReducer(state=[], action){
  switch (action.type) {
    case 'CHANGE_UPDATE_STATUS':
      return Object.assign({}, state, {
        update: action.update,
        person: action.person,
        index: action.index
      });
    default:
      return state;
  }
  return state;
}
