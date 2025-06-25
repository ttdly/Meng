<template>
  <site-nav/>
  <div class="max-w-3xl m-auto mt-30 cursor-default">
    <slot/>
  </div>
  <div id="foot" class="mb-20 mt-8">
    <USeparator class="py-3" icon="Logo"/>
    <Copyright class="max-w-3xl m-auto"/>
    <USeparator class="pt-3 pb-1"/>
    <div class="flex justify-center text-sm text-gray-200">
      build time {{ runtime.public.build.time.split("T")[0] }}.
      build version {{ runtime.public.build.commit }}.
      nuxt version {{ runtime.public.build.version.replace("^", "") }}
    </div>
  </div>
</template>

<script setup>
const runtime = useRuntimeConfig()
</script>