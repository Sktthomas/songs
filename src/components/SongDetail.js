import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return <div>No song selected</div>
    }
    return( 
        <div>
            <h3>Details for song:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) =>{ //gathers the data we want from our state store

  return( {song: state.selectedSong } ) //The key and what we get returned from the state as a prop

}

export default connect(mapStateToProps) (SongDetail);