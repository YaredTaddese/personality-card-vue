<template>
  <div class="bg-white rounded-3xl p-16 w-144">
    <!-- Heading -->
    <div class="flex gap-8">
      <img class="h-24 w-24 bg-gray-100 outline outline-1 outline-gray-300 rounded-full"
        src="https://robohash.org/voluptasetullam.png?size=300x300&set=set1" />
      <div class="flex flex-col justify-center">
        <h3 class="text-2xl text-heading-black font-bold">Jane Doe</h3>
        <h4 class="text-1xl text-subtitle-gray">32 / Female</h4>
      </div>
    </div>

    <!-- Paragraph -->
    <p class="pt-12 pb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit
      eius inventore iusto hic iure modi ex eos? Dignissimos explicabo possimus
      eveniet. Saepe aspernatur aperiam odit aliquid facere qui incidunt!
    </p>

    <!-- Details -->
    <div class="py-4">
      <h3 class="text-3xl text-primary-400 font-black">Details</h3>
      <div class="py-4 grid grid-cols-2 gap-2">
        <div class="font-bold">Username:</div>
        <div>jane.doe</div>

        <div class="font-bold">Date of Birth:</div>
        <div>1967/09/27</div>

        <div class="font-bold">Phone:</div>
        <div>+20 963-565-1458</div>

        <div class="font-bold">Email:</div>
        <div>jane.doe@email.com</div>

        <div class="font-bold">Subscription:</div>
        <div>Premium</div>

        <div class="font-bold">Location:</div>
        <div>
          Gusikowski Pike, 3907 Titus Plains, Nathanaelland, New York, 35230,
          United States
        </div>
      </div>
    </div>

    <!-- Brands -->
    <div class="py-4">
      <h3 class="text-3xl text-primary-400 font-black">Brands</h3>
      <div class="py-4 flex gap-2">
        <div class="bg-label-gray px-3 py-1 rounded-md">Sharp</div>
        <div class="bg-label-gray px-3 py-1 rounded-md">Electrolux</div>
      </div>
    </div>

    <!-- Regenerate -->
    <div class="py-4 flex justify-center">
      <button class="rounded-md bg-primary-500 text-white font-bold px-3 py-1">
        Random Student
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PersonalityCard',

  computed: {
    ...mapState({
      selectedUser(state) {
        console.log('stuff')
        console.log(state)
        return state.user.selectedUser
      },
      userBrands: (state) => state.user.userBrands,
    }),
  },

  mounted() {
    this.$store.dispatch('user/fetchUser')
    this.$store.dispatch('user/fetchBrands')
  },
}
</script>
