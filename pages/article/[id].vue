<template>
  <site-nav/>
  <div class="article-page">
    
    <header>
      <h1 v-if="article">{{ article.title }}</h1>
      <USeparator class="py-3"/>
    </header>
 
    <main v-if="article">
      <ContentRenderer :value="article" class="article"/>
      <USeparator icon="Logo" class="py-3" />
      <Copyright/>
    </main>

    <div v-else class="not-found">
      <h2>文章未找到</h2>
      <p>请检查链接是否正确</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const { data: article } = await useAsyncData(`article-${route.params.id}`, () => {
  return queryCollection('articles').path(route.path).first()
})
</script>

<style>
@reference "../../assets/css/main.css";

.article-page {
  @apply max-w-3xl mx-auto my-30
}

h1 {
  @apply text-3xl font-extrabold mt-5;
}

.article p {
  @apply mt-3 text-justify;
}

.article h2 {
  @apply text-2xl mt-5 mb-1.5 font-bold;
}

.article h3,h4,h5,h6 {
  @apply font-medium
}

.article p code {
  @apply text-sm px-1 py-0.5 rounded-sm 
  bg-light-bg-inline-code;
}

.article ul {
  @apply list-disc list-outside
}

.article ul[class*="contains-task-list"] {
  @apply list-none
}

.article ul ul{
  @apply list-disc list-inside
}

.article ol {
  @apply list-decimal list-outside
}

.article ol ol {
  @apply list-decimal list-inside
}

.article pre[class*="language-"]{
  @apply text-sm leading-4 bg-light-bg-code px-3 py-5 rounded-sm mt-3;
}

.article :not(h1, h2, h3, h4, h5, h6) > a {
  @apply text-light-link;
}

.article table{
  @apply border-t-2 border-b-2 my-1.5 leading-10;
}

.article table thead{
  @apply border-b-1;
}

.article table th, td{
  @apply px-4
}

.article blockquote {
  @apply bg-gray-50 py-3 pl-1.5 border-l-6 border-l-gray-300 mt-3;
}

.article blockquote p {
  @apply m-0;
}

.article hr {
  @apply text-gray-500 my-2;
}

.article section[class*="footnotes"]{
  @apply text-sm mt-8 text-gray-400;
}
</style>