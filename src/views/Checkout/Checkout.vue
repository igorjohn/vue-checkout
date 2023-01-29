<script setup>

import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

let openLoader = ref(false);
function onPurchase() {
    openLoader.value = true;
}

function closeLoader() {
    openLoader.value = false;
}

let isOpenDiscountCoupon = ref(false);

const installment = [
    { installments: 1, text: '1x R$ 197,00 (à vista)' },
    { installments: 2, text: '2x R$ 101,45' },
    { installments: 3, text: '3x R$ 69,65' },
    { installments: 4, text: '4x R$ 53,80' },
    { installments: 5, text: '5x R$ 44,33' },
    { installments: 6, text: '6x R$ 38,04' },
    { installments: 7, text: '7x R$ 33,58' },
    { installments: 8, text: '8x R$ 30,27' },
    { installments: 9, text: '9x R$ 27,71' },
    { installments: 10, text: '10x R$ 25,68' },
    { installments: 11, text: '11x R$ 24,04' },
    { installments: 12, text: '12x R$ 22,70' }
]

</script>

<script type="text/javascript">

import BannerImg from '@/assets/img/mock/checkout-banner.png';

export default {
    data() {
        return {
            pepper: this.pepper,
            tab: 1,
            checkoutHas2Columns: true,
            selectedInstallment: 12,

            CheckoutBadges: [
                {
                    id: 1,
                    isShown: true,
                    title: 'Dados protegidos',
                    body: 'Os seus dados são confidenciais e seguros.',
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>`
                },
                {
                    id: 2,
                    isShown: true,
                    title: 'Checkout 100% seguro',
                    body: 'As informações desta compra são criptografadas.',
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                    </svg>`
                },

            ],

            Classes: {
                checkoutLeftColumn: 'pt-6 pb-8 lg:pb-10 px-3 flex flex-col gap-4',
                checkoutRightColumn: 'xl:pt-6 pb-12 px-3 flex flex-col gap-3',
                input: 'border border-slate-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-400 input-shadow w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500 focus:ring0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                inputHasIcon: 'border border-slate-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-400 input-shadow w-full rounded-md py-2 pr-3 pl-8 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                label: 'block text-sm font-medium text-slate-600 mb-1',
                button: 'flex w-full justify-center rounded-md border-0 bg-green-500 text-lg tracking-tight font-bold text-white hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-0',
                containerPayment: 'w-full grid grid-cols-1 lg:grid-cols-2 gap-3 px-2 mt-4',
                containerIcon: 'absolute left-0 top-0 h-[38px] w-[32px] ml-[2px] flex items-center justify-center text-slate-500',
                containerInputIcon: 'relative w-full h-[40px]',
                footerFlagImg: 'mr-1 h-[24px] w-[36px]',
                discount: {
                    input: 'h-[32px] border border-slate-300 text-gray-600 text-xs bg-white placeholder-gray-400 focus:border-indigo-400 grow rounded py-2 px-2.5 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                    button: 'h-[32px] flex justify-center items-center rounded border-0 bg-indigo-600 text-xs tracking-tight font-bold min-w-[80px] text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0',
                },
                step: {
                    container: 'lg:col-span-2 flex items-center gap-x-2 mb-2',
                    number: 'text-sm font-semibold text-white bg-green-500 rounded-full flex items-center justify-center w-5 h-5',
                    text: 'text-base font-semibold text-slate-700'
                },
                tabs: {
                    default: 'text-sm bg-white flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-1 w-[29%] lg:w-1/6 px-4 py-2.5 lg:py-4 font-semibold rounded-md border hover:border-indigo-600 hover:text-indigo-500 transition duration-300',
                    selected: 'border-indigo-600 text-indigo-500',
                    notSelected: 'border-slate-400 text-gray-500 opacity-70 grayscale',
                }
            },

            icons: {
                user: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>`,

                email: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>`,

                phone: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>`,

                card: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>`,

                pix: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g fill="#32bcad" fill-rule="evenodd">
                        <path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z"/>
                        <path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868"/>
                    </g>
                </svg>`,

                billet: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 18V6h16v12z"></path>
                    <path d="M6 8h2v8H6zm3 0h1v8H9zm8 0h1v8h-1zm-4 0h3v8h-3zm-2 0h1v8h-1z"></path>
                </svg>
                `,

                lock: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                </svg>`,

                ticket: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>`,

                chevronDown: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>`,
            }
        }
    },
    methods: {
        paymentCreditCard() { this.tab = 1; },
        paymentPix() { this.tab = 2; },
        paymentBillet() { this.tab = 3; },
    },

    mounted() {
        document.title = 'Checkout – Pepper'
    }
}

</script>

<template>
    <div class="h-10 w-full flex gap-2 lg:gap-3 items-center justify-center bg-slate-800 px-4">
        <div class="rounded-full w-4 h-4 lg:w-5 lg:h-5 aspect-square bg-green-600 text-white flex items-center justify-center">
            <div v-html="icons.lock" class="w-2.5 h-2.5 lg:w-3 lg:h-3"></div>
        </div>
        <span class="text-white text-xs lg:text-sm font-bold uppercase tracking-wide">Este é um ambiente 100% seguro.</span>
    </div>


    <div id="checkout-container" class="w-full flex flex-col xl:flex-row xl:justify-center">

        <!-- Left Column -->
        <div :class="[checkoutHas2Columns ? 'w-full xl:w-2/3 xl:px-6 max-w-3xl' : 'w-full max-w-3xl mx-auto', Classes.checkoutLeftColumn]">
            <!-- Checkout Banner -->
            <img :src="BannerImg" class="w-full rounded-lg" />
            <!-- Payment form container -->
            <div :class="Classes.containerPayment">

                <div :class="Classes.step.container">
                    <div :class="Classes.step.number">1</div>
                    <div :class="Classes.step.text">Suas informações</div>
                </div>

                <div class="lg:col-span-2">
                    <label :class="Classes.label">
                        Nome completo:
                    </label>
                    <div :class="Classes.containerInputIcon">
                        <input :class="Classes.inputHasIcon" required inputmode="text" type="text" />
                        <div v-html="icons.user" :class="Classes.containerIcon"></div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <label :class="Classes.label">
                        Digite seu e-mail:
                    </label>
                    <div :class="Classes.containerInputIcon">
                        <input :class="Classes.inputHasIcon" required inputmode="email" type="email" />
                        <div v-html="icons.email" :class="Classes.containerIcon"></div>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <label :class="Classes.label">
                        Celular:
                    </label>
                    <div :class="Classes.containerInputIcon">
                        <input :class="Classes.inputHasIcon" required inputmode="tel" type="text" />
                        <div v-html="icons.phone" :class="Classes.containerIcon"></div>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <label :class="Classes.label">
                        CPF:
                    </label>
                    <input :class="Classes.input" type="text" required inputmode="tel" />
                </div>

                <div class="lg:col-span-2 pt-4">
                    <div class="w-full rounded bg-gray-50 border border-gray-150 hover:border-indigo-300 transition duration-700">
                        <div @click="isOpenDiscountCoupon = !isOpenDiscountCoupon" class="flex gap-2 px-3 py-3.5 items-center justify-between cursor-pointer">
                            <div class="inline-flex gap-2 items-center justify-start">
                                <div v-html="icons.ticket" class="w-4 h-4 text-slate-500 rotate-[325deg]"></div>
                                <span class="text-sm text-indigo-500 font-medium">Tem um cupom de desconto?</span>
                            </div>
                            <div class="inline-flex items-center justify-center ml-auto mr-1 transition duration-500">
                                <span v-html="icons.chevronDown" :class="[isOpenDiscountCoupon ? 'rotate-180' : 'rotate-0', 'w-4 h-4']"></span>
                            </div>
                        </div>
                        <div :class="[isOpenDiscountCoupon ? 'h-auto opacity-100 flex items-center justify-start gap-1 translate-y-0 pb-4' : 'none h-0 opacity-0 -translate-y-2', 'flex transition duration-500 w-full px-4']">
                            <input :class="Classes.discount.input" type="text" required inputmode="text" placeholder="Digite o código do cupom" />
                            <button :class="Classes.discount.button">
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>

                <div :class="Classes.step.container" class="mt-4">
                    <div :class="Classes.step.number">2</div>
                    <div :class="Classes.step.text">Dados de pagamento</div>
                </div>

                <div class="flex justify-start gap-x-2 lg:col-span-2">
                    <button
                        @click="paymentCreditCard"
                        :class="[Classes.tabs.default, tab == 1 ? Classes.tabs.selected : Classes.tabs.notSelected]">
                        <span v-html="icons.card" class='w-5 h-5'></span>
                        Cartão
                    </button>
                    <button
                        @click="paymentPix"
                        :class="[Classes.tabs.default, tab == 2 ? Classes.tabs.selected : Classes.tabs.notSelected]">
                        <span v-html="icons.pix" class='w-5 h-5'></span>
                        PIX
                    </button>
                    <button
                        @click="paymentBillet"
                        :class="[Classes.tabs.default, tab == 3 ? Classes.tabs.selected : Classes.tabs.notSelected]">
                        <span v-html="icons.billet" class='w-5 h-5'></span>
                        Boleto
                    </button>
                </div>

                <div class="lg:col-span-2 grid grid-cols-3 gap-3 gap-x-2 mt-2 mb-2" v-show="tab === 1">

                    <div class="col-span-3">
                        <label :class="Classes.label">
                            Número do cartão:
                        </label>
                        <div :class="Classes.containerInputIcon">
                            <input :class="Classes.input" required inputmode="text" type="text" />
                        </div>
                    </div>

                    <div class="col-span-3">
                        <label :class="Classes.label">
                            Nome impresso no cartão:
                        </label>
                        <div :class="Classes.containerInputIcon">
                            <input :class="Classes.input" required inputmode="text" type="text" />
                        </div>
                    </div>

                    <div class="col-span-1">
                        <label :class="Classes.label">
                            Mês:
                        </label>
                        <div :class="Classes.containerInputIcon">
                            <input :class="Classes.input" required inputmode="text" type="text" />
                        </div>
                    </div>

                    <div class="col-span-1">
                        <label :class="Classes.label">
                            Ano:
                        </label>
                        <div :class="Classes.containerInputIcon">
                            <input :class="Classes.input" required inputmode="text" type="text" />
                        </div>
                    </div>

                    <div class="col-span-1">
                        <label :class="Classes.label">
                            CVV:
                        </label>
                        <div :class="Classes.containerInputIcon">
                            <input :class="Classes.inputHasIcon" required maxlength="4" inputmode="text" type="text" />
                            <div v-html="icons.lock" class="w-4 absolute top-0 left-0 h-[36px] flex items-center justify-center mx-2 text-slate-500"></div>
                        </div>
                    </div>

                    <div class="col-span-3">
                        <label :class="Classes.label">
                            Parcelamento:
                        </label>
                        <select v-model="selectedInstallment" :class="Classes.input">
                            <template v-for="inst in installment">
                                <option :value="inst.installments">{{ inst.text }}</option>
                            </template>
                        </select>
                    </div>
                </div>

                <div class="lg:col-span-2" v-show="tab === 2">
                    Pague no PIX
                </div>

                <div class="lg:col-span-2" v-show="tab === 3">
                    Boleto bancário
                </div>

                <!-- Buy Button -->
                <div class="lg:col-span-2">
                    <button id="buyBtn" :class="Classes.button" @click="onPurchase">
                        Comprar agora
                    </button>
                    <span class="block mt-4 text-center text-xs font-medium tracking-wide text-slate-400">
                        Você está em um ambiente seguro.
                    </span>
                </div>
            </div>

            <div class="flex gap-5 lg:gap-6 xl:gap-8 flex-col md:flex-row items-center justify-center mt-6 mb-4">
                <div class="flex items-center gap-2 text-sm font-semibold text-slate-600 tracking-tight">
                    <div v-html="icons.lock" class="w-4 h-4 text-slate-600 mt[-2px]"></div>
                    Pagamento seguro
                </div>
                <div class="flex flex-row items-center">
                    <img :class="Classes.footerFlagImg" alt="visa" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#visa" />
                    <img :class="Classes.footerFlagImg" alt="mastercard" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#mastercard" />
                    <img :class="Classes.footerFlagImg" alt="elo" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#elo" />
                    <img :class="Classes.footerFlagImg" alt="hipercard" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#hipercard" />
                    <img :class="Classes.footerFlagImg" alt="amex" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#amex" />
                    <img :class="Classes.footerFlagImg" alt="discover" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#discover" />
                    <img :class="Classes.footerFlagImg" alt="jcb" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#jcb" />
                    <div :class="Classes.footerFlagImg" alt="pix" class="aspect-video flex items-center justify-center bg-white rounded-[2px] border-2 border-[#d4dbe0]">
                        <span v-html="icons.pix" class='w-4 h-4'></span>
                    </div>
                    <img :class="Classes.footerFlagImg" alt="boleto" src="https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#boleto" />
                </div>
            </div>
        </div>

        <!-- Right column -->
        <div v-if="checkoutHas2Columns" :class="['w-full xl:w-1/3 max-w-lg xl:pl-5 xl:border-l xl:border-zinc-200', Classes.checkoutRightColumn]">

            <!-- Checkout badges -->
            <template v-for="badge in CheckoutBadges">
                <div v-if="badge.isShown" class="flex items-center justify-start gap-2 rounded-md bg-white px-3 py-3.5 lg:px-3.5 border border-zinc-300">
                    <span v-html="badge.icon" class="w-5 h-5 text-indigo-500"></span>
                    <div>
                        <span class="block text-base font-bold text-slate-600 tracking-tighter">
                            {{ badge.title }}
                        </span>
                        <span class="block text-xs font-medium text-gray-400">
                            {{ badge.body }}
                        </span>
                    </div>
                </div>
            </template>

            <div class="mt-4 flex flex-col gap-3">
                <span class="text-xs text-gray-400 block">
                    Esta compra é processada por Pepper Tecnologia e Pagamentos Ltda. *Taxa de 2,99% a.m.
                    <a href="#" class="text-xs text-gray-400 hover:text-indigo-500 transition duration-500">Termos de uso e privacidade</a>
                </span>
                <span class="text-xs text-gray-400 block">Dúvidas? Entre em contato com o produtor: <a href="mailto:contato@produtor" class="text-xs ml-1 underline text-gray-500 font-medium hover:text-indigo-500 transition duration-500">contato@produtor.uy</a></span>
            </div>

        </div>
    </div>

    <TransitionRoot appear :show="openLoader" as="template">
        <Dialog as="div" @close="closeLoader" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div @click="closeLoader" class="fixed inset-0 bg-zinc-50 bg-opacity-90"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden p-6 text-center align-middle transition-all overflow-visible">
                            <!-- Spinner -->
                            <div class="relative w-full h-16 block mb-6">
                                <div class="pepper-spinner w-16 h-16"></div>
                                <div class="w-16 h-full mt-1 absolute top-0 flex items-center justify-center" style="left: calc(50% - 2rem)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -mt-1 text-slate-800">
                                        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h3 class="inline-flex text-lg font-bold leading-6 text-slate-700">
                                Processando sua compra
                            </h3>
                            <span class="loading text-base lg:text-lg font-bold leading-6 text-slate-700 w-8 inline-block text-left"></span>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>

<style>
body,
html,
:root {
    --prealoder-border: rgb(60 162 110);
    /* background-color: #e8e8e8; */
    background-color: #fff;
    color: #999;
}

svg {
    max-width: 100% !important;
}

#buyBtn {
    box-shadow: inset 0 -3px 0px 0px rgb(0, 0, 0, 0.1);
    padding: 0.75rem 1.25rem 0.9rem 1.25rem;
    /* background: #466ee5; */
    background: #1fae39;
}

.input-shadow:focus {
    box-shadow: rgb(229, 229, 251) 0px 2px 0.25rem 0px !important
}

/* Loader animation */
.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ellipsis steps(4, end) 1200ms infinite;
    animation: ellipsis steps(4, end) 1200ms infinite;
    content: "\2026";
    width: 0px;
}

.pepper-spinner {
    display: inline-block;
    border-top: 2px solid var(--prealoder-border);
    border-left: 2px solid var(--prealoder-border);
    border-right: 1px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        -webkit-transform: rotate(360deg)
    }
}

@-webkit-keyframes spin {
    to {
        -webkit-transform: rotate(360deg)
    }
}

@keyframes ellipsis {
    to {
        width: 1.25em;
    }
}

@-webkit-keyframes ellipsis {
    to {
        width: 1.25em;
    }
}
</style>