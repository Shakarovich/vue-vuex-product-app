<template>
  <div class="w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{meal.strMeal}}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal">
    <div class="grid grid-cols-1 md: grid-cols-3">
      <div>
        Category: {{meal.Category}}
        Weight: {{meal.strMeasure7}}
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted} from 'vue';
  import { useRoute } from 'vue-router';
  import axios from "axios";
  const route = useRoute()
  const meal = ref({});

  onMounted(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
      .then(({data}) => {

        meal.value = data[0] || {}
        console.log(data)
      })
      .catch((error) => {console.log(error)})
  })

</script>