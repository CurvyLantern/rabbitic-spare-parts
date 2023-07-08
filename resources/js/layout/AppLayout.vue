<template>
    <button @click="counter++" class="text-red-500">Hello {{ counter }}</button>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>
