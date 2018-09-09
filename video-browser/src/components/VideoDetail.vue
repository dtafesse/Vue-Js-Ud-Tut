<template>
    <!-- 
        v-if will look at the value of video(reference to the video prop), 
        if it finds a "falsy" view, then Vue will not render this div or 
        anthing inside of this div. recall "video" prop initially is set 
        to null by the parent component
    -->
    <div v-if="video" class="col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe :src="videoUrl" class="embed-responsive-item" />
        </div>

        <div class="details">
              <h4>{{ video.snippet.title }}</h4>
              <p>{{ video.snippet.description }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        video: Object
    },
    computed: {
        videoUrl() {
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
};
</script>

<style scoped>
    .details {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>

