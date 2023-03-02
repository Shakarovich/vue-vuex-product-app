<template>
 <div class="p-8">
   <input type="text"
          v-model="keyword"
          class="rounded border-2 border-gray-200 w-full"
          placeholder="Search for meals"
          @change="searchMeals"
   />
 </div>
   <div  class="grid grid-cols-1 md:grid-cols-3 gap-3">
     <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
       <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-2xl"/>
       <h3 class="px-3 py-2 font-semibold">{{meal.strMeal}}</h3>
       <div class="px-3 py-2">
         <a :href="meal.strYouTube" target="_blank">YouTube</a>
         <router-view href="/">View</router-view>
       </div>
     </div>
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