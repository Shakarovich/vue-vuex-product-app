<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<script>
  import {ref, onMounted} from 'vue';
  import { useRoute } from 'vue-router';
  import axios from "axios";
  const route = useRoute()
  const meal = ref({});

  onMounted(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
      .then(({data}) => {
        debugger;
        meal.value = data
        console.log(data)
      })
      .catch((error) => {console.log(error)})
  })

</script>