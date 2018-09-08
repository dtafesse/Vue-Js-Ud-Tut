<template>
    <ul>
        VideoList
        {{ videos.length }}
    </ul>  
</template>

<script>
export default {
    name: 'VideoList',
    props: {
        // this component is going to expect a prop named vidoes of type Array. 
        // if type is not array, it will throw an error 
        videos: Array
    }
};
</script>

<style>

</style>
