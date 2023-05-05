<template>
    <div class="background">
        <div class="flex justify-end">
            <div class="flex justify-around items-center bg-red-700 h-8 w-screen font-bold">
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
