<template>
    <ul class="list-group col-md-4">
        <!-- for each video in videos make one instace of VideoListItem -->
        <!-- This declared a temp variable called "video" that we can use in the child component as a prop -->
       <VideoListItem 
            v-for="vid in videos"
            :video="vid"
            :key="vid.etag"
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>  
</template>

<script>
import VideoListItem from './VideoListItem'


export default {
    name: 'VideoList',
    components: {
        VideoListItem: VideoListItem
    },
    props: {
        // this component is going to expect a prop named vidoes of type Array. 
        // if type is not array, it will throw an error 
        videos: Array
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    }
};
</script>

<style>

</style>
