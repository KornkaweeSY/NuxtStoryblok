<!-- <script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer"; // หรือ @storyblok/vue
import { computed } from "vue";

// ✅ ใช้ defineProps() เพื่อรับค่า blok
const props = defineProps({ blok: Object });

// ✅ ใช้ computed() เพื่อดึงค่า roundedHead อย่างปลอดภัย
const roundedHead = computed(() => 
  props.blok?.blockRich?.content?.[0]?.attrs?.body?.[0]?.roundedHead || []
);

// ✅ แปลงเป็น Rich Text document เพื่อใช้กับ RichTextRenderer
const richTextDocument = computed(() => ({
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: roundedHead.value,
        },
      ],
    },
  ],
}));
</script>

<template>
  <div class="text-white">
    {{ blok.blockHead }}
  </div>
  <div class="text-white">
    {{ blok.blockText }}
  </div>
  <div class="text-white">
    {{ blok.blockSubHead }}
  </div>
  <div v-for="(item, index) in roundedHead" :key="index" class="text-white grid grid-cols-6">
    <pre>
        {{ blok.blockRich }}
    </pre>

    <RichTextRenderer :document="richTextDocument" />
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
</template>
 -->


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
        <!-- ✅ ใช้ v-for วนลูปดึงค่า roundedHead -->
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

<style scoped>
  /* Tailwind CSS จะจัดการเรื่อง responsiveness โดยอัตโนมัติ */
</style>


<!-- <style scoped>
    /* เพิ่มการไล่สีสำหรับ border */
    .border-gradient {
    border-image: linear-gradient(to right, #ff7e5f, #feb47b);
    border-image-slice: 1;
  }

  /* เพิ่ม border-radius ที่ตัวกล่อง */
  .border-clip-padding {
    border-radius: 10px;
  }
</style> -->