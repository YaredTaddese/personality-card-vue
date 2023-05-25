<template>
  <div class="flex gap-6 md:gap-8">
    <img
      class="h-16 w-16 md:h-24 md:w-24 bg-gray-100 outline outline-1 outline-gray-300 rounded-full"
      :src="avatar"
    />
    <div class="flex flex-col justify-center">
      <h3 class="text-xl md:text-2xl text-heading-black font-bold">
        {{ firstName }} {{ lastName }}
      </h3>
      <h4 class="text-1xl text-subtitle-gray">
        {{ age }} /
        {{ gender }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PersonalityCardHeading',
  props: {
    avatar: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
  },
})
</script>
