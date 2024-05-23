<template>  
  <div class="flex flex-col items-start max-w-full w-full z-4 pb-0 px-0 pt-16 text-lg leading-6">
    <div class="flex-col flex lg:flex-row w-full max-w-5xl self-center my-2 mb-10">
      <Hero :title="data.title" :content="data.content" />      
    </div>
    <div class="flex w-full max-w-5xl self-center my-2">
      <Skills />
    </div>
  </div>  
</template>

<script>
import Hero from '~/components/Hero.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Hero
  },
  setup() {
    const data = useAsyncData('about', async () => {
      const content = await fetchContent('about')
      return {
        title: content.title,
        content: content.content
      }
    })

    return { data }
  }
}
</script>