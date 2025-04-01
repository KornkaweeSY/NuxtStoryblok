<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// ดึง slug จาก URL
const slug = computed(() => {
  return route.params.slug ? route.params.slug.join('/') : 'home';
});

// ดึงข้อมูลจาก Storyblok แบบ Dynamic
const story = await useAsyncStoryblok(slug.value, { version: 'draft' });

// คอยอัปเดต `story` เมื่อ slug เปลี่ยน
watchEffect(async () => {
  const newStory = await useAsyncStoryblok(slug.value, { version: 'draft' });
  story.value = newStory.value;
});
</script>

<template>
  <div v-if="story" class="bg-gradient-to-bl from-[#030510] to-[#2D4291] w-full h-screen flex justify-center items-center">
    <StoryblokComponent :blok="story.content" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
