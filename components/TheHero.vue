<script setup></script>

<template>
  <section class="bg-hero bg-cover bg-slate-900 h-96">
    <div class="grid place-items-center w-full pt-16">
      <div class="font-body text-gray-200">
        <h1 class="text-2xl">
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
