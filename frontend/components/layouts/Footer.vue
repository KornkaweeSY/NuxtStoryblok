<!-- <script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
import { computed } from "vue";

const config = await useAsyncStoryblok("config", { version: "draft" });

const FooterCopyRigth = computed(() => config?.value?.content?.FooterCopyRigth || "0");
const FooterMenu = computed(() => config?.value?.content?.FooterMenu || []);
const RichText = computed(() => config?.value?.content?.FooterRichText || []);
console.log('FooterCopyRigth', FooterCopyRigth.value);
console.log('FooterMenu', FooterMenu.value);
console.log('RichText', RichText.value);

</script>
<template>
  <footer class="fixed bottom-0 left-0 w-full bg-gray-800 text-white" ref="footer">
    <div class="relative flex-col justify-end">
      <div class="transition-all">
        <nav>
          <ul v-if="config?.content?.FooterMenu?.length"
            class="flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6 shadow-lg">
            <li v-for="menu in config.content.FooterMenu" :key="menu._uid"
              class="relative flex items-center gap-4 group">
              <p class="cursor-pointer font-semibold text-lg hover:underline">
                {{ config?.content?.FooterCopyRigth || '© Default Footer' }}
              </p>
              <RichTextRenderer v-if=" config?.content?.RichText" :document=" config?.content?.RichText" class="text-white" />
               <p>{{ config?.content?.RichText }}</p>
            </li>
          </ul>
        </nav>  
      </div>
    </div>
  </footer>
</template> -->



<!-- <script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
import { computed } from "vue";

// ดึงค่าจาก Storyblok
const config = await useAsyncStoryblok("config", { version: "draft" });

// คำนวณค่าที่ต้องการใช้งานในเทมเพลต
const FooterCopyRigth = computed(() => config?.value?.content?.FooterCopyRigth || "© Default Footer");
const FooterMenu = computed(() => config?.value?.content?.FooterMenu || []);
const RichText = computed(() => config?.value?.content?.FooterRichText || "");

// ตรวจสอบค่าจาก RichText และแปลงเป็น Object ที่รองรับ
const parsedRichText = computed(() => {
  // หาก RichText เป็น String ให้แปลงเป็น Object ที่รองรับการแสดงผล
  if (typeof RichText.value === 'string') {
    // สมมติว่า richTextResolver เป็นฟังก์ชันจาก Storyblok ที่แปลง Rich Text string เป็น Object
    return { content: RichText.value };  // หรือใช้วิธีที่เหมาะสมตาม library ที่ใช้งาน
  }
  return RichText.value; // ถ้าเป็น Object อยู่แล้วก็ใช้เลย
});

console.log('parsedRichText', parsedRichText.value);
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full bg-gray-800 text-white" ref="footer">
    <div class="relative flex-col justify-end">
      <div class="transition-all">
        <nav>
          <ul v-if="FooterMenu.length"
            class="flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6 shadow-lg">
            <li v-for="menu in FooterMenu" :key="menu._uid" class="relative flex items-center gap-4 group">
              <p class="cursor-pointer font-semibold text-lg hover:underline">
                {{ FooterCopyRigth }}
              </p>
              <div v-if="parsedRichText && parsedRichText.content" v-html="parsedRichText.content" class="text-white p-3">
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template> -->


<script setup>
import { computed } from "vue";
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

const config = await useAsyncStoryblok("config", { version: "draft" });

const FooterCopyRigth = computed(() => config?.value?.content?.FooterCopyRigth || "© Default Footer");
const FooterMenu = computed(() => config?.value?.content?.FooterMenu || []);
const RichText = computed(() => config?.value?.content?.FooterRichText || "");

const parsedRichText = computed(() => {
  if (typeof RichText.value === 'string') {
    return {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: RichText.value
            }
          ]
        }
      ]
    };
  }
  return RichText.value;
});
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full bg-gray-800 text-white" ref="footer">
    <div class="relative flex-col justify-end">
      <div class="transition-all">
        <nav>
          <ul v-if="FooterMenu.length"
            class="flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6 shadow-lg">
            <li v-for="menu in FooterMenu" :key="menu._uid" class="relative flex items-center gap-4 group">
              <p class="cursor-pointer font-semibold text-lg hover:underline">
                {{ FooterCopyRigth }}
              </p>
              <div v-if="parsedRichText && parsedRichText.content">
                <RichTextRenderer :document="parsedRichText" v-bind="$attrs" class="text-white p-3" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>


