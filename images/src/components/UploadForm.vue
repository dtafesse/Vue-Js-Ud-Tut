<template>
    <div class="dropper">
        <!-- 
            $ tells Vue, dont look for the event object in the component, 
            take the event object that comes from triggering the change event 
            and only pass the event.target.files property to the 'uploadImages' 
            action. 
         -->
        <input 
            type="file" @change="uploadImages($event.target.files)"
            multiple accept="image/*"
        />
        <span>Drag files here!</span>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',
    methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
    .dropper {
        /* width: 80vh; */
        height: 30vh;
        border: 1px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
    .dropper:hover {
        background-color: #eee;
    }
</style>

