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
  <nav class="bg-gray-800">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--         logo -->
          <div>
            <NuxtLink to="/" class="flex items-center py-5 px-2 text-gray-700">
              <span class="font-bold text-gray-200">dawesy.dev</span>
            </NuxtLink>
          </div>

          <!--         primary nav -->
          <div class="hidden md:flex flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-300 hover:text-gray-400">Blog</a>
            <a href="#" class="py-5 px-3 text-gray-300 hover:text-gray-400">About</a>
          </div>
        </div>

        <!--       secondary nav -->
        <div class="hidden md:flex flex items-center space-x-1">
          <a href="#" class="py-5 px-3 text-gray-300 hover:text-gray-400">Login</a>
          <a href="#" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded transition duration-300">Signup</a>
        </div>

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
