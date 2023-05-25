<template>
  <div class="flex justify-center p-16">
    <PersonalityCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PersonalityCard from '@/components/PersonalityCard.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: [PersonalityCard],
})
</script>
