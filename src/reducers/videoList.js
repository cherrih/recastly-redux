import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  var newState = [];
  switch(action.type) {
    case "CHANGE_VIDEO_LIST":
      newState = action.videos;
      break;
  }
  return newState;
  
};

export default videoListReducer;
