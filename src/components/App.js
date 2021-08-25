import React from 'react';
import Searchbar from './Searchbar';
import VideosList from './VideosList';
import youtube from '../API/youtube';


class App extends React.Component{

    state = {videoCount : 0,videos : []};

    videoSearchAPI = async term => {
        
        var snippets = await youtube.get(
            '/search',
            {
                params : {
                    q:term
                }
            }
        );
        
        this.setState({videoCount : snippets.data.items.length, videos : snippets.data.items, displayVideo : snippets.data.items[0]});
        
    }

    render(){
        return(
            <div>
                <div className="ui container">
                    <Searchbar whenSubmitted={this.videoSearchAPI} />
                    {`${this.state.videoCount} total videos`}
                </div>
                <div className="ui container">
                    {this.state.videoCount > 0 ? <VideosList videoList={this.state.videos} latest={this.state.displayVideo} /> : ''}
                </div>
            </div>
        );
    }
}

export default App;