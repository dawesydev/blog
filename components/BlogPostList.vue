<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})

</script>

<template>
  <div class="max-w-5xl mx-auto">
    <section class="flex justify-center">
      <div class="min-h-fit grid gap-96 font-body">
        <div v-for="blogPost in blogPostList" :key="blogPost._path" class="py-8 bg-gray-100 bg-opacity-25 border-2 border-gray-200 rounded-3xl h-80">
          <NuxtLink :to="blogPost._path">
            <section class="flex flex-col px-16 md:justify-end">
              <div class="relative w-full max-w-l">
                <div class="absolute top-0 -left-4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-lighten"></div>
                <div class="absolute top-0 -right-4 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-lighten"></div>
                <div class="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-lighten"></div>
                <div class="text-gray-200 w-full">
                  <h3 class="text-3xl font-medium border-b border-gray-200 pb-2">
                    {{ blogPost.title }}
                  </h3>
                  <div class="text-start">
                    {{ blogPost.description }}
                  </div>
                  <BlogPostMeta :date="blogPost.dates.published" :time="blogPost.time" :tags="blogPost.tags" />
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

</template>

