<!-- <script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { params } = useRoute();

const slug = params.slug ? params.slug.join("/") : "home";
const story = ref(null);
const isLoading = ref(true);  // เพิ่มตัวแปรสำหรับเช็คสถานะการโหลด

async function fetchStory() {
  try {
    // เรียก API ของ Storyblok
    story.value = await useAsyncStoryblok(slug.replace(/\/$/, ""), {
      version: "draft",
      language: "en", // กำหนดเป็นภาษาเริ่มต้น
    });

    if (!story.value || !story.value.content) {
      throw new Error('Story content is missing');
    }

  } catch (error) {
    console.error("Error fetching story:", error);
    // ถ้าไม่พบข้อมูลจะไปหน้า error
    router.push('/error');
  } finally {
    isLoading.value = false;  // เมื่อโหลดเสร็จจะเปลี่ยนสถานะการโหลด
  }
}

await fetchStory();

useSeoMeta({
    title: story?.value?.content?.meta_title ?? "My Page",
    description: story?.value?.content?.meta_description ?? "",
});

console.log('slug:', slug);

</script>

<template>
  <div>
    <p v-if="isLoading">Loading story content...</p>

    <StoryblokComponent v-if="story && story.content" :blok="story.content" />

    <p v-else-if="!isLoading">No story content available.</p>
  </div>
</template> -->

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
  <div v-if="story">
    <StoryblokComponent :blok="story.content" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
