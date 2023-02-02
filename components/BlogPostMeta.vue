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
  return new Date(props.date).toDateString()
})
</script>

<template>
  <div class="flex flex-col">
    <div class="">
      <span class="">{{ formattedDate }}</span>
      <span class="uppercase">{{ time }} min read</span>
    </div>
    <span v-for="tag in tags" class="flex">{{ tag }}</span>
  </div>
</template>

<style></style>
