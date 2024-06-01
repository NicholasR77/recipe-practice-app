<template>
    <div class="p-fluid">
        <TabView>
            <TabPanel header="Recipe Details">
                <form @submit.prevent="addRecipe">
                    <div class="p-field">
                        <InputText id="recipeTitle" v-model="newRecipeTitle" placeholder="Recipe Title" />
                    </div>
                    <div class="p-field">
                        <Textarea id="recipeDescription" v-model="newRecipeDescription" placeholder="Recipe Description"
                            rows="4" />
                    </div>
                </form>
            </TabPanel>
            <TabPanel header="Recipe Steps">
                <div class="p-mt-4">
                    <div class="p-field">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">Add a New Step</span>
                            <InputText id="stepDescription" v-model="newStepDescription" placeholder="Step description"
                                @keyup.enter="addStep" />
                            <Button icon="pi pi-plus" class="p-button-secondary" @click="addStep"></Button>
                        </div>
                    </div>
                </div>

                <div v-if="recipeSteps.length > 0" class="p-mt-4">
                    <br><br>
                    <h3>Current Steps</h3>
                    <DataTable :value="recipeSteps" dragdrop dragdropScope="steps" @rowReorder="onRowReorder" :reorderableColumns="true">
                        <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
                        <Column field="description" headerStyle="width: 100%" :sortable="false">
                            {{ slotProps.data.description }}
                        </Column>
                        <Column :sortable="false">
                            <template #body="slotProps">
                                <Button icon="pi pi-times" class="p-button-danger"
                                    @click="removeStep(slotProps.rowIndex)"></Button>
                            </template>
                        </Column>
                    </DataTable>
                    <br><br>
                </div>
            </TabPanel>
        </TabView>
    </div>

    <br>
    <Message v-if="wasCreated" severity="success">Recipe Created Succesfully</Message>
    <Button type="submit" label="Add Recipe" icon="pi pi-check" class="p-mt-2" style="width: 10rem" @click="submitRecipe" :disabled="wasCreated"></Button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { watch } from 'vue';

import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Message from 'primevue/message';

import { useRecipeForm } from '../composables/useRecipeForm';

const REDIRECT_DELAY=2000;

const {
  newRecipeTitle,
  newRecipeDescription,
  newStepDescription,
  recipeSteps,
  addStep,
  removeStep,
  submitRecipe,
  wasCreated,
} = useRecipeForm();
const router = useRouter();

const onRowReorder = (event) => {
    recipeSteps.value = event.value;
};

watch(wasCreated, (val) => {
    if (val) {
        setTimeout(() => {
            router.push('/view')
        }, REDIRECT_DELAY);
    }
})
</script>

<style scoped>
/* Add your styles here */
</style>
