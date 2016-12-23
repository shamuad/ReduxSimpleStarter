import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAgyrZfazd3ggB2teEmm671PIcVwemg_mE';



//Create a new component. This component shoud produce 
//some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo : null
         };

        YTSearch({key: API_KEY, term: 'skiing'}, (videos) => {
            this.setState({ 
                videos: videos,
                querySelector: videos[0]
             });
            //this.setState({ videos: videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>                
        );
    }
}

//take this component's generated HTML and put it
//on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


