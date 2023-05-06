<template>
    <div class="background">
        <div class="flex justify-end">
            <div class="flex justify-around items-center bg-red-800 h-8 w-screen font-bold">
                <p class="text-white font-bold">MURDERPEDIA</p>
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
