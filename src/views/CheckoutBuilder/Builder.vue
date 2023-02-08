<script setup>
import { PencilSquareIcon, Bars3Icon, ComputerDesktopIcon, LockClosedIcon, DevicePhoneMobileIcon, CheckIcon, ArrowUpIcon, ArrowDownIcon, TrashIcon } from '@heroicons/vue/20/solid'
</script>

<script type="text/javascript">

import GuyLaptopIllustrationImg from '@/assets/img/illustration/illustration-guy-laptop.png';

// Mock images
import BannerImg from '@/assets/img/mock/checkout-banner.png';

// Components
import CheckoutFormPlaceholder from "@/components/CheckoutBuilder/CheckoutFormPlaceholder.vue";
import Badges from "@/components/Badges.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";
import FooterDisclaimer from "@/components/FooterDisclaimer.vue";
import FooterPaymentLabels from "@/components/FooterPaymentLabels.vue";
import OrderBump from "@/components/OrderBump.vue";
import TabMain from "@/components/CheckoutBuilder/TabMain.vue";
import TabBuilderComponent from "@/components/CheckoutBuilder/TabBuilderComponent.vue";

import draggable from "vuedraggable";

export default {
    components: {
        CheckoutFormPlaceholder,
        FooterDisclaimer,
        FooterPaymentLabels,
        Badges,
        CountdownTimer,
        OrderBump,
        TabMain,
        TabBuilderComponent,
        draggable,
    },
    name: "clone",
    display: "Clone",
    order: 1,

    data() {
        return {
            pepper: this.pepper,
            preview: 'desktop',
            tab: 'TabMain',
            isMenuOpen: true,

            Elements: {
                List: {
                    title: 'O que você irá aprender com este curso:',
                    ul: [
                        { li: 'Como se tornar um profissional altamente requisitado no mercado.' },
                        { li: 'Aprenda técnicas que irão decolar a sua carreira.' },
                        { li: 'Conquiste um salário de até R$7.072,84 na sua área.' },
                        { li: 'Saiba como ser promovido a função que você tanto almeja.' }
                    ]
                },

            }
        }
    },
    methods: {
        changePreviewMode(mode) { this.preview = mode },
        changeTab(data) { this.tab = data },

        checkMove: function (evt) {
            return (evt.draggedContext.element.name !== 'apple');
        }
    },

    mounted() {
        document.title = 'Checkout Builder – Pepper';
    }
}
</script>

<template>

    <!-- Top fixed -->
    <div class="w-full flex gap-2 lg:gap-3 items-center justify-center lg:justify-between bg-[#120f1e] px-4 h-[3.5rem]">

        <div class="flex flex-row items-center gap-3">
            <button @click="isMenuOpen = !isMenuOpen" class="hidden lg:flex lg:items-center lg:justify-center p-1.5 rounded-md bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-0 transition duration-500">
                <Bars3Icon class="w-6 h-6 text-gray-500" />
            </button>

            <span class="text-white text-base font-bold leading-4 tracking-tight">Checkout Builder</span>
        </div>

        <div class="hidden lg:flex lg:items-center lg:gap-3">
            <span class="text-sm text-gray-300 font-medium">Visualizar:</span>
            <div class="flex items-center">
                <button
                    @click="changePreviewMode('desktop')"
                    class="px-3 py-2 text-xs font-medium border cursor-pointer rounded-l-md transition duration-500 hover:bg-indigo-500 border-indigo-500 border-r-0 inline-flex items-center gap-1"
                    :class="[preview === 'desktop' ? 'text-white bg-indigo-500' : 'text-gray-50 bg-transparent']">
                    <ComputerDesktopIcon class="w-3.5 h-3.5" />
                    Desktop
                </button>
                <button
                    @click="changePreviewMode('mobile')"
                    class="px-3 py-2 text-xs font-medium border cursor-pointer rounded-r-md transition duration-500 hover:bg-indigo-500 border-l-0 border-indigo-500 inline-flex items-center gap-1"
                    :class="[preview === 'mobile' ? 'text-white bg-indigo-500' : 'text-gray-50 bg-transparent']">
                    <DevicePhoneMobileIcon class="w-3.5 h-3.5" />
                    Mobile
                </button>
            </div>
        </div>
    </div>

    <!-- Fallback for small devices -->
    <div class="lg:hidden flex flex-col w-full gap-4 items-center justify-center px-5" style="height: calc(100vh - 3.5rem)">
        <img :src="GuyLaptopIllustrationImg" class="w-full max-w-xs mb-4" />
        <span class="text-2xl font-bold text-slate-700 tracking-tight leading-6 text-center block">
            Ops... Seu dispositivo é muito pequeno!
        </span>
        <span class="text-sm font-medium text-slate-500 text-center block">
            Acesse em um dispositivo de maior resolução para editar o checkout builder dos seus produtos!
        </span>
        <button class="pepper-btn pepper-btn-blue max-w-xs mt-3">
            Voltar para a Dashboard
        </button>
    </div>
    <!-- End Fallback for small devices -->

    <div class="w-full hidden lg:flex lg:flex-row lg:justify-between overflow-hidden" style="height: calc(100vh - 3.5rem)">

        <!-- Sidebar -->
        <div class="w-full max-w-[16rem] xl:max-w-[18rem] 2xl:max-w-[19rem] z-30 pt-4 pb-10 px-4 flex flex-col gap-4 bg-slate-50 border-r border-slate-200 fixed h-full overflow-y-auto transition duration-700" :class="[isMenuOpen ? 'translate-x-0' : '-translate-x-80']">

            <!-- Tab Menu -->
            <TabMain @changeTab="changeTab" v-show="tab === 'TabMain'" />

            <!-- Back button -->
            <button class="pepper-back-button" v-if="tab !== 'TabMain'" @click="changeTab('TabMain')">
                Voltar
            </button>

            <!-- Tab Image -->
            <div class="w-full flex flex-col gap-2 mx-auto" v-show="tab === 'TabImage'">
                <div class="row">
                    <div class="w-1/2 rounded border border-slate-300">
                        <draggable
                            :group="{ name: 'people', pull: 'clone', put: false }"
                            :sort="false"
                            @change="log"
                            class="dragArea list-group"
                            :move="checkMove"
                            item-key="id"
                            ghost-class="ghost"
                            v-model="checkoutElements">
                            <template #item="{ element }">
                                <div>{{ element.element }}</div>
                            </template>
                        </draggable>
                    </div>
                </div>
                <div class="mt-40 border border-indigo-600 min-h-[20rem] rounded">
                    <draggable
                        class="dragArea list-group"
                        :list="addedElements"
                        group="people"
                        item-key="id"
                        @change="log">
                        <template #item="{ element }">
                            <div class="list-group-item">
                                {{ element.element }}
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>

            <!-- Tab Testimonials -->
            <TabBuilderComponent title="Depoimentos" v-show="tab === 'TabTestimonials'">
            </TabBuilderComponent>

            <!-- Tab Order bumps -->
            <TabBuilderComponent title="Order Bumps" v-show="tab === 'TabOrderBumps'">
            </TabBuilderComponent>

            <!-- Tab Badges -->
            <TabBuilderComponent title="Adicionar selos" v-show="tab === 'TabBadges'">
            </TabBuilderComponent>

            <!-- Tab List -->
            <TabBuilderComponent title="Adicionar lista" v-show="tab === 'TabList'">
            </TabBuilderComponent>

            <!-- Tab Sales Notifications -->
            <TabBuilderComponent title="Notificações" v-show="tab === 'TabSalesNotifications'">
            </TabBuilderComponent>

            <!-- Tab Youtube Video -->
            <TabBuilderComponent title="Adicionar vídeo do YouTube" v-show="tab === 'TabEmbedVideo'">
            </TabBuilderComponent>

            <!-- Tab Text -->
            <TabBuilderComponent title=" Adicionar texto" v-show="tab === 'TabText'">
            </TabBuilderComponent>

            <!-- Tab Countdown -->
            <TabBuilderComponent title="Contagem regressiva" v-show="tab === 'TabCountdown'">
            </TabBuilderComponent>

            <!-- Tab Whatsapp -->
            <TabBuilderComponent title="Adicionar botão do WhatsApp" v-show="tab === 'TabWhatsapp'">
            </TabBuilderComponent>

            <!-- Tab Back Redirect -->
            <TabBuilderComponent title="Back Redirect" v-show="tab === 'TabBackRedirect'">
            </TabBuilderComponent>

        </div>


        <!-- Checkout preview -->
        <div class="overflow-y-scroll transition-all duration-700 w-full"
            :class="{ 'pl-[16rem] xl:pl-[18rem] 2xl:pl-[19rem]': isMenuOpen == true }">


            <div :class="{ 'pepper-preview-mobile': preview === 'mobile', 'w-full': preview === 'desktop' }" class="transition-all duration-700">

                <div :class="{ 'content': preview === 'mobile' }">
                    <!-- Countdown -->
                    <CountdownTimer />

                    <div class="w-full flex mx-auto" :class="{ 'flex-col': preview === 'mobile', 'flex-row grow': preview === 'desktop' }">

                        <div class="w-full pt-8 pb-12 flex flex-col gap-4"
                            :class="{ 'px-3': preview === 'mobile', 'max-w-3xl lg:px-6 lg:ml-auto lg:w-2/3': preview === 'desktop' }">

                            <!-- Checkout Banner -->
                            <img :src="BannerImg" class="w-full rounded-lg" />

                            <!-- Payment form container -->
                            <div class="w-full gap-3 mt-4">
                                <CheckoutFormPlaceholder />

                                <!-- Order bumps -->
                                <OrderBump />

                                <!-- Button -->
                                <div class="my-2 flex items-center justify-center rounded-md py-3 text-white text-base tracking-tight font-bold" id="buyBtn">
                                    Comprar agora
                                </div>
                            </div>

                            <div class="flex items-center justify-center"
                                :class="{ 'flex-col gap-5': preview === 'mobile', 'xl:my-4 xl:gap-6 xl:gap-8 xl:flex-row': preview === 'desktop' }">
                                <div class="flex items-center gap-2 text-sm font-semibold text-slate-600 tracking-tight">
                                    <LockClosedIcon class="w-4 h-4 text-slate-600 -mt-[2px]" />
                                    Pagamento seguro
                                </div>
                                <FooterPaymentLabels />
                            </div>
                        </div>

                        <!-- Checkout Right column -->
                        <div class="max-w-[30rem] w-full pb-12 flex flex-col gap-5"
                            :class="{ 'px-3': preview === 'mobile', 'lg:pt-8 lg:px-6 lg:mr-auto lg:w-1/3 lg:border-l lg:border-zinc-200': preview === 'desktop' }">

                            <!-- Checkout List -->
                            <div class="checkout-builder-element-wrapper">
                                <div v-if="Elements.List && Elements.List !== []" class="flex flex-col items-start justify-start gap-2 rounded-md bg-[#eff4f9] px-3.5 py-4 lg:px-4 border border-slate-300">
                                    <span class="text-base text-zinc-700 font-bold tracking-tight block mb-2">
                                        {{ Elements.List.title }}
                                    </span>
                                    <template v-for="ul in Elements.List.ul">
                                        <li class="flex items-center justify-start gap-2 text-sm font-medium text-gray-700 leading-5">
                                            <CheckIcon class="w-4 h-4 text-green-500 stroke-1 stroke-current" />
                                            {{ ul.li }}
                                        </li>
                                    </template>
                                </div>

                                <div class="checkout-builder-element-actions">
                                    <button>
                                        <ArrowUpIcon />
                                    </button>
                                    <button>
                                        <ArrowDownIcon />
                                    </button>
                                    <button>
                                        <PencilSquareIcon />
                                    </button>
                                    <button>
                                        <TrashIcon />
                                    </button>
                                </div>
                            </div>

                            <!-- Checkout Badges -->
                            <Badges />

                            <!-- Footer disclaimer -->
                            <FooterDisclaimer />

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- End checkout preview -->

    </div>
</template>

<style>
body,
html,
:root {
    --prealoder-border: rgb(60 162 110);
    background-color: #fff;
    color: #999;
}

#buyBtn {
    box-shadow: inset 0 -4px 0px 0px rgb(0, 0, 0, 0.1);
    padding: 0.75rem 1.25rem 0.9rem 1.25rem;
    background: #1cc53b;
}

.input-shadow:focus {
    box-shadow: rgb(229, 229, 251) 0px 2px 0.25rem 0px !important
}

.orderbump-checkbox {
    cursor: pointer;
    color: #6366f1;
    transition: background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

/* Checkout preview */
.pepper-preview-mobile {
    position: relative;
    width: 392px;
    height: 759px;
    margin: 3rem auto 0;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    box-shadow: 5px 8px 40px -7px #01012e52;
    transition: margin .3s ease;
}

.pepper-preview-mobile:before {
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

.pepper-preview-mobile .content {
    width: 360px;
    height: 640px;
    background: white;
    overflow-x: hidden;
    overflow-y: auto;
}

.checkout-builder-element-wrapper {
    position: relative;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions {
    opacity: 0;
    transition: .3s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    margin: .75rem;
    box-shadow: 0 10px 15px -3px rgb(61 71 86 / 50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: .25rem;
    gap: 1px;
    background-color: rgb(29, 36, 49);
    border: 1px solid rgb(29, 36, 49);
}

.checkout-builder-element-wrapper:hover .checkout-builder-element-actions {
    opacity: 1;
    transition: .3s ease-in-out;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button {
    background-color: #090b0f;
    transition: .4s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button:hover {
    background-color: rgb(29, 36, 49);
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button svg {
    width: 0.9rem;
    height: 0.9rem;
    flex-shrink: 0;
    color: #fff;
    opacity: .95;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button:first-child svg,
.checkout-builder-element-wrapper .checkout-builder-element-actions button:nth-child(2) svg {
    stroke-width: 1;
    stroke: currentColor;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button:first-child {
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;
}

.checkout-builder-element-wrapper .checkout-builder-element-actions button:last-child {
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem;
}
</style>

