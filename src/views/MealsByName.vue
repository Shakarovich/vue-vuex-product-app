<template>
 <div class="p-8 pb-0">
   <input type="text"
          v-model="keyword"
          class="rounded border-2 border-gray-200 w-full"
          placeholder="Search for meals"
          @change="searchMeals"
   />
 </div>
   <div  class="grid grid-cols-1 md:grid-cols-3 gap-3">
     <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover"/>
       <div class="px-3">
         <h3 class="px-3 py-2 font-bold">{{meal.strMeal}}</h3>
         <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dicta?</p>
         <div class=" py-2 flex justify-between">
           <a :href="meal.strYouTube" target="_blank" class="px-3 py-2  rounded border-2 border-red-500 text-white bg-red-500 hover:bg-red-700 hover:text-white  transition-colors">YouTube</a>
           <router-view to="/">
             <a :href="meal.strYoutube" target="_blank" class="px-3 py-2  rounded border-2 border-purple-600 bg-purple-500 text-white hover:bg-purple-700 hover:text-white  transition-colors">View</a>
           </router-view>
         </div>
       </div>
     </div>
   </div>
</template>


<script setup>
  import {ref, onMounted} from 'vue';
  import {computed} from '@vue/reactivity';
  import store from "../store/index.js";
  import {useRoute} from 'vue-router';


  const route = useRoute()
  const keyword = ref('')
  const meals = computed(() => store.state.searchedMeals)
  function searchMeals () {
    store.dispatch('searchMeals', keyword.value)
  }
    onMounted(() => {
      keyword.value = route.params.name

    })

</script>