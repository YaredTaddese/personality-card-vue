<template>
  <div
    class="bg-white outline outline-1 outline-gray-200 rounded-3xl p-8 sm:p-16 w-full md:w-144"
  >
    <div v-if="loading">
      <LoadingSkeleton />
    </div>
    <div v-else-if="!(selectedUser && userBrands)" class="flex justify-center">
      <div class="flex-col py-16 w-96 text-center">
        <h3 class="font-black text-red-600 text-3xl">Network Error</h3>
        <h3 class="pt-4">Failed to fetch student data. Please check your network connection and try again.</h3>
      </div>
    </div>
    <div v-else>
      <PersonalityCardHeading
        :first-name="selectedUser.first_name"
        :last-name="selectedUser.last_name"
        :age="getUserAge(selectedUser.date_of_birth)"
        :gender="selectedUser.gender"
        :avatar="selectedUser.avatar"
      />

      <p class="pt-12 pb-8 text-justify md:text-left">
        {{ selectedUser.bio }}
      </p>

      <!-- Details -->
      <PersonalityCardDetails
        :username="selectedUser.username"
        :dob="selectedUser.date_of_birth.replaceAll('-', '/')"
        :phone="
          selectedUser.phone_number.replaceAll('.', '-').split('x')[0].trim()
        "
        :email="selectedUser.email"
        :subscription="selectedUser.subscription.plan"
        :address="getAddressString(selectedUser.address)"
      />

      <!-- Brands -->
      <div class="py-4">
        <StyledHeader>Brands</StyledHeader>
        <div class="py-4 flex flex-wrap gap-2">
          <ChipLabel
            v-for="brand in userBrands"
            :key="brand.id"
            :text="brand.brand"
          />
        </div>
      </div>
    </div>

    <!-- Regenerate -->
    <div class="py-4 flex justify-center">
      <button
        class="rounded-md disabled:opacity-40 disabled:cursor-not-allowed bg-primary-500 enabled:hover:bg-primary-400/80 transition-colors text-white font-bold px-3 py-1"
        :disabled="loading"
        @click="fetchStudent"
      >
        Random Student
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { differenceInYears } from 'date-fns'
import PersonalityCardHeading from './PersonalityCardHeading.vue'
import PersonalityCardDetails from './PersonalityCardDetails.vue'
import ChipLabel from '@/components/ChipLabel.vue'
import StyledHeader from '@/components/StyledHeader.vue'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'

export default {
  name: 'PersonalityCard',
  components: {
    ChipLabel,
    LoadingSkeleton,
    PersonalityCardDetails,
    PersonalityCardHeading,
    StyledHeader,
  },
  computed: {
    ...mapState({
      loading: (state) => state.user.loading,
      selectedUser: (state) => state.user.selectedUser,
      userBrands: (state) => state.user.userBrands,
    }),
  },

  mounted() {
    this.fetchStudent()
  },

  methods: {
    getUserAge(dob) {
      return differenceInYears(new Date(), new Date(dob))
    },
    getAddressString(address) {
      return `${address.street_name}, ${address.street_address}, ${
        address.city
      }, ${address.state}, ${address.zip_code.split('-')[0]}, ${
        address.country
      }`
    },
    fetchStudent() {
      this.$store.dispatch('user/fetch')
    },
  },
}
</script>
