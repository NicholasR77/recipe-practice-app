<template>
<div>
    <h2>Create a New Recipe</h2>
    <form @submit.prevent="addRecipe">
        <input v-model="newRecipeTitle" placeholder="Recipe Title" />
        <button type="submit">Add Recipe</button>
    </form>
</div>
</template>
  
<script setup>
import { ref } from 'vue';

const newRecipeTitle = ref('');

const addRecipe = () => {
// Logic to add a new recipe
alert(`Recipe "${newRecipeTitle.value}" added!`);
newRecipeTitle.value = '';
};
</script>
