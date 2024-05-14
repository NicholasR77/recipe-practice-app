<template>
    <div><p>{{ title }}</p></div>
    <div>Steps</div>

</template>

<script setup>
    import { ref } from 'vue';
    import { defineProps } from 'vue';
    const props = defineProps(['recipeData']);
    const title = ref(props.recipeData.title);
</script>

<style scoped>
</style>