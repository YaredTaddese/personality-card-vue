<template>
  <div class="bg-label-gray px-3 py-1 max-w-2xs rounded-md overflow-hidden text-ellipsis">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ChipLabel',
  props: {
    text: { type: String, required: true },
  },
})
</script>
