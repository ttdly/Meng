<template>
  <div
      class="flex flex-row gap-4 items-center justify-between
    mt-3 mx-6 text-gray-400 hover:text-default">
    <div>
      <UIcon name="Logo" class="size-6" />
    </div>
    <div class="shrink-0 flex flex-row gap-2" >
      <template v-for="(item, index) in appConfig.sitePage" :key="index">
        <NuxtLink :to="item.link" class="hover:underline">{{ item.title }}</NuxtLink>
      </template>
    </div>
  </div>

</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>