<template>
  <main class="bg-[#1e2d42] min-h-screen">
    <TheHero> Recent Posts </TheHero>
    <BlogPostList />
    <TheFooter />
  </main>
</template>
<script>
import TheFooter from "../components/TheFooter";
export default {
  components: {TheFooter}
}
</script>
