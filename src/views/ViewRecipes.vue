<template>
    <div>
        <h2>View Recipes</h2>
        <div v-for="recipe in recipes" :key="recipe.title">
            <p>{{ recipe.title }}</p>
        </div>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const recipes = ref([
    { title: 'Recipe 1' },
    { title: 'Recipe 2' },
    // Add more recipes as needed
  ]);
  </script>
  