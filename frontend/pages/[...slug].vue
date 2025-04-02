<!-- <script>
  import { generateOrganizationSchema } from "~/utils/generateSchema";

  const pageTitle = usePageTitle();
  const config = useRuntimeConfig();
  const router = useRouter();
  const { params, path } = useRoute();
  const slug = params.slug

  const url = slug && slug.length > 0 ? slug.join("/") : "home";
  const cv = Math.random().toString(36).substring(7);

  const story = await useAsyncStoryblok(url.replace(/\/$/, ''), {
    version: "draft",
  });

  async function handleError() {
    navigateTo('/error')
  }

  const regexUrl = (url) => {
    const newUrl = url.replace(/\/$/, '');
    return `${newUrl}`
  }

  if (path.endsWith('/')) {
    router.push(regexUrl(path))
  }

  if (!story?.value) {
    await handleError()
  }

  const jsonLd = computed(() => generateOrganizationSchema(config));

  useHead({
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd.value),
      },
    ],
  })

  onMounted(() => {
    pageTitle.value = story?.value?.content?.meta_title || "Default Title";
  })

</script>

<template>
  <div v-if="story" class="bg-gradient-to-bl from-[#030510] to-[#2D4291] w-full h-screen flex justify-center items-center">
    <StoryblokComponent :blok="story.content" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template> -->


















<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// ดึง slug จาก URL
const slug = computed(() => {
  return route.params.slug ? route.params.slug.join('/') : 'home';
});

async function handleError() {
  navigateTo('/error')
}

// ดึงข้อมูลจาก Storyblok แบบ Dynamic
const story = await useAsyncStoryblok(slug.value, { version: 'draft' });

// คอยอัปเดต `story` เมื่อ slug เปลี่ยน
watchEffect(async () => {
  const newStory = await useAsyncStoryblok(slug.value, { version: 'draft' });
  if (!story.value){
    await handleError()
  }
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


























<!-- <script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watchEffect } from 'vue';

const route = useRoute();
const router = useRouter();

// ดึง slug จาก URL
const slug = computed(() => {
  return route.params.slug ? route.params.slug.join('/') : 'home';
});

// ฟังก์ชัน redirect ไปยังหน้า error
function handleError() {
  router.push('/error');
}

// ดึงข้อมูลจาก Storyblok แบบ Dynamic
const story = ref(null);

async function fetchStory() {
  try {
    story.value = null; // เคลียร์ค่าเก่าก่อนโหลดใหม่
    const fetchedStory = await useAsyncStoryblok(slug.value, { version: 'draft' });

    if (fetchedStory && fetchedStory.content) {
      story.value = fetchedStory;
    } else {
      console.warn('No story found, but waiting before redirecting...');
      setTimeout(() => {
        if (!story.value) {
          handleError();
        }
      }, 1000); // รอโหลดข้อมูลก่อน redirect
    }
  } catch (error) {
    console.error('Error fetching story:', error);
    handleError();
  }
}

// คอยอัปเดต `story` เมื่อ slug เปลี่ยน
watchEffect(() => {
  if (slug.value) {
    fetchStory();
  }
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
 -->
