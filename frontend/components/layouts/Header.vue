<!-- <script setup>
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core"; // ใช้ VueUse

const header = ref(null);
const menuActive = ref(null);
const config = await useAsyncStoryblok("config", { version: "draft" });

const { width } = useWindowSize(); // ใช้ VueUse แทน window.innerWidth

const beforeEnter = (el) => {
  el.style.maxHeight = "0";
  el.style.opacity = "0";
};

const enter = (el) => {
  el.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
  el.style.maxHeight = el.scrollHeight + "px";
  el.style.opacity = "1";
};

const leave = (el) => {
  void el.offsetHeight;
  el.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
  el.style.maxHeight = "0";
  el.style.opacity = "0";
};

const onMouseEnter = (menu) => {
  if (width.value > 1024) {
    menuActive.value = menu._uid;
  }
};

const onMouseLeave = () => {
  if (width.value > 1024) {
    menuActive.value = null;
  }
};

const onToggleMobile = (menu) => {
  if (width.value < 1024) {
    menuActive.value = menuActive.value === menu._uid ? null : menu._uid;
  }
};
</script>

<template>
  <header class="fixed z-50 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
    <div ref="header" class="relative">
      <nav class="container mx-auto">
        <ul
          v-if="config.content.HeaderMenu?.length"
          class="flex items-center justify-start text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6"
        >
          <li
            v-for="menu in config.content.HeaderMenu"
            :key="menu._uid"
            class="relative flex items-center gap-4 group"
            @mouseenter="onMouseEnter(menu)"
            @mouseleave="onMouseLeave"
          >
            <p
              class="cursor-pointer font-semibold text-lg hover:underline"
              @click="onToggleMobile(menu)"
            >
              {{ menu.name }}
            </p>

            <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
              <ul
                v-if="menu.HeaderSubmenu?.length && menu._uid === menuActive"
                class="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-lg overflow-hidden transform scale-95 transition-transform duration-300 ease-in-out min-w-[200px]"
              >
                <li
                  v-for="submenu in menu.HeaderSubmenu"
                  :key="submenu._uid"
                  class="px-6 py-3 cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                >
                  {{ submenu.SubMenuName }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
 -->



<script setup>
const header = ref(null);
const menuActive = ref(null);
const config = await useAsyncStoryblok("config", { version: "draft" });

const onMouseEnter = (menu) => {
  menuActive.value = menu._uid;
};

const onMouseLeave = () => {
  menuActive.value = null;
};

const regexUrl = (url) => {
  const newUrl = url.replace(/\/$/, "");
  return locale.value === "en" ? `/${newUrl}` : newUrl;
};
</script>
<template>
  <header class="fixed z-50 inset-0">
    <div ref="header" class="relative">
      <div class="transition-all">
        <nav>
          <ul v-if="config.content.HeaderMenu?.length"
            class="flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6 shadow-lg">
            <!-- <NuxtLink @click="menu.submenu?.length ? null : onclose()" :to="$localePath({ path: regexUrl(menu.link.cached_url)})"> -->
              <li v-for="menu in config.content.HeaderMenu" :key="menu._uid"
                class="relative flex items-center gap-4 group" @mouseenter="onMouseEnter(menu)"
                @mouseleave="onMouseLeave">
                <p class="cursor-pointer font-semibold text-lg hover:underline">
                  {{ menu.name }}
                </p>
                <transition name="fade">
                  <ul v-if="menu.HeaderSubmenu && menu.HeaderSubmenu.length > 0 && menu._uid === menuActive"
                    class="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-lg overflow-hidden transform scale-95 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                    <li v-for="submenu in menu.HeaderSubmenu" :key="submenu._uid"
                      class="px-6 py-3 cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200">
                      {{ submenu.SubMenuName }}
                    </li>
                  </ul>
                </transition>
              </li>
            <!-- </NuxtLink> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>