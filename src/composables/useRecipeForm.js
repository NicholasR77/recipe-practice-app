import { ref } from 'vue';
import axios from 'axios';

export function useRecipeForm() {
  const newRecipeTitle = ref('');
  const newRecipeDescription = ref('');
  const newStepDescription = ref('');
  const recipeSteps = ref([]);
  const wasCreated = ref(false);

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
     
      if (response.status === 201) {
        wasCreated.value = true;
      }
  
    } catch (error) {
      console.error('Something happened: ' + error);
    }
  };

  return {
    newRecipeTitle,
    newRecipeDescription,
    newStepDescription,
    recipeSteps,
    wasCreated,
    addStep,
    removeStep,
    submitRecipe,
  };
}
