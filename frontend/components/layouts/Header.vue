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

</script>
<template>
    <header class="fixed z-50 inset-0">
        <div ref="header" class="relative">
            <div class="transition-all">
                <nav>
                    <ul v-if="config.content.HeaderMenu?.length"
                        class="flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-10 md:px-16 lg:px-32 xl:px-64 py-4 gap-6 shadow-lg">
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