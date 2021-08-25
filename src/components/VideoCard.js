import React from 'react';

class VideoCard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ui card" style={{width:"100%"}}>
                <div className="image">
                    <img src={this.props.thumb.medium.url} alt={this.props.thumb.default.url} />
                </div>
                <div className="ui content">
                    <div className="header">
                        {this.props.detail.title}
                    </div>
                    <div className="meta">
                        {this.props.detail.created}
                    </div>
                    <div className="description">
                        {this.props.detail.description}
                    </div>
                </div>
            </div>
        );
    }

}

export default VideoCard;