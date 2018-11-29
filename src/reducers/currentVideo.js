import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  var newState = {};
  switch(action.type) {
    case "CHANGE_VIDEO":
      newState = action.video;
      break;
    default: 
      newState = state;
  }
  return newState;
};

export default currentVideoReducer;
