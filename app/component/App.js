import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreater from '../actions/action';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    players: state.players,
    plays: state.plays,
    action: state.action
  }
}

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators(actionCreater, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProp)(Main);

export default App;
