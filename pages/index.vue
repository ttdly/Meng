<template>
  <div id="short-info-card" class="h-[22.25em] w-[36em] px-6 pt-4 pb-8 box-border cursor-default 
  mb-[100px]">
    <!-- top -->
    <div id="base-info" class="flex justify-between gap-4">
      <!-- left -->
      <div class="">
        <UAvatar :src="'https://avatars.githubusercontent.com/u/108915955?v=4&size=64'" size="3xl" />
      </div>
      <!-- right -->
      <div class="grow">
        <p>秃头灯笼鱼</p>
        <p class="opacity-70"><a href="github.com/ttdly" class="transition-colors hover:text-primary">@ttdly</a></p>

      </div>
    </div>
    <USeparator class="py-3" />
    <!-- mid -->
    <div class="grow shrink-0">
      <p>你好，这是我的个人网站</p>
      <p>我是一名编程以及开源爱好者</p>
      <p>C，C++，Java，Python，Rust，C# 以及 Web 编程均有过接触</p>
      <p>目前在探索网络安全知识</p>
      <p class="flex items-center flex-row">如果需要联系我，可以给我发一封邮件
        <a href="mailto:ttdlyu@163.com" class="transition-all duration-200 hover:text-primary flex ml-0.5">
          <UIcon name="i-simple-icons-maildotru" size="" />
        </a>
      </p>
      <p>访问这个网站：<template v-for="link in links">
          <a :href="link.link" class="underline transition-colors hover:text-primary ">{{ link.title }}</a>
        </template>
      </p>

    </div>
    <!-- bottom -->
    <USeparator icon="Logo" class="py-3" />
    <p class="text-gray-300 text-sm">Copyright © 2023-2025 ttdly. All rights reserved.
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
      class="underline transition-colors hover:text-default">CC BY-NC-SA 4.0</a>
    </p>
    <!-- <USeparator class="bottom-5">
      <Logo class="text-gray-100 w-[20px] h-[20px]"/>
    </USeparator> -->
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    title:"关于",
    link:"www.baidu.com"
  }
]

</script>

<style>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>