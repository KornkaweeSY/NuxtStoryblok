<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="py-15 text-6xl text-white file:font-bold text-center"
  >
    {{ blok.mainHeader }}
  </div>
  <div class="px-10 text-center text-[#929BD2] text-[40px]">
    {{ blok.mainText }}
  </div>
</template>

