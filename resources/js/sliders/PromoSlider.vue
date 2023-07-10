<template>
    <div class="mt-10 container">
        <BaseSlider>
            <swiper-slide v-for="content of tempContents">
                <PromoSliderCard />
            </swiper-slide>
        </BaseSlider>
    </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";

import PromoSliderCard from "./components/PromoSliderCard.vue";

import BaseSlider from "./BaseSlider.vue";

const tempContents = Array(10).fill(0);

// const sliderButton = ref(null);
// const navigationButtons = computed(() => ({
//     prevBtn: sliderButton.value ? sliderButton.value.$refs.prevBtn : null,
//     nextBtn: sliderButton.value ? sliderButton.value.$refs.nextBtn : null,
// }));
</script>
