<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})

</script>

<template>
  <div class="max-w-4xl mx-auto px-4 mt-4">
    <section class="flex flex-col justify-center font-body">
      <h1 class="text-3xl text-gray-200 font-semibold">Featured</h1>
      <div class="min-h-fit grid grid-cols-2 gap-8 mt-8">
        <div v-for="blogPost in blogPostList"
             :key="blogPost._path"
             class="bg-slate-800 border border-slate-700 shadow-2xl rounded-3xl min-h-fit hover:shadow-emerald-400/50 hover:transition hover:-translate-y-0.5 ease-in-out duration-500">
          <NuxtLink :to="blogPost._path">
            <div class="relative text-gray-200 p-6 h-full grid grid-rows-4">
              <h3 class="text-xl font-medium pb-2 row-start-1 row-span-1">
                {{ blogPost.title }}
              </h3>
              <div class="row-start-2 row-span-2">
                {{ blogPost.description }}
              </div>
              <BlogPostMeta class="row-start-4 row-span-1" :date="blogPost.dates.published" :time="blogPost.time" :tags="blogPost.tags" />

              <!--blobs-->
<!--              <div class="hidden hover:visible absolute top-0 -left-4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-lighten"></div>-->
<!--              <div class="hidden hover:visible absolute top-0 -right-4 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-lighten"></div>-->
<!--              <div class="hidden hover:visible absolute -bottom-32 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-lighten"></div>-->

            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

</template>

