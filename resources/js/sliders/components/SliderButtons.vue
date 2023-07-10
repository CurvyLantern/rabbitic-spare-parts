<template>
    <div
        class="absolute w-full h-full top-0 left-0 flex items-center justify-between z-40 pointer-events-none px-2"
    >
        <button
            ref="prevBtn"
            @click="onPrevClick"
            class="w-8 h-8 rounded-full bg-white flex items-center justify-center pointer-events-auto border-2 border-black"
            :class="{
                'slider__btn--disabled': swiper.isBeginning,
            }"
        >
            <ArrowLeft />
        </button>
        <button
            ref="nextBtn"
            @click="onNextClick"
            class="w-8 h-8 rounded-full bg-white flex items-center justify-center pointer-events-auto border-2 border-black"
            :class="{
                'slider__btn--disabled': swiper.isEnd,
            }"
        >
            <ArrowRight />
        </button>
    </div>
</template>

<script setup>
import { ArrowLeft, ArrowRight } from "@vicons/tabler";

import { ref } from "vue";
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();

console.log({ swiper: swiper.value });

// const prevBtn = ref(null);
// const nextBtn = ref(null);

const onPrevClick = () => {
    swiper.value.slidePrev();
};
const onNextClick = () => {
    swiper.value.slideNext();
};
</script>

<style scoped>
.slider__btn--disabled {
    @apply opacity-50;
}
</style>
