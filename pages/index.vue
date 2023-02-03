<template>
  <main class="bg-slate-900 min-h-screen">
    <TheHero>
        <span class="text-gray-50">Hi <span>👋🏻</span> I'm Dan, and welcome to my blog.</span>
        <span class="text-gray-400"> Here, I share my experiences as a frontend developer and everything I'm learning about Vue, TypeScript, Flutter, and testing.</span>
    </TheHero>
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
