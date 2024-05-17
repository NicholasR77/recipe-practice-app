<template>
    <div>
        <h2>Create a New Recipe</h2>
    <RecipeForm />
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import RecipeForm from '../components/RecipeForm.vue';

const newRecipeTitle = ref('');

const addRecipe = () => {
// Logic to add a new recipe
alert(`Recipe "${newRecipeTitle.value}" added!`);
newRecipeTitle.value = '';
};
</script>
