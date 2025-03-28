<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div v-editable="blok" class="mb-6">
        {{ blok.name }}
        {{ blok.description }}
    </div>
</template>
