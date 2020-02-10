import {combineReducers} from 'redux';

const songsReducer = () => { //contains the fixed list of songs
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I want it that way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => { //when we start up, our selected song is considered to be null.
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    } 

    return selectedSong;
}

export default combineReducers({ //combined set of reducers
    songs: songsReducer,
    selectedSong: selectedSongReducer
})