<template>
    <div>
        <!-- v-on:input is the same as @input -->
        <input @input="onInput"/>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
      onInput: function(event) {
          // emit an event to parent component(App) named 'termChange' and pass along input text value 
          this.$emit('termChange', event.target.value); 
      }
  }
};
</script>

<style>

</style>
