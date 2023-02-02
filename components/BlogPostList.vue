<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})

</script>

<template>
  <div class="max-w-5xl mx-auto">
    <section class="flex justify-center">
      <div class="min-h-fit grid gap-4 font-body">
        <div v-for="blogPost in blogPostList" :key="blogPost._path" class="p-4 border border-blue-400">
          <NuxtLink :to="blogPost._path">
            <section class="">
              <div class="">
                <div class="text-gray-200">
                  <h3 class="font-medium">
                    {{ blogPost.title }}
                  </h3>
                  <BlogPostMeta :author="blogPost.author" :date="blogPost.dates.published" />
                </div>
              </div>
              <div class="text-gray-400">
                <div class="">
                  {{ blogPost.description }}
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}

.blog-post-card .card-content {
  padding: 1rem;
}

.blog-post-card .title {
  margin-bottom: 1rem;
}
</style>
