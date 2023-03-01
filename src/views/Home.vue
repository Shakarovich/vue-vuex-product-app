<template>
  <pre>{{meals}}</pre>
</template>

<script setup>
import {computed} from 'vue';
import store from '../store';
  const meals = copmuted(() => store.state.meals)
</script>

