<script setup>

</script>

<template>
<!--  <nav class="navbar">-->
<!--    <div class="container">-->
<!--      <div class="navbar-brand">-->
<!--        <nuxt-link to="/" class="navbar-item has-text-weight-bold is-size-5">-->

<!--        </nuxt-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
  <nav class="bg-slate-900">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex w-full justify-between items-end">
          <!--         logo -->
          <div>
            <NuxtLink to="/" class="text-gray-700">
              <span class="font-body font-black text-2xl text-gray-200 italic uppercase">Dawesy<span class="text-emerald-400 text-5xl">.</span>dev</span>
            </NuxtLink>
          </div>

          <!--         central nav -->
          <div class="hidden md:flex flex justify-end items-center space-x-4 font-body text-slate-300">
            <NuxtLink to="/" class="hover:text-emerald-400 hover:bg-slate-800 rounded-md px-3 py-1.5">Home</NuxtLink>
            <NuxtLink to="/" class="hover:text-emerald-400 hover:bg-slate-800 rounded-md px-3 py-1.5">Blog</NuxtLink>
            <NuxtLink to="/about" class="hover:text-emerald-400 hover:bg-slate-800 rounded-md px-3 py-1.5">About</NuxtLink>
            <button class="hover:text-emerald-400 bg-slate-800 rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <!--       secondary nav -->
<!--        <div class="hidden md:flex flex items-center space-x-1">-->
<!--          <a href="#" class="py-5 px-3 text-gray-300 hover:text-gray-400">Login</a>-->
<!--          <a href="#" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded transition duration-300">Signup</a>-->
<!--        </div>-->

        <!--       mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!--   mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
    </div>
  </nav>
</template>

<style></style>
