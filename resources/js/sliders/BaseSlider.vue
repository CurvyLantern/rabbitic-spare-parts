<template>
    <swiper
        :slides-per-view="4"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <slot></slot>
        <template v-slot:container-end>
            <SliderButtons ref="sliderButton" />
        </template>
    </swiper>
</template>

<script setup>
import "swiper/css";
import { Swiper } from "swiper/vue";
import SliderButtons from "./components/SliderButtons.vue";

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = (swiper) => {
    console.log("slide change");
    console.log(swiper);
};

// const sliderButton = ref(null);
// const navigationButtons = computed(() => ({
//     prevBtn: sliderButton.value ? sliderButton.value.$refs.prevBtn : null,
//     nextBtn: sliderButton.value ? sliderButton.value.$refs.nextBtn : null,
// }));
</script>
