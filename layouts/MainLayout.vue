<template>
    <div id="MainLayout" class="h-screen">
        <div class="w-full max-w-[500px] mx-auto">
            <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img src="/threads-logo.png" class="w-[35px]" alt="">
            </div>
        </div>

        <div class="w-full max-w-[500px] mx-auto h-screen">
            <slot />
        </div>

        <div id="BottomNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t-gray-700 bg-black">
            <div class="flex w-full max-w-[500px] mx-auto flex items-center justify-around">
                <button class="w-full h-full">
                    <Icon name="material-symbol:home-outline" size="35" color="#ffffff" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>