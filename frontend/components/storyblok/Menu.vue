<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div v-editable="blok" class="mb-6">
        {{ blok.name }}
    </div>
</template>
