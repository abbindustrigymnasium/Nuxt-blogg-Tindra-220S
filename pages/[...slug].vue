<template>
    <main class="overflow-hidden py-16 sm:px-6 lg:px-8">
        <nuxt-link class="block cursor-pointer w-16" href="/">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="white" 
            class="w-6 ml-3 md:ml-0 h-6">
  <path 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>


        </nuxt-link>
        <ContentDoc v-slot="{doc}">
            <div class="flex justify-center ">
                <h2 class="my-4 tetx-2xl md:text-4xl font-semibold text-white">{{ doc.title }}</h2>
            </div>
            <div class="flex flex-col items-center md:items-start md:ml-0 md:flex-row justify-around mb-20">
                <div class= "h-96 w-64">
                <img class=" mt-8 transform rotate-12 h-72 w-60 flex flex-row" :src="doc.img"/>
                </div>
                <div class="mt-16 w-1/2 flex-column prose prose-lg first-letter:text-3xl first-letter:text-gray-600 text-white">
                    <ContentRenderer :value="doc"/>
                </div>
                <div class="flex flex-row text-white">
                 
                </div>
            </div>
            <div>


            </div>
        </ContentDoc>
    </main>
</template>
<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
h1 {

 font-size: 2em;

 font-weight: bold;

 margin-top: 0.7em;

 margin-bottom: 0.4em;

}

h2 {

 font-size: 1.5em;

 font-weight: bold;

 margin-top: 1em;

 margin-bottom: 0.4em;

}

h3 {

 font-size: 1.17em;

 font-weight: bold;

 margin-top: 0.5em;

 margin-bottom: 0.4em;

}
</style>