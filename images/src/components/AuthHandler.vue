<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        // window.location.hash -> response string attached to 'oauth2/callback#.....'
        this.finalizeLogin(window.location.hash);
    },
};
</script>
