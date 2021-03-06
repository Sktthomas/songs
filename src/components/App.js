import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail';

const App = () => { //since we store data inside of redux, we don't need to make this a class based component
    return( 
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
               <SongList/>
            </div>
            <div className="column eigth wide">
                <SongDetail/>
            </div>
        </div>
    </div>
    )
}

export default App