<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

let isOpenDiscountCoupon = ref(false);
</script>

<script>
export default {
    data() {
        return {
            icons: {
                ticket: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>`,
            },

            classes: {
                discount: {
                    input: 'h-[32px] border border-slate-300 text-gray-600 text-xs bg-white placeholder-gray-400 focus:border-indigo-400 grow rounded py-2 px-2.5 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                    button: 'h-[32px] flex justify-center items-center rounded border-0 bg-indigo-600 text-xs tracking-tight font-bold min-w-[80px] text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0',
                }
            }

        }
    }
};
</script>
  
<template>
    <div class="w-full rounded bg-gray-50 border border-gray-150 hover:border-indigo-300 transition duration-700">
        <div @click="isOpenDiscountCoupon = !isOpenDiscountCoupon" class="flex gap-2 px-3 py-3.5 items-center justify-between cursor-pointer">
            <div class="inline-flex gap-2 items-center justify-start">
                <div v-html="icons.ticket" class="w-4 h-4 text-slate-500 rotate-[325deg]"></div>
                <span class="text-sm text-indigo-500 font-medium">Tem um cupom de desconto?</span>
            </div>
            <div class="inline-flex items-center justify-center ml-auto mr-1 transition duration-500">
                <ChevronDownIcon :class="[isOpenDiscountCoupon ? 'rotate-180' : 'rotate-0', 'w-4 h-4']" />
            </div>
        </div>
        <div v-if="isOpenDiscountCoupon" class="flex items-center justify-start gap-1 transition duration-500 w-full px-4 pb-4">
            <input :class="classes.discount.input" type="text" inputmode="text" placeholder="Digite o código do cupom" />
            <button :class="classes.discount.button">
                Aplicar
            </button>
        </div>
    </div>
</template>

