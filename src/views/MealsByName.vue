<template>
 <div class="p-8">
   <input type="text"
          v-model="keyword"
          class="rounded border-2 border-gray-200 w-full"
          placeholder="Search for meals"
          @change="searchMeals"
   />
   <div>{{meals}}</div>
 </div>
</template>


<script setup>
  import {ref} from 'vue'
  import {computed} from '@vue/reactivity'
  import store from "../store/index.js";

  const keyword = ref('')
  const meals = computed(() => store.state.searchedMeals)
  function searchMeals () {
    store.dispatch('searchMeals', keyword.value)
  }
</script>