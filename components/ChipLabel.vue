<template>
  <div class="bg-label-gray px-3 py-1 rounded-md">{{ text }}</div>
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
