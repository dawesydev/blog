<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,

  }
})

const formattedDate = computed(() => {
  return new Date(props.date).toDateString().slice(-11)
})
</script>

<template>
  <div class="grid grid-rows-2 grid-cols-3 gap-2 w-3/4">
    <div class="row-start-1 col-span-3 flex justify-between items-end text-xs uppercase text-slate-400">
      <span class="">{{ formattedDate }}</span>
      <span class="">{{ time }} min read</span>
    </div>
    <div v-for="tag in tags" class="row-start-2 border border-slate-700 flex justify-center items-center bg-slate-700 font-semibold tracking-wide text-xs text-slate-400 rounded-md px-3 py-1 hover:bg-emerald-400 hover:text-slate-900 hover:border hover:border-emerald-400">
      <NuxtLink to="/" class="">
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
