<script setup>
const config = await useAsyncStoryblok("config", { version: "draft", language: local.value });
</script>

<template>
    <header class="fixed z-10000 inset-0">
        <div ref="header" class="relative">
            <div class="transition-all" >

            </div>
        </div>
    </header>
</template>
