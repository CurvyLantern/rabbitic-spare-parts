<template>
    <div class="shadow-top mt-10">
        <footer class="container flex items-center justify-between py-7">
            <p class="font-secondary">
                Copyright &copy; 2023 Rabbitic, MotorsParts. All rights reserved
            </p>

            <div class="flex gap-2">
                <div
                    v-for="brand of footerBrands"
                    class="w-10 h-10 rounded-full bg-neutral-800 text-white hover:bg-[color:var(--footerIcon-bg-color)] p-1 transition"
                    :style="{ '--footerIcon-bg-color': brand.hoverColor }"
                >
                    <component :is="brand.icon" />
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import {
    BrandFacebook,
    BrandMessenger,
    BrandWhatsapp,
    BrandInstagram,
    BrandLinkedin,
    BrandYoutube,
    BrandSkype,
} from "@vicons/tabler";

const footerBrands = [
    {
        icon: BrandFacebook,
        hoverColor: "#3b5998",
    },
    {
        icon: BrandMessenger,
        hoverColor: "indigo",
    },
    {
        icon: BrandWhatsapp,
        hoverColor: "green",
    },
    {
        icon: BrandInstagram,
        hoverColor: "pink",
    },
    {
        icon: BrandLinkedin,
        hoverColor: "lightblue",
    },
    {
        icon: BrandYoutube,
        hoverColor: "crimson",
    },
    {
        icon: BrandSkype,
        hoverColor: "royalblue",
    },
];
</script>

<style scoped></style>
