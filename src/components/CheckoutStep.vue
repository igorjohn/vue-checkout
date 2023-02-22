<script>
export default {
    props: {
        hasNumber: Boolean,
        StepNumber: Number,
        title: String
    }
}
</script>

<template>
    <div class="lg:col-span-2 flex items-center gap-x-2 mb-2">
        <template v-if="hasNumber == true">
            <div class="text-sm font-semibold text-white bg-green-500 rounded-full flex items-center justify-center w-5 h-5">{{ this.StepNumber }}</div>
        </template>
        <div class="text-base font-semibold text-slate-700 tracking-tight">{{ title }}</div>
    </div>
</template>