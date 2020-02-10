import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component {



    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {    
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => { //takes the state inside of our store, and make it show up as props inside our component
    console.log(state)
    return {songs: state.songs} //the props we return to our connect component????
}

export default connect(mapStateToProps, {
    selectSong: selectSong
}) (SongList); //connect returns a function, where the second set of parentheses invokes the function????