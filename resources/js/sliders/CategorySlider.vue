<template>
    <div class="mt-20 container">
        <BaseSlider slides-per-view="auto" class="!px-14 !py-2">
            <swiper-slide v-for="n in 20" class="categorySlider">
                <div
                    class="py-2 flex items-center gap-4 p-3 border shadow-md rounded-md"
                >
                    <figure class="h-14 flex-2">
                        <img
                            class="w-full h-full object-contain"
                            :src="CategoryImg"
                            alt=""
                        />
                    </figure>
                    <p class="font-secondary flex-3 text-center">Engine</p>
                </div>
            </swiper-slide>
        </BaseSlider>
    </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import BaseSlider from "./BaseSlider.vue";
import CategoryImg from "../../../public/assets/category-images/bike-engine.png";
</script>

<style scoped>
.categorySlider {
    width: auto;
}
</style>
