<template>
  <h3 class="text-2xl text-primary-400 font-black">
    <slot />
  </h3>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StyledHeader',
})
</script>
