import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

// var mapStateToProps = state => {
//     return {
//         videos: handleSearchChange(state.videos)
//     }
// }

var mapDispatchToProps = dispatch => {
    return {
      handleSearchInputChange: q => {
        dispatch(handleVideoSearch(q))
      }
    }
}


var SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;

//Search React component
//handleSearchChange returns action obj (dispatch method)
