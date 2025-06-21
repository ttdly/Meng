<template>
  <template v-for="article in articles">
    <NuxtLink :to="article.path"> {{ article.title }}</NuxtLink>
  </template>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData('blog', () => queryCollection('articles').all());
useHead({
  title:"BóKè"
})
</script>