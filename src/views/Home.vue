<template>
  <div class="flex flex-col p-8">

    <div class="flex gap-2 justify-center mt-2">
      <router-link :to="{name: 'byLetter', params: { letter }}" v-for="letter of letters" :key="letter">
        {{letter}}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import store from '../store';
import axiosClient from "../../axiosClient.js";
import axios from 'axios';

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
  const ingredients = ref([])
  onMounted(async( ) => {
   axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
     .then((response) => {
       console.log(response)
       ingredients.value = response.data
     })
     .catch((error) => {console.log(error)})
  })

</script>

