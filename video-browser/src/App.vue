<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo" />
            <!-- assign prop name of vidoes to the vidoes stored in data object-->
            <!-- v-bind:videos is the same thing as :videos -->
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
        
    </div>
</template>

<script>

import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
const API_KEY = "AIzaSyBboZ9p203pslr-AWOUdROFlUrTDj90TK8";

export default {
    name: 'App',
    components: {
        SearchBar: SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return {
            videos: [],
            selectedVideo: null
        };
    },
    methods: {
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                // recall you dont need to do this.data.videos to access the videos array
                // component will re render when a data property is updated
                this.videos = response.data.items;
            });
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }
};
</script>
