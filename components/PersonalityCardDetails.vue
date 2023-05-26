<template>
  <div class="py-4">
    <StyledHeader>Details</StyledHeader>
    <div class="py-4 w-full grid sm:grid-cols-2 sm:gap-2">
      <div class="font-bold">Username:</div>
      <div>{{ username }}</div>

      <div class="font-bold pt-4 sm:pt-0">Date of Birth:</div>
      <div>{{ dob }}</div>

      <div class="font-bold pt-4 sm:pt-0">Phone:</div>
      <div>
        {{ phone }}
      </div>

      <div class="font-bold pt-4 sm:pt-0">Email:</div>
      <div>{{ email }}</div>

      <div class="font-bold pt-4 sm:pt-0">Subscription:</div>
      <div>{{ subscription }}</div>

      <div class="font-bold pt-4 sm:pt-0">Location:</div>
      <div>{{ address }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StyledHeader from '@/components/StyledHeader.vue'

export default Vue.extend({
  name: 'PersonalityCardDetails',
  components: {
    StyledHeader,
  },
  props: {
    username: { type: String, required: true },
    dob: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    subscription: { type: String, required: true },
    address: { type: String, required: true },
  },
})
</script>
