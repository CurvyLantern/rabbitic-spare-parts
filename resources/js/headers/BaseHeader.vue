<template>
    <div class="shadow-md">
        <nav class="container flex py-5 items-center">
            <div class="flex-1">
                <button @click="$emit('openMenu')" class="w-8 h-8">
                    <AlignLeft />
                </button>
            </div>
            <div
                class="flex-1 rounded-full border-2 border-orange-500 flex items-center p-1"
            >
                <input
                    type="text"
                    name=""
                    class="flex-1"
                    placeholder="Search something ..."
                />
                <span class="p-2 bg-orange-500 rounded-full">
                    <button
                        class="rounded-full w-5 h-5 flex items-center justify-center text-white"
                    >
                        <Search />
                    </button>
                </span>
            </div>

            <div class="flex flex-1 items-center gap-8">
                <div class="w-8 h-8 ml-auto relative">
                    <ShoppingCart />
                    <div
                        class="absolute top-0 right-0 w-3 h-3 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center p-2"
                    >
                        0
                    </div>
                </div>

                <div>
                    <PrimaryButton>
                        <template #beforeIcon>
                            <Bike />
                        </template>
                        Sign in
                    </PrimaryButton>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
import { ref } from "vue";

import PrimaryButton from "../components/buttons/PrimaryButton.vue";

import { AlignLeft, Search, ShoppingCart, Bike } from "@vicons/tabler";

const counter = ref(0);
</script>
