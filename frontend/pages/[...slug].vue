<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
  <div v-if="story" class="bg-gradient-to-bl from-[#030510] to-[#2D4291] w-full h-screen flex justify-center items-center">
      <StoryblokComponent :blok="story.content" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>