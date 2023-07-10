<template>
    <div ref="lockElRef" class="flex flex-1 flex-col relative">
        <div class="font-primary">
            <BaseHeader @openMenu="drawerToggle"/>
        </div>
        <main class="font-primary flex-1">
            <router-view></router-view>
        </main>
        <div>
            <BaseFooter />
        </div>

        <!-- drawer -->
        <aside v-if="drawerOpen" class="bg-black  text-white  h-full w-full fixed bg-opacity-30 flex z-[99999]">
            <div ref="drawerRef" class="bg-white p-10 text-black w-96">
                hello mom
                <button @click="drawerToggle()" class="p-5 border">x</button>
            </div>
        </aside>
    </div>
</template>
<script setup>
import BaseFooter from "../footers/BaseFooter.vue";
import BaseHeader from "../headers/BaseHeader.vue";
import PromoSlider from "../sliders/PromoSlider.vue";

import {ref,watch} from 'vue';
import {useToggle, onClickOutside,useScrollLock } from '@vueuse/core'

const [drawerOpen, drawerToggle] = useToggle();

const drawerRef = ref(null);
onClickOutside(drawerRef, () => drawerToggle());

const lockElRef = ref(null);
const lockSiteWhenDrawerOpened = useScrollLock(lockElRef)


watch(drawerOpen, (cur) => {
    lockSiteWhenDrawerOpened.value = cur
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

:root {
    /* font-family: "Montserrat", sans-serif; */
    --font-primary: "Montserrat";
    --font-secondary: "Nunito";
}
</style>
