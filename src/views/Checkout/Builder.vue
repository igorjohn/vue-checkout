<script setup>

import { ref } from "vue";

import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'


let openLoader = ref(false);
function onPurchase() {
    openLoader.value = true;
}
function closeLoader() {
    openLoader.value = false;
}



</script>

<script type="text/javascript">

// Mock images
import BannerImg from '@/assets/img/mock/checkout-banner.png';
import OrderBump01 from '@/assets/img/mock/orderbump-01.jpeg';
import OrderBump02 from '@/assets/img/mock/orderbump-02.jpeg';

// Components
import CheckoutFormPlaceholder from "@/components/CheckoutFormPlaceholder.vue";
import CheckoutBuilderSidebar from "@/components/CheckoutBuilderSidebar.vue";



export default {
    components: {
        CheckoutFormPlaceholder,
        CheckoutBuilderSidebar,
    },

    data() {
        return {
            pepper: this.pepper,
            checkoutHas2Columns: true,

            preview: 'desktop',

            Elements: {
                Badges: [
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

                List: {
                    title: 'O que você irá aprender com este curso:',
                    ul: [
                        { li: 'Como se tornar um profissional altamente requisitado no mercado.' },
                        { li: 'Aprenda técnicas que irão decolar a sua carreira.' },
                        { li: 'Conquiste um salário de até R$7.072,84 na sua área.' },
                        { li: 'Saiba como ser promovido a função que você tanto almeja.' }
                    ]
                },

            },

            Classes: {
                checkoutLeftColumn: 'w-full max-w-3xl mx-auto pt-6 pb-8 lg:pb-10 px-3 flex flex-col gap-4',
                checkoutRightColumn: 'xl:pt-6 pb-12 px-3 flex flex-col gap-5',
                inputReadOnly: 'border border-slate-300 focus:border-slate-300 text-gray-700 text-sm bg-white placeholder-gray-400 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500 focus:ring-0 cursor-default',
                inputHasIcon: 'border border-slate-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-400 input-shadow w-full rounded-md py-2 pr-3 pl-8 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                label: 'block text-sm font-medium text-slate-600 mb-1',
                button: 'flex w-full justify-center rounded-md border-0 bg-green-500 text-lg tracking-tight font-bold text-white hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-0',
                containerPayment: 'w-full grid grid-cols-1 lg:grid-cols-2 gap-3 px-2 mt-4',
                containerIcon: 'absolute left-0 top-0 h-[38px] w-[32px] ml-[2px] flex items-center justify-center text-slate-500',
                containerInputIcon: 'relative w-full h-[40px]',
                footerFlagImg: 'mr-1 h-[24px] w-[36px]',
                orderBump: {
                    label: 'w-full flex flex-col grow-1 rounded-md mb-3 border-2 border-dashed border-red-600 hover:border-red-500 hover:shadow-lg transition duration-500 cursor-pointer',
                    titleWrapper: 'w-full bg-gray-200 flex items-center justify-center gap-1 px-3 py-2.5 rounded-t-md',
                    title: 'text-slate-900 text-base tracking-tight font-bold italic',
                    bodyWrapper: 'bg-zinc-50 px-3 pt-4 pb-5 lg:px-4 flex gap-3 flex-row items-start rounded-b',
                    checkbox: 'w-4 h-4 lg:w-5 lg:h-5 mt-[2px] rounded orderbump-checkbox ring-0 outline-none focus:ring-0 focus:ring-offset-0',
                    image: 'aspect-square block rounded w-12 h-12 object-cover shadow-lg',
                    h1: 'block text-slate-800 text-base tracking-tight font-bold -mt-[3px]',
                    p: 'block text-slate-600 text-sm font-medium mt-1',
                    price: 'block text-slate-500 text-xs font-medium mt-2'
                }
            },

            icons: {
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

                chevronDown: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>`,

                orderBumpArrow: `
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 512" preserveAspectRatio="xMidYMid meet" class="text-[#dc2626] w-8 pb-[0.15rem]" fill="currentColor">
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path d="m596.39 279.65c-0.0625-3.1133-1.4961-6.1758-3.8516-8.2227l-156.8-134.33c-3.2383-2.8125-8.1562-3.5117-12.051-1.7148-3.8945 1.7969-6.5469 5.9961-6.5 10.285v67.164h-302.39c-5.8633 0-11.199 5.332-11.199 11.195v111.94c0 5.8594 5.3359 11.191 11.199 11.195h302.39v67.164c-0.042968 4.2852 2.6055 8.4844 6.5 10.285 3.8945 1.7969 8.8125 1.0977 12.051-1.7148l156.8-134.32c2.5312-2.1953 3.9883-5.5742 3.8516-8.918z"></path>
                    </g>
                </svg>`,
            },



            OrderBumpProducts: [
                {
                    productId: 10012,
                    img: OrderBump01,
                    hasCustomText: true,
                    text: {
                        h1: 'Seja um Chef Foda!',
                        p: 'Compre este curso e aprenda todas as receitas que você sempre quis. Para amadores e profissionais que desejam aprender dotes culinários e crescer seu negócio.'
                    },
                    price: {
                        fake: 'R$ 899,90',
                        real: 'R$ 97,00'
                    }
                },
                {
                    productId: 10532,
                    img: OrderBump02,
                    hasCustomText: true,
                    text: {
                        h1: 'Conquiste uma nova profissão, com renda de até R$ 8.998,97',
                        p: 'Aprenda tudo que você precisa para se tornar o eletricista que o mercado precisa.'
                    },
                    price: {
                        fake: 'R$ 346,90',
                        real: 'R$ 72,00'
                    }
                },

            ],



        }
    },
    methods: {
        changePreviewMode(mode) {
            this.preview = mode;
        }
    },

    mounted() {
        document.title = 'Checkout Builder – Pepper'
    }
}



</script>

<template>

    <!-- Top fixed -->
    <div class="w-full flex gap-2 lg:gap-3 items-center justify-between bg-black px-4 h-[3.5rem]">

        <span class="text-white text-base font-bold tracking-tight">Checkout Builder</span>

        <div class="flex items-center gap-3">
            <span class="text-sm text-gray-300 font-medium">Visualizar:</span>

            <div class="flex items-center">
                <button
                    @click="changePreviewMode('desktop')"
                    class="px-3 py-2 text-xs font-medium border cursor-pointer rounded-l-md transition duration-500 hover:bg-indigo-600 hover:border-indigo-600 border-r-0 inline-flex items-center gap-1"
                    :class="[preview === 'desktop' ? 'text-white border-indigo-500 bg-indigo-500' : 'text-gray-50 border-indigo-500 bg-transparent']">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                        <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clip-rule="evenodd" />
                    </svg>
                    Desktop
                </button>
                <button
                    @click="changePreviewMode('mobile')"
                    class="px-3 py-2 text-xs font-medium border cursor-pointer rounded-r-md transition duration-500 hover:bg-indigo-600 hover:border-indigo-600 border-l-0 inline-flex items-center gap-1"
                    :class="[preview === 'mobile' ? 'text-white border-indigo-500 bg-indigo-500' : 'text-gray-50 border-indigo-500 bg-transparent']">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                        <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
                        <path fill-rule="evenodd" d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z" clip-rule="evenodd" />
                    </svg>
                    Mobile
                </button>
            </div>
        </div>
    </div>

    <div class="w-full flex flex-col lg:flex-row lg:justify-between overflow-hidden" style="height: calc(100vh - 3.5rem)">



        <CheckoutBuilderSidebar />


        <!-- Checkout preview -->
        <div class="w-full overflow-y-scroll lg:pl-[19rem]"
            :class="{ 'desktop': preview === 'desktop', 'mobile': preview === 'mobile' }">

            <!-- Top fixed -->
            <div class="w-full flex gap-2 lg:gap-3 items-center justify-center bg-slate-800 px-4 py-2.5">
                <div class="rounded-full w-4 h-4 lg:w-5 lg:h-5 aspect-square bg-green-600 text-white flex items-center justify-center">
                    <div v-html="icons.lock" class="w-2.5 h-2.5 lg:w-3 lg:h-3"></div>
                </div>
                <span class="text-white text-xs lg:text-sm font-bold uppercase tracking-wide">Este é um ambiente 100% seguro.</span>
            </div>


            <div class="w-full flex lg:flex-row mx-auto lg:grow">
                <div class="w-full max-w-3xl pt-8 pb-12 px-6 flex flex-col gap-4 lg:ml-auto lg:w-2/3">

                    <!-- Checkout Banner -->
                    <img :src="BannerImg" class="w-full rounded-lg" />


                    <!-- Payment form container -->
                    <div class="w-full gap-3 mt-4">

                        <CheckoutFormPlaceholder />

                        <div class="my-2">

                            <!-- Order bump -->
                            <template v-for="ob in OrderBumpProducts">
                                <label :class="Classes.orderBump.label">
                                    <span :class="Classes.orderBump.titleWrapper">
                                        <div v-html="icons.orderBumpArrow"></div>
                                        <span :class="Classes.orderBump.title">
                                            Sim, quero levar também!
                                        </span>
                                    </span>
                                    <div :class="Classes.orderBump.bodyWrapper">
                                        <input type="checkbox" :class="Classes.orderBump.checkbox" />
                                        <img :src="ob.img" :class="Classes.orderBump.image" />
                                        <div>
                                            <span :class="Classes.orderBump.h1">
                                                {{ ob.text.h1 }}
                                            </span>
                                            <span :class="Classes.orderBump.p">
                                                {{ ob.text.p }}
                                            </span>
                                            <span :class="Classes.orderBump.price">
                                                De <span class="line-through">{{ ob.price.fake }}</span> por {{ ob.price.real }}
                                            </span>
                                        </div>
                                    </div>
                                </label>
                            </template>
                            <!-- End Order bump -->
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

                <!-- Checkout Right column -->
                <div v-if="checkoutHas2Columns" class="max-w-xl mr-auto w-full w-1/3 border-l border-zinc-200 pt-8 pb-12 px-6 flex flex-col gap-5">

                    <!-- Checkout List -->
                    <div v-if="Elements.List && Elements.List !== []" class="flex flex-col items-start justify-start gap-2 rounded-md bg-[#eff4f9] px-3.5 py-4 lg:px-4 border border-indigo-400">
                        <span class="text-base text-indigo-600 font-bold tracking-tight block mb-2">
                            {{ Elements.List.title }}
                        </span>
                        <template v-for="ul in Elements.List.ul">
                            <li class="flex items-center justify-start gap-2 text-sm font-medium text-gray-700 leading-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1.5" class="w-4 h-4 shrink-0 text-green-500">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                {{ ul.li }}
                            </li>
                        </template>
                    </div>

                    <!-- Checkout Badges -->
                    <div v-if="Elements.Badges && Elements.Badges !== []" class="flex flex-col gap-2">
                        <div v-for="badge in Elements.Badges">
                            <div v-if="badge.isShown" class="flex items-center justify-start gap-2 rounded-md bg-white px-3 py-3.5 lg:px-3.5 border border-zinc-300">
                                <span v-html="badge.icon" class="w-5 h-5 text-indigo-500"></span>
                                <div>
                                    <span class="block text-base lg:text-sm font-bold text-slate-600 tracking-tighter">
                                        {{ badge.title }}
                                    </span>
                                    <span class="block text-xs font-medium text-gray-400">
                                        {{ badge.body }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer disclaimer -->
                    <div class="mt-4 flex flex-col gap-3 xl:gap-2">
                        <span class="text-xs text-gray-500 block">
                            Esta compra é processada por Pepper Tecnologia e Pagamentos Ltda. *Taxa de 2,99% a.m.
                        </span>
                        <span class="text-xs text-gray-500 block">
                            Ao continuar nesta compra, você concorda com os
                            <a href="#" class="text-gray-600 hover:text-indigo-600 transition duration-500">Termos de uso e privacidade</a>
                        </span>
                        <span class="text-xs text-gray-500 block">
                            Dúvidas? Entre em contato com o produtor:
                            <a href="mailto:contato@produtor" class="text-xs md:ml-1 underline text-gray-600 font-medium hover:text-indigo-500 transition duration-500">contato@produtor.uy</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <!-- End checkout preview -->



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
    background-color: #fff;
    color: #999;
}

svg {
    max-width: 100% !important;
}

#buyBtn {
    box-shadow: inset 0 -3px 0px 0px rgb(0, 0, 0, 0.1);
    padding: 0.75rem 1.25rem 0.9rem 1.25rem;
    background: #1fae39;
}

.input-shadow:focus {
    box-shadow: rgb(229, 229, 251) 0px 2px 0.25rem 0px !important
}

.orderbump-checkbox {
    cursor: pointer;
    color: #6366f1;
    transition: background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
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

/* Accordion */
.accordion {
    list-style: none;
    margin: 0;
    padding: 0;
}

.accordion__item:last-child {
    border-bottom: none;
}

.accordion__item {
    cursor: pointer;
    padding: 10px 20px 10px 40px;
    border-bottom: 1px solid #ebebeb;
    position: relative;
}

.accordion__trigger {
    display: flex;
    justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}

/* Checkout preview */
.preview-mobile {
    position: relative;
    width: 392px;
    height: 759px;
    margin-left: calc(19rem + (100% - 19rem - 392px)/2);
    margin-top: 3rem;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    box-shadow: 5px 8px 40px -7px #01012e52;
    transition: margin .3s ease;
}

.preview-mobile:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
}

.preview-mobile .content {
    width: 360px;
    height: 640px;
    background: white;
    overflow-y: auto;
}
</style>

