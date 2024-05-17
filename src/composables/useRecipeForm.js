import { ref } from 'vue';
import axios from 'axios';

export function useRecipeForm() {
  const newRecipeTitle = ref('');
  const newRecipeDescription = ref('');
  const newStepDescription = ref('');
  const recipeSteps = ref([]);

  const addStep = () => {
    if (newStepDescription.value.trim()) {
      recipeSteps.value.push({ description: newStepDescription.value });
      newStepDescription.value = '';
    }
  };

  const removeStep = (index) => {
    recipeSteps.value.splice(index, 1);
  };

  const submitRecipe = async () => {
    const url = `${import.meta.env.VITE_RECIPE_SERVICE_BASE_URL}/recipes`;

    try {
      const response = await axios.post(url, {
        title: newRecipeTitle.value,
        description: newRecipeDescription.value,
        steps: recipeSteps.value,
      });

  
    } catch (error) {
    }
  };

  return {
    newRecipeTitle,
    newRecipeDescription,
    newStepDescription,
    recipeSteps,
    addStep,
    removeStep,
    submitRecipe,
  };
}
