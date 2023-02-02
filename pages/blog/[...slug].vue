<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

</script>

<template>
  <main>
    <TheHero>
      <template v-slot:default>
        {{ blogPost.title }}
      </template>

      <template v-slot:subtitle>
        <BlogPostMeta
            :author="blogPost.author"
            :date="blogPost.dates.published"
            color="dark"
        />
      </template>
    </TheHero>
    <div class="bg-slate-900 grid place-items-center border border-rose-400">
      <section class="">
        <div class="">
          <section class="">
            <div class="">
              <div class="">
                <ContentDoc />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
    <TheFooter />
  </main>
</template>
