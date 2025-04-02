<!-- <script setup>
defineProps({
  blok: Object,
});

</script>

<template>
  <div v-editable="blok" class="overflow-hidden flex justify-center items-center h-screen bg-gradient-to-bl from-[#030510] to-[#2D4291]">
    <p class="text-white text-lg">
      {{ blok?.news?.name || 'No Name Available' }}

    </p>
  </div>
</template>
 -->

<script setup>
import { onMounted } from 'vue';
import { useNews } from '~/composables/useNews'; // นำเข้า useNews

const { all_news, fetchNews, loading } = useNews();  // เรียกใช้ composable ที่สร้างไว้

onMounted(() => {
    fetchNews(); // ดึงข้อมูลเมื่อ component ถูก mounted
});
</script>

<template>
    <div v-if="loading" class="text-white">Loading...</div>
    <div v-else>
        <div v-for="news in all_news" :key="news.uuid" class="news-item">
            <p class="text-white text-lg p-2" v-if="news.content?.News?.[0]">
                {{ news.content.News[0]?.name || 'No Name Available' }}
            </p>
            <div class="text-white text-[9px] border border-solid border-white flex justify-center items-center p-2"
                v-if="news.content?.News?.[1]">
                {{ news.content.News[1]?.blockText || 'No Block Text Available' }}
            </div>
            <p class="text-white text-[9px] mt-3 p-2" v-if="news.content?.News?.[0]">
                {{ news.content.News[0]?.name }}
            </p>
        </div>
    </div>
</template>
