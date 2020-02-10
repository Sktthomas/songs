//We are making another index.js file due to being able to shorten the import path. Webpack will still be able to find it, due to it being the default name of a file

//select song action creator
 export const selectSong = (song) => { 
    //return an action, which is a JS object including a type and an optional payload
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};


//named export, allows us to export many different functions. We named the function export