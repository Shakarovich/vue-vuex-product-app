<template>
  <div class="flex flex-col p-8">
    <input type="text"  class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals"/>
    <div class="flex gap-2 justify-center mt-2">
      <router-link :to="{name: 'byLetter', params: { letter }}" v-for="letter of letters" :key="letter">
        {{letter}}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from 'vue';
import store from '../store';
import axiosClient from "../../axiosClient.js";
import axios from 'axios';

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

  onMounted(async( ) => {
   axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
     .then((response) => {console.log(response)})
     .catch((error) => {console.log(error)})
  })

</script>

