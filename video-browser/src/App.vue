<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <!-- assign prop name of vidoes to the vidoes stored in data object-->
        <!-- v-bind:videos is the same thing as :videos -->
        <VideoList :videos="videos"></VideoList>
        
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = "AIzaSyBboZ9p203pslr-AWOUdROFlUrTDj90TK8";

export default {
    name: 'App',
    components: {
        SearchBar: SearchBar,
        VideoList: VideoList
    },
    data() {
        return {
            videos: []
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
        }
    }
};
</script>
