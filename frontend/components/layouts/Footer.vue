<script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
const config = await useAsyncStoryblok("config", { version: "draft" });
console.log('config', config);
console.log('RichTextRenderer', config?.content?.FooterRichText);

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
                  {{ menu.FooterRichText || 'No Footer Rich Text Available' }}
                </p>
                <RichTextRenderer v-if="menu.FooterRichText" :document="menu.FooterRichText" class="text-white" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p class="text-center mt-4">{{ config?.content?.FooterCopyRigth || '© Default Footer' }}</p>
    </footer>
  </template>
  
