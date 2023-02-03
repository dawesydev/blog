<script setup></script>

<template>
  <section class="bg-slate-900 h-96 grid place-items-center">
    <div class="max-w-4xl mx-auto pt-16 px-4">
      <div class="font-body text-gray-200 w-3/4 ">
        <h1 class="text-3xl font-medium tracking-wide leading-relaxed">
          <slot />
        </h1>
        <slot name="subtitle" />
      </div>
    </div>
  </section>
</template>

<style>
.hero-body {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
</style>
