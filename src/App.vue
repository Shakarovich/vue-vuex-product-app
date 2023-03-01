<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 hover:bg-purple-100">
        Home
      </router-link>
      <div>
        <div class="flex items-center gap-2">
          <router-link to="/" class="inline-flex items-center h-full px-5 hover:bg-purple-100" >
            Search Meals
          </router-link>
          <router-link to="/" class="inline-flex items-center h-full px-5 hover:bg-purple-100">
            Meals by letter
          </router-link>
          <router-link to="/" class="inline-flex items-center h-full px-5 hover:bg-purple-100">
            Meals by gradients
          </router-link>
        </div>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
