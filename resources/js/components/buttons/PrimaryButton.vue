<template>
    <button
        :class="
            cn(
                'flex items-center gap-2 text-sm border-2 rounded-md px-5 py-1 border-orange-400',
                $attrs.class
            )
        "
    >
        <!-- icon before text -->
        <span class="w-5" v-if="$slots['beforeIcon']">
            <slot name="beforeIcon"></slot>
        </span>
        <span>
            <slot> Primary Button </slot>
        </span>

        <!-- icon after text -->
        <span class="w-5" v-if="$slots['afterIcon']">
            <slot name="afterIcon"></slot>
        </span>
    </button>
</template>

<script setup>
import { useSlots } from "vue";
import cn from "../../utils/cn";

const slots = useSlots();

console.log({ slots });
</script>

<style lang="scss" scoped></style>
