<template>
  <NuxtLayout>
    <div class="text-sm flex justify-between mb-8 text-gray-300">
      <span>创建于</span>
      <span>更新于</span>
    </div>
    <div v-for="(article, index) in articles" :key="index" class="pb-5">
      <NuxtLink :to="article.path" class="text-xl hover:underline">{{ article.title }}</NuxtLink>
      <div v-if="article.labels.length > 0" class="text-sm text-gray-400">
        <template v-for="label in article.labels" :key="label">
          <span class="hover:underline hover:text-default">#{{ label }}</span>
        </template>
      </div>
      <div class="text-sm flex justify-between">
        <span>{{ article.create_at.split("T")[0] }}</span>
        <span v-if="article.update_at">{{ article.update_at.split("T")[0] }}</span>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const {data: articles} = await useAsyncData('blog',
    () => queryCollection('articles')
        .where("locked", "=", false)
        .order("create_at", "DESC")
        .all()
);
useHead({
  title: "BóKè"
})

definePageMeta({
  layout: "common"
})
</script>