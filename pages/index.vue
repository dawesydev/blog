<template>
  <main class="bg-slate-900 min-h-screen">
    <TheHero>Recent posts</TheHero>
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
