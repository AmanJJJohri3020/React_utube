import React from 'react';
import VideoCard from './VideoCard';
import VideoDetail from './VideoDetail';


class VideosList extends React.Component {

    state = {selectedVideo : this.props.latest};

    constructor(props){
        super(props);
    }

    onVideoClick = (video) => {
        this.setState({selectedVideo : video});
    }

    componentDidMount(){
        console.log("Mounted");
        
    }

    render(){
        return(
            <div>
                <div className="ui equal width grid">
                    <div className="row">
                        <div className="column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            {
                                this.props.videoList.map((thumb) => {
                                    return (
                                        <div className="ui segment" onClick={() => this.onVideoClick(thumb)} key={thumb.id.videoId}>
                                            <VideoCard detail={thumb.snippet} thumb={thumb.snippet.thumbnails} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideosList;