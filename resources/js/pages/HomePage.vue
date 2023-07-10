<template>
    <PromoSlider />
    <CategorySlider />

    <!-- Home page products -->
    <!-- prolly will refactor into a new comp if needed -->
    <section class="mt-20 flex flex-wrap container justify-center gap-6">
        <div v-for="n in 100">
            <ProductCard :product-img="ProductImg" />
        </div>
    </section>

    <!-- Helmet -->
    <section
        :style="{
            '--hue1': `${hue1}`,
            '--hue2': `${hue2}`,
        }"
        class="promo__section container p-10 rounded-md"
    >
        <div class="flex flex-col justify-between md:flex-row">
            <div class="flex-2">
                <div class="mb-5">
                    <h4 class="text-3xl py-6">Fast, Free Shipping</h4>
                    <p class="text-5xl mb-4">Contactless Delivery</p>
                    <p>Try it for now, risk free!</p>
                </div>

                <button
                    class="px-5 py-3 shadow-md rounded-md bg-white text-primary-foreground text-2xl"
                >
                    shop now
                </button>
            </div>

            <div class="flex-1 relative flex items-center justify-center">
                <figure
                    class="md:absolute flex md:pr-10 items-center justify-center"
                >
                    <img
                        :src="HelmetImg"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </div>
    </section>

    <section class="mt-10 container flex gap-5">
        <div class="flex-1 p-10 rounded-md bg-black text-white">
            <h3 class="text-4xl mb-7 text-center font-semibold">Parts</h3>

            <ul class="flex flex-col gap-3 text-xl">
                <li>Braking</li>
                <li>Controls</li>
                <li>Exhaust</li>
                <li>Grips</li>
                <li>Handlebars</li>
                <li>Pod Filters</li>
            </ul>
        </div>
        <div class="flex-5 flex flex-col justify-between">
            <div class="flex">
                <PrimaryButton class="ml-auto text-lg">see all</PrimaryButton>
            </div>
            <div class="flex gap-5">
                <ProductCard :product-img="ProductImg" v-for="n in 4" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import PromoSlider from "../sliders/PromoSlider.vue";
import CategorySlider from "../sliders/CategorySlider.vue";
import PrimaryButton from "../components/buttons/PrimaryButton.vue";
import ProductCard from "../components/cards/ProductCard.vue";

import ProductImg from "../../../public/assets/product-images/engine.png";
import HelmetImg from "../../../public/assets/product-images/helmet.png";

const hue1 = ref(0);
const hue2 = ref(360);
const interval = ref(0);
onMounted(() => {
    setInterval(() => {
        hue1.value = (hue1.value + 1) % 360;
        hue2.value = 360 - hue1.value;
    }, 100);
});
onUnmounted(() => {
    clearInterval(interval.value);
});
</script>

<style scoped>
.promo__section {
    margin-top: 13%;
    margin-bottom: 13%;
    background-color: #fbab7e;
    background-image: linear-gradient(
        62deg,
        hsl(var(--hue1), 94%, 74%) 0%,
        hsl(var(--hue2), 90%, 69%) 100%
    );
}
</style>
