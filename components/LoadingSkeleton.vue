<template>
  <div class="animate-pulse">
    <!-- Heading -->
    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div class="h-24 w-24 bg-gray-200 rounded-full"></div>

      <div class="w-full flex flex-col md:flex-1 justify-center items-center md:items-start gap-2">
        <h3 class="h-6 w-2/4 bg-gray-200 rounded-lg"></h3>
        <h4 class="h-5 w-1/4 bg-gray-200 rounded-lg"></h4>
      </div>
    </div>

    <!-- Bio -->
    <div class="pt-12 pb-8 flex flex-col gap-2">
      <div v-for="i in 7" :key="i" class="h-4 bg-gray-200 rounded-lg"></div>
    </div>

    <!-- Details -->
    <div class="py-4">
      <h3 class="w-1/3 h-6 bg-gray-200 rounded-lg"></h3>
      <div class="py-4 w-full grid sm:grid-cols-2 sm:gap-2">
        <div class="h-4 mt-2 md:mt-0 rounded-lg bg-gray-200 w-1/2"></div>
        <div class="h-4 mt-2 md:mt-0 rounded-lg bg-gray-200"></div>

        <div class="h-4 mt-4 md:mt-2 rounded-lg bg-gray-200 w-1/2"></div>
        <div class="h-4 mt-2 rounded-lg bg-gray-200"></div>

        <div class="h-4 mt-4 md:mt-2 rounded-lg bg-gray-200 w-1/2"></div>
        <div class="h-4 mt-2 rounded-lg bg-gray-200"></div>

        <div class="h-4 mt-4 md:mt-2 rounded-lg bg-gray-200 w-1/2"></div>
        <div class="h-4 mt-2 rounded-lg bg-gray-200"></div>

        <div class="h-4 mt-4 md:mt-2 rounded-lg bg-gray-200 w-1/2"></div>
        <div class="mt-2 flex flex-col gap-3">
          <div
            v-for="i in 3"
            :key="i"
            class="h-4 rounded-lg bg-gray-200 w-full"
          ></div>
        </div>
      </div>
    </div>

    <!-- Brands -->
    <div class="py-4">
      <h3 class="w-1/3 h-6 bg-gray-200 rounded-lg"></h3>
      <div class="py-4 flex flex-wrap gap-2">
        <div
          v-for="i in 7"
          :key="i"
          class="h-6 rounded-lg bg-gray-200 w-20"
        ></div>
      </div>
    </div>

    <!-- Button -->
    <!-- <div class="py-4 flex justify-center">
      <div class="h-10 rounded-lg bg-gray-200 w-32"></div>
    </div> -->
  </div>
</template>
