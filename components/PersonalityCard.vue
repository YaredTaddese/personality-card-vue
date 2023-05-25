<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="!(selectedUser && userBrands)">Error: Fetch failed</div>
  <div v-else class="bg-white rounded-3xl p-16 w-144">
    <!-- Heading -->
    <div class="flex gap-8">
      <img class="h-24 w-24 bg-gray-100 outline outline-1 outline-gray-300 rounded-full" :src="selectedUser.avatar" />
      <div class="flex flex-col justify-center">
        <h3 class="text-2xl text-heading-black font-bold">
          {{ selectedUser.first_name }} {{ selectedUser.last_name }}
        </h3>
        <h4 class="text-1xl text-subtitle-gray">
          {{ getUserAge(selectedUser.date_of_birth) }} /
          {{ selectedUser.gender }}
        </h4>
      </div>
    </div>

    <!-- Paragraph -->
    <p class="pt-12 pb-8">
      {{ selectedUser.bio }}
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit
      eius inventore iusto hic iure modi ex eos? Dignissimos explicabo possimus
      eveniet. Saepe aspernatur aperiam odit aliquid facere qui incidunt! -->
    </p>

    <!-- Details -->
    <div class="py-4">
      <h3 class="text-3xl text-primary-400 font-black">Details</h3>
      <div class="py-4 grid grid-cols-2 gap-2">
        <div class="font-bold">Username:</div>
        <div>{{ selectedUser.username }}</div>

        <div class="font-bold">Date of Birth:</div>
        <div>{{ selectedUser.date_of_birth.replaceAll('-', '/') }}</div>

        <div class="font-bold">Phone:</div>
        <div>
          {{
            selectedUser.phone_number.replaceAll('.', '-').split('x')[0].trim()
          }}
        </div>

        <div class="font-bold">Email:</div>
        <div>{{ selectedUser.email }}</div>

        <div class="font-bold">Subscription:</div>
        <div>{{ selectedUser.subscription.plan }}</div>

        <div class="font-bold">Location:</div>
        <div>{{ getAddressString(selectedUser.address) }}</div>
      </div>
    </div>

    <!-- Brands -->
    <div class="py-4">
      <h3 class="text-3xl text-primary-400 font-black">Brands</h3>
      <div class="py-4 flex flex-wrap gap-2">
        <div v-for="brand in userBrands" class="bg-label-gray px-3 py-1 rounded-md" @key="brand.id">
          {{ brand.brand }}
        </div>
      </div>
    </div>

    <!-- Regenerate -->
    <div class="py-4 flex justify-center">
      <button @click="fetchStudent" class="rounded-md bg-primary-500 text-white font-bold px-3 py-1">
        Random Student
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { differenceInYears } from 'date-fns'

export default {
  name: 'PersonalityCard',
  computed: {
    ...mapState({
      loading: (state) => state.user.loading,
      selectedUser: (state) => state.user.selectedUser,
      userBrands: (state) => state.user.userBrands,
    }),
  },

  async mounted() {
    this.fetchStudent()
  },

  methods: {
    getUserAge(dob) {
      return differenceInYears(new Date(), new Date(dob))
    },
    getAddressString(address) {
      return `${address.street_name}, ${address.street_address}, ${address.city
        }, ${address.state}, ${address.zip_code.split('-')[0]}, ${address.country
        }`
    },
    fetchStudent() {
      this.$store.dispatch('user/fetch')
    },
  },
}
</script>
