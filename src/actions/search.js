import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(data){
      dispatch({
        type: "HANDLE_VIDEO_SEARCH",
        payload: data
      })
    })
  }
};

export default handleVideoSearch;
