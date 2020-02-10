import React from 'react';
import SongList from './SongList'

const App = () => { //since we store data inside of redux, we don't need to make this a class based component
    return( 
    <div>
        <SongList/>
    </div>
    )
}

export default App