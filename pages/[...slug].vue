<template>
    <main class="overflow-hidden py-16 sm:px-6 lg:px-8">
        <ContentDoc v-slot="{doc}">
            <div class="flex justify-center">
                <h2 class="my-4 text-4xl font-semibold text-white">{{ doc.title }}</h2>
            </div>
            <div class="flex flex-row justify-around">
                <div class= "h-80 w-60">
                <img class="h-full flex flex-row" :src="doc.img"/>
                </div>
            <!-- <p class="my-4 text-white">
                 by, {{ doc.author }}, {{ convertDate(doc.date) }}
                </p> -->
                <div class="mt-4 w-1/2 flex-column prose prose-lg first-letter:text-3xl first-letter:text-gray-600 text-white">
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