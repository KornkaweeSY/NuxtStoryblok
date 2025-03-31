<script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
import { computed } from "vue";

// ✅ รับค่า blok จาก props
const props = defineProps({ blok: Object });

// ✅ ใช้ computed() เพื่อดึงค่า body ทั้งหมด
const roundedHeads = computed(() =>
  props.blok?.blockRich?.content?.[0]?.attrs?.body || []
);
</script>

<template>
  <div class="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-65 py-10">
    <div class="p-3 border-2 border-[#304597] border-solid rounded-lg border-clip-padding bg-gradient-to-r from-[#1C3482] to-[#122145]">
      <div class="text-white text-[20px] mb-3">
        {{ blok.blockHead }}
      </div>
      <div class="text-[16px] text-[#929BD2] mb-3">
        {{ blok.blockText }}  
      </div>
      <div class="text-white">  
        {{ blok.blockSubHead }}
      </div>

      <div class="flex gap-4 flex-wrap p-2">
        <div v-for="(item, index) in roundedHeads" :key="index"
          class="bg-[#122248] backdrop-blur-lg text-white text-[14px] px-3 rounded-2xl flex-1 md:flex-none">
          <RichTextRenderer :document="{
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: item.roundedHead
                  }
                ]
              }
            ]
          }" />
        </div>
      </div>
    </div>
  </div>
</template>