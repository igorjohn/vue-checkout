<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div id="checkout-form-placeholder" class="grid grid-cols-6 gap-3">
        <!-- Step -->
        <div class="col-span-6 mb-2 flex items-center justify-start gap-2">
            <div class="bg-slate-200 bg-opacity-70 rounded-full w-5 h-5"></div>
            <div class="h-2.5 bg-slate-100 flex grow max-w-[280px]"></div>
        </div>
        <div class="col-span-6 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-6 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-3 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-3 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <!-- Step -->
        <div class="col-span-6 mt-4 mb-2 flex items-center justify-start gap-2">
            <div class="bg-slate-200 bg-opacity-70 rounded-full w-5 h-5"></div>
            <div class="h-2.5 bg-slate-100 flex grow max-w-[280px]"></div>
        </div>
        <!-- Tabs -->
        <div class="flex justify-start gap-x-2 col-span-6 mb-3">
            <div class="bg-slate-50 border border-slate-200 rounded-md w-[29%] lg:w-1/6 px-4 py-2.5 lg:py-4 space-y-2">
                <div class="h-4 bg-slate-200 opacity-80 w-[40%]"></div>
                <div class="h-2.5 bg-slate-200 opacity-80"></div>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-md w-[29%] lg:w-1/6 px-4 py-2.5 lg:py-4 space-y-2">
                <div class="h-4 bg-slate-200 opacity-80 w-[40%]"></div>
                <div class="h-2.5 bg-slate-200 opacity-80"></div>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-md w-[29%] lg:w-1/6 px-4 py-2.5 lg:py-4 space-y-2">
                <div class="h-4 bg-slate-200 opacity-80 w-[40%]"></div>
                <div class="h-2.5 bg-slate-200 opacity-80"></div>
            </div>
        </div>
        <div class="col-span-6 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-6 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-2 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-2 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>
        <div class="col-span-2 space-y-2 mb-1">
            <div class="h-3.5 bg-slate-100 w-[40%]"></div>
            <div class="h-8 bg-slate-50 border border-slate-200 rounded"></div>
        </div>

        <!-- Hover -->
        <div class="absolute gap-4 z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded bg-slate-50 bg-opacity-80 border-2 border-dashed border-indigo-500 opacity-0 hover:opacity-100 transition duration-700">
            <ShoppingBagIcon class="w-7 h-7 text-indigo-600" />
            <span class="block text-lg font-semibold text-indigo-500 tracking-tight text-center">Aqui ser?? exibido o formul??rio de compra.</span>
        </div>
    </div>
</template>

<style scoped>
#checkout-form-placeholder {
    width: 100%;
    position: relative;
    border-radius: .25rem;
    padding: 0.5rem;
    margin: -0.35rem 0 1.5rem;
}
</style>