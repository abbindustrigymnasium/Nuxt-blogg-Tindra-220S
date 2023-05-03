<template>
    <div class="background">
        <div class="flex justify-end">
            <div class="flex justify-around items-center bg-red-700 h-14 w-screen font-bold">
                <div>
                    <NuxtLink to="/solved-crimes" class="hover:underline mx-4 text-white">Solved Crimes</NuxtLink>
                    <NuxtLink to="/unsolved-crimes" class="hover:underline mx-4 text-white">Unsolved Crimes</NuxtLink>
                    <NuxtLink to="/about" class="hover:underline mx-4 text-white">About us</NuxtLink>
                    <NuxtLink to="/" class="hover:underline mx-4 text-white">Recent Posts</NuxtLink>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.background {
    background-image: url("/assets/images/ruta.png");
    background-repeat: repeat;
    background-position: left top;
}
</style>
