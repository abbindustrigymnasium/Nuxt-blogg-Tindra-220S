<template>
    <main class="px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28">
        <div class="mx-auto max-w-lg lg:max-w-7xl">
            <div class="border-b border-b-gray-200 pb-6">
                <h2 class="text-3xl font-semibold tracking-tight text-white flex justify-center sm:text-4xl">
                    Solved Crimes
                </h2>
            </div>
            <div class="mt-12 grid gap-16 lg:grid cols-3 lg:gap-x-5 lg:gap-y-12 text-white">
                <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" 
      class="flex-col justify-between rounded-lg border border-grey-200 p-4">
        <nuxt-link :href="article._path">
      <p class="text-xl text-white">{{ article.title }}</p>
        <p class="mt-3 text-white">{{ article.description }}</p>
    </nuxt-link>
      </div>
      <div class="mt-6">
        <!-- <p class="text-sm font-medium text-white">{{ article.author }}</p> -->
        <!-- <div class="text-sm text-white">
            <time datetime="2020-03-16">{{ article.date }}</time>
        </div> -->
      </div>
                </ContentList>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>