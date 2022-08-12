import React from 'react'
import SearchBar from './SearchBar';
import yt from '../apis/yt';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
    state = { videos: [], selectedVideo:''};
    onTermSubmit = async term => {
        const response = await yt.get('/search', { params: { q: term } });

        this.setState({ videos: response.data.items });
    }
onVideoSelect= video =>{
    this.setState({selectedVideo: video});
}

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>

            </div>
        )
    }
}

export default App;