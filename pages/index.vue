<template>
  <div id="short-info-card" class="h-[22.25em] w-[36em] px-6 pt-4 pb-8 box-border cursor-default 
  mb-[10vh] mt-[20vh] mx-auto">
    <!-- top -->
    <div id="base-info" class="flex justify-between gap-4">
      <!-- left -->
      <div class="">
        <UAvatar :src="'https://avatars.githubusercontent.com/u/108915955?v=4&size=64'" size="3xl" />
      </div>
      <!-- right -->
      <div class="grow">
        <p>秃头灯笼鱼</p>
        <p class="opacity-70"><a href="https://github.com/ttdly">@ttdly</a>
        </p>

      </div>
    </div>
    <USeparator class="py-3" />
    <!-- mid -->
    <div class="grow shrink-0" style="line-height: 1.8em;">
      <p>你好，这是我的个人网站</p>
      <p>我是一名编程以及开源爱好者</p>
      <p>C，C++，Java，Python，Rust，C# 以及 Web 编程均有过接触</p>
      <p>目前正在学习网络安全知识</p>
      <p>如果需要联系我，可以给我发送一封<a href="mailto:ttdlyu@163.com" class="fat-link" >邮件</a></p>
      <p>网站目前有页面：<template v-for="(link, index) in links" :key="link">
          <a :href="link.link" class="fat-link">{{ link.title }}</a><span v-if="index < links.length - 1">|</span>
        </template>
      </p>

    </div>
    <!-- bottom -->
    <USeparator icon="Logo" class="py-3" />
    <div class="text-gray-300 text-sm">
      <p> Copyright © 2023-2025 ttdly. All rights reserved.
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="thin-link">CC BY-NC-SA 4.0</a>
      </p>
      <p>Powered by<a href="https://nuxt.com" target="_blank" class="thin-link">NUXTJS</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    title: "关于",
    link: "/about"
  },
  {
    title: "Blog",
    link: "/blog"
  }
]

</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  gap: 1px;
}

.thin-link{
  text-decoration: underline;
  transition: color .2s;
}

.thin-link:hover{
  color: var(--text-color-default);
}

.fat-link {
  position: relative;
  transition: color .2s;
}

.fat-link:hover{
  color: var(--color-primary-50);
}

.fat-link::after {
  content: '';
  position: absolute;
  bottom: 5px;
  right: -2px;
  left: -2px;
  display: block;
  height: 10px;
  background-color: var(--color-primary-200);
  z-index: -10;
  transition: all .2s;
}

.fat-link:hover::after{
  bottom: 2px;
  height: 1.5em;
  border-radius: 4px;
  background-color: var(--color-primary);
}

</style>