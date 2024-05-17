<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (!router.currentRoute.value.path) {
    router.push('/');
  }
});
</script>

<style scoped>
.app {
  padding: 20px;
}
</style>