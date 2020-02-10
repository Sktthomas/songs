import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
    render() {
        console.log(this.props)
        return <div>SongList</div>
    }
}

const mapStateToProps = (state) => { //takes the state inside of our store, and make it show up as props inside our component
    return {song: state.songs} //the props we return to our connect component????
}

export default connect(mapStateToProps) (SongList); //connect returns a function, where the second set of parentheses invokes the function????