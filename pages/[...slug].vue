<template>
    <main class="relative mx-auto max-w-prose overflow-hidden py-16 sm:px-6 lg:px-8">
        <nuxt-link class="block cursor-pointer">href="/blog"
            <svg
                xmlns="https://www.w3.org/2000/svg"
                class="inline h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path stroke-linnecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
            </svg>
        </nuxt-link>
        <ContentDoc v-slot="{doc}">
            <h2 class="my-4 text-4xl font-semibold text-white">{{ doc.title }}</h2>
            <!-- <p class="my-4 text-white">
                 by, {{ doc.author }}, {{ convertDate(doc.date) }}
                </p> -->
                <div class="prose prose-lg first-letter:text-3xl first-letter:text-gray-600">
                    <contentrenderer :value="doc"/>
                </div>
        </ContentDoc>
    </main>
</template>