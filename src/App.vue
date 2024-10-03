<script setup lang="ts">
import converter from './components/eachToKG.vue';
import convertTest from './components/convertTest.vue';
</script>

<template>
  <div class="container">
    <converter></converter>
    <convert-test class="mt-4"></convert-test>
  </div>
</template>
<style scoped>
.container {
    margin-top: 20px;
}
</style>
