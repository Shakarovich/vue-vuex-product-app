<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute()
  const refs = ref({});

</script>