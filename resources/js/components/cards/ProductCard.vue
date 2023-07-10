<template>
    <div class="border rounded-md shadow-md p-3">
        <figure class="max-w-52 aspect-square flex items-center justify-center">
            <img
                :src="props.productImg"
                alt=""
                class="w-9/10 h-full object-contain"
            />
        </figure>

        <div>
            <p class="font-bold text-lg my-2">Title</p>

            <div class="flex justify-between">
                <div class="flex gap-5">
                    <p>10</p>
                    <p class="text-error">20</p>
                </div>
                <div class="text-warning">
                    <Icon v-for="n in 5">
                        <Star12Filled />
                    </Icon>
                    <span class="pl-2 text-primary-foreground">1000</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Star } from "@vicons/tabler";
import { Star12Filled } from "@vicons/fluent";
import { Icon } from "@vicons/utils";
const props = defineProps({
    productImg: String,
    rating: Number,
});
</script>

<style lang="scss" scoped></style>
