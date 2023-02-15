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

import Notification from "@/components/Notification.vue"

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
        },




        getVideoDuration() {
            let video = document.querySelector('video');

            const videoDuration = video.duration;

            var realProgress = 0;
            var currentWatched;
            let videoStarted = false;
            let fakeProgress;

            document.querySelector('video').ontimeupdate = function () {
                getPercentage();
            };


            function getPercentage() {

                currentWatched = video.currentTime;
                realProgress = parseFloat(((currentWatched / videoDuration) * 100).toFixed(2));

                // is 0
                if ((!videoStarted) && (realProgress > 0)) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'playStart'
                    });



                    /*  for (let i = 0; i < installments; i++) {
             n += i + 0.5;
         } */


                    // 1; 2; 4; 6; 8; 11; 13; 15; 18; 21






                    if (realProgress >= 0 && realProgress < 10) {
                        console.log('percentage MAIOR QUE 0')
                        document.querySelector('#videoProgress').style.width = (realProgress * 21 / 10) + "%"
                    }

                    if (realProgress >= 10) {
                        console.log('percentage MAIOR QUE 10')
                        document.querySelector('#videoProgress').style.width = (realProgress * 18 / 10) + "%"
                    }

                    if (realProgress >= 70) {
                        step = 0.05
                    }




                }


            }



        }


    },

    mounted() {
        document.title = 'Checkout Builder – Pepper';
    }
}
</script>

<template>


    <!-- Top fixed -->
    <div class="w-full fixed top-0 z-30 flex gap-2 lg:gap-3 items-center justify-center lg:justify-between bg-[#120f1e] px-4 h-[3.5rem]">

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
    <div class="lg:hidden flex flex-col w-full gap-4 items-center justify-center px-5 mt-[3.5rem]" style="height: calc(100vh - 3.5rem)">
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

    <div class="w-full hidden lg:flex lg:flex-row lg:justify-between mt-[3.5rem]" style="height: calc(100vh - 3.5rem)">

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
        <div class="transition-all duration-700 w-full"
            :class="{ 'pl-[16rem] xl:pl-[18rem] 2xl:pl-[19rem]': isMenuOpen == true }">


            <div :class="{ 'pepper-preview-mobile': preview === 'mobile', 'w-full': preview === 'desktop' }" class="transition-all duration-700">

                <div :class="{ 'content': preview === 'mobile' }" class="flex flex-col">
                    <!-- Countdown -->
                    <CountdownTimer />

                    <div class="w-full flex mx-auto" :class="{ 'flex-col': preview === 'mobile', 'flex-row grow': preview === 'desktop' }">

                        <div class="w-full pt-8 pb-12 flex flex-col gap-4"
                            :class="{ 'px-3': preview === 'mobile', 'max-w-3xl lg:px-6 lg:ml-auto lg:w-2/3': preview === 'desktop' }">


                            <!-- Player -->
                            <!-- https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4 -->
                            <div class="relative rounded-md overflow-hidden aspect-video">
                                <video @click="getVideoDuration" id="my-video" class="video-js" controls preload="auto" poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" data-setup='' loop>
                                    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type='video/mp4'>
                                </video>
                            </div>

                            <div class="w-full h-2 bg-zinc-800">
                                <div id="videoProgress" class="h-2 w-1 bg-indigo-500" style="transition-property: linear">

                                </div>
                            </div>

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

    <Notification />

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






/* Video */
.video-js .vjs-big-play-button:before,
.video-js .vjs-control:before,
.video-js .vjs-modal-dialog,
.vjs-modal-dialog .vjs-modal-dialog-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Ionicons", "Questrial" !important;
    cursor: pointer;
}

.video-js .vjs-big-play-button:before,
.video-js .vjs-control:before {
    text-align: center;
}

.vjs-icon-play:before,
.video-js .vjs-big-play-button:before,
.video-js .vjs-play-control:before {
    content: "\f488";
}

.vjs-icon-play-circle:before {
    content: "\f488";
}

.vjs-icon-pause:before,
.video-js .vjs-play-control.vjs-playing:before {
    content: "\f478";
}

.vjs-icon-volume-mute:before,
.video-js .vjs-mute-control.vjs-vol-0:before,
.video-js .vjs-volume-menu-button.vjs-vol-0:before {
    content: "\f3b8";
}

.vjs-icon-volume-low:before,
.video-js .vjs-mute-control.vjs-vol-1:before,
.video-js .vjs-volume-menu-button.vjs-vol-1:before {
    content: "\f258";
}

.vjs-icon-volume-mid:before,
.video-js .vjs-mute-control.vjs-vol-2:before,
.video-js .vjs-volume-menu-button.vjs-vol-2:before {
    content: "\f259";
}

.vjs-icon-volume-high:before,
.video-js .vjs-mute-control:before,
.video-js .vjs-volume-menu-button:before {
    content: "\f257";
}

.vjs-icon-fullscreen-enter:before,
.video-js .vjs-fullscreen-control:before {
    content: "\f3d8";
}

.vjs-icon-fullscreen-exit:before,
.video-js.vjs-fullscreen .vjs-fullscreen-control:before {
    content: "\f3d0";
}

.vjs-icon-square:before {
    content: "\f371";
}

.vjs-icon-spinner:before {
    content: "\f29c";
}

.vjs-icon-subtitles:before,
.video-js .vjs-subtitles-button:before {
    content: "\f3fa";
}

.vjs-icon-captions:before,
.video-js .vjs-captions-button:before {
    content: "\f3fa";
}

.vjs-icon-chapters:before,
.video-js .vjs-chapters-button:before {
    content: "\f453";
}

.vjs-icon-share:before {
    content: "\f3ac";
}

.vjs-icon-cog:before {
    content: "\f43d";
}

.vjs-icon-circle:before,
.video-js .vjs-mouse-display:before,
.video-js .vjs-play-progress:before,
.video-js .vjs-volume-level:before {
    content: '';
}

.vjs-icon-circle-outline:before {
    content: "";
}

.vjs-icon-circle-inner-circle:before {
    content: "";
}

.vjs-icon-hd:before {
    content: "\f4cd";
}

.vjs-icon-cancel:before,
.video-js .vjs-control.vjs-close-button:before {
    content: "\f406";
}

.vjs-icon-replay:before {
    content: "\f49c";
}

.vjs-icon-facebook:before {
    content: "\f231";
}

.vjs-icon-gplus:before {
    content: "\f235";
}

.vjs-icon-linkedin:before {
    content: "";
}

.vjs-icon-twitter:before {
    content: "\f243";
}

.vjs-icon-tumblr:before {
    content: "\f241";
}

.vjs-icon-pinterest:before {
    content: "\f2b1";
}

.vjs-icon-audio-description:before {
    content: "";
}

.video-js {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    vertical-align: top;
    box-sizing: border-box;
    color: #fff;
    background: #000;
    position: absolute;
    padding: 0;
    font-size: 10px;
    line-height: 1;
    font-weight: normal;
    font-style: normal;
    font-family: "Ionicons", "Questrial" !important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
}

.video-js:-moz-full-screen {
    position: absolute;
}

.video-js:-webkit-full-screen {
    width: 100% !important;
    height: 100% !important;
}

.video-js *,
.video-js *:before,
.video-js *:after {
    box-sizing: inherit;
}

.video-js ul {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    list-style-position: outside;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
}

.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {
    width: 100%;
    max-width: 100%;
    height: 0;
}

.video-js.vjs-16-9 {
    padding-top: 56.25%;
}

.video-js.vjs-4-3 {
    padding-top: 75%;
}

.video-js.vjs-fill {
    width: 100%;
    height: 100%;
}

.video-js .vjs-tech {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

body.vjs-full-window {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-y: auto;
}

.vjs-full-window .video-js.vjs-fullscreen {
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}

.video-js.vjs-fullscreen {
    width: 100% !important;
    height: 100% !important;
    padding-top: 0 !important;
}

.video-js.vjs-fullscreen.vjs-user-inactive,
.vjs-user-inactive {
    cursor: none;
}

.vjs-hidden {
    display: none !important;
}

.video-js .vjs-offscreen {
    height: 1px;
    left: -9999px;
    position: absolute;
    top: 0;
    width: 1px;
}

.vjs-lock-showing {
    display: block !important;
    opacity: 1;
    visibility: visible;
}

.vjs-no-js {
    padding: 20px;
    color: #fff;
    background-color: #000;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 300px;
    height: 150px;
    margin: 0px auto;
}

.vjs-no-js a,
.vjs-no-js a:visited {
    color: #66A8CC;
}

.video-js .vjs-big-play-button {
    font-size: 600%;
    line-height: 100px;
    height: 100px;
    width: 100px;
    display: block;
    position: absolute;
    text-indent: 5px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    padding: 0;
    text-align: center;
    cursor: pointer;
    background: rgba(0, 0, 0, .15);
    color: #fff;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    outline: none;
    -webkit-backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
    backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
}

/*.video-js .vjs-big-play-button:after {
	content: 'Interstellar';
	font-family: 'Questrial';
	font-size: 35%;
	line-height: 38px;
	height: auto;
	width: auto;
	position: absolute;
	top: 5px;
	left: 100px;
	padding: 0 15px;
	text-align: center;
	background: #111;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1),0 2px 10px 0 rgba(0,0,0,0.1);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}*/

.vjs-controls-disabled .vjs-big-play-button,
.vjs-has-started .vjs-big-play-button,
.vjs-using-native-controls .vjs-big-play-button,
.vjs-error .vjs-big-play-button {
    display: none;
}

.video-js button {
    background: none;
    border: none;
    color: inherit;
    display: inline-block;
    overflow: visible;
    font-size: inherit;
    line-height: inherit;
    text-transform: none;
    text-decoration: none;
    transition: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.video-js .vjs-control.vjs-close-button {
    cursor: pointer;
    height: 3em;
    position: absolute;
    right: 0;
    top: 0.5em;
    z-index: 2;
}

.vjs-menu-button {
    cursor: pointer;
}

.vjs-menu .vjs-menu-content {
    display: block;
    padding: 0;
    margin: 0;
    overflow: auto;
}

.vjs-scrubbing .vjs-menu-button:hover .vjs-menu {
    display: none;
}

.vjs-menu li {
    list-style: none;
    margin: 2px 0px;
    padding: 8px 15px;
    font-size: 14px;
    text-align: center;
    text-transform: lowercase;
    color: rgba(255, 255, 255, .6);
    border-radius: 3px;
    transition: all .15s ease;
    outline: none;
}

.vjs-menu li:hover {
    color: rgba(255, 255, 255, .85);
    text-shadow: 0 0 3px rgba(255, 255, 255, .5);
}

.vjs-menu li:active {
    transform: scale(.9);
}

.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 15px rgba(0, 0, 0, .5);
    /*background: -webkit-linear-gradient(to top, #FF7539 0%, #FFAB00 100%);
    background: linear-gradient(to top, #FF7539 0%, #FFAB00 100%);*/
}

.vjs-menu li.vjs-menu-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    line-height: 2em;
    padding: 0;
    margin: 0 0 0.3em 0;
    font-weight: bold;
    cursor: default;
}

.vjs-menu-button-popup .vjs-menu {
    display: none;
    position: absolute;
    bottom: 0;
    width: 50px;
    left: -3em;
    height: 0em;
    margin-bottom: 1.5em;
    border-top-color: rgba(43, 51, 63, 0.7);
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    display: block;
    padding: 5px;
    /*background: -webkit-linear-gradient(top, rgba(30,30,30,.9), rgba(10,10,10,.9));
    background: linear-gradient(to bottom , rgba(30,30,30,.9), rgba(10,10,10,.9));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), 0 0 10px rgba(0,0,0,.3);*/
    border-radius: 3px;
    color: #fff;
    font-size: 100%;
    margin-bottom: 8px;
    -webkit-transition: all .15s;
    transition: all .15s;
    position: absolute;
    bottom: 15px;
    float: left;
}

.vjs-menu-button-popup:hover .vjs-menu,
.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {
    display: block;
}

.video-js .vjs-menu-button-inline {
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    overflow: hidden;
}

.video-js .vjs-menu-button-inline:before {
    width: 2.222222222em;
}

.video-js .vjs-menu-button-inline:hover,
.video-js .vjs-menu-button-inline:focus,
.video-js .vjs-menu-button-inline.vjs-slider-active,
.video-js.vjs-no-flex .vjs-menu-button-inline {
    width: 10em;
}

.video-js .vjs-menu-button-inline.vjs-slider-active {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
}

.vjs-menu-button-inline .vjs-menu {
    opacity: 0;
    height: 100%;
    width: auto;
    position: absolute;
    left: 4em;
    top: 0;
    padding: 0;
    margin: 0;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

.vjs-menu-button-inline:hover .vjs-menu,
.vjs-menu-button-inline:focus .vjs-menu,
.vjs-menu-button-inline.vjs-slider-active .vjs-menu {
    display: block;
    opacity: 1;
}

.vjs-no-flex .vjs-menu-button-inline .vjs-menu {
    display: block;
    opacity: 1;
    position: relative;
    width: auto;
}

.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {
    width: auto;
}

.vjs-menu-button-inline .vjs-menu-content {
    width: auto;
    height: 100%;
    margin: 0;
    overflow: hidden;
}

.video-js .vjs-control-bar {
    display: none;
    width: 700px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 350px);
    height: 50px;
    border-radius: 5px;
    background: rgba(0, 0, 0, .6);
    -webkit-backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
    backdrop-filter: blur(20px) saturate(1.5) brightness(1.2);
}

@media screen and (max-width: 740px) {
    .video-js .vjs-control-bar {
        width: calc(100% - 40px);
        bottom: 20px;
        left: 20px;
    }
}

.vjs-has-started .vjs-control-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    visibility: visible;
    opacity: 1;
    transform-origin: center bottom;
    transition: all .15s cubic-bezier(.44, .14, .34, .97), width 0s, left 0s;
}

.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
    visibility: hidden;
    opacity: 0;
    bottom: 5px;
    transition: .15s cubic-bezier(.44, .14, .34, .97);
}

.vjs-controls-disabled .vjs-control-bar,
.vjs-using-native-controls .vjs-control-bar,
.vjs-error .vjs-control-bar {
    display: none !important;
}

.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
    opacity: 1;
    visibility: visible;
}

@media screen {
    .vjs-user-inactive.vjs-playing .vjs-control-bar:before {
        content: "";
    }
}

.vjs-has-started.vjs-no-flex .vjs-control-bar {
    display: table;
}

.video-js .vjs-control {
    outline: none;
    position: relative;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 50px;
    font-size: 120%;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}

.video-js .vjs-control:before {
    font-size: 200%;
    line-height: 50px;
    color: #fff;
}

.video-js .vjs-control-text {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    visibility: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.vjs-no-flex .vjs-control {
    display: table-cell;
    vertical-align: middle;
}

.video-js .vjs-custom-control-spacer {
    display: none;
}

.video-js .vjs-progress-control {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.vjs-live .vjs-progress-control {
    display: none;
}

.video-js .vjs-progress-holder {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    height: 5px;
    border-radius: 5px;
}

.video-js .vjs-progress-control:hover .vjs-mouse-display:after,
.video-js .vjs-progress-control:hover .vjs-play-progress:after {
    display: block;
    font-size: 120%;
}

.video-js .vjs-progress-holder .vjs-play-progress,
.video-js .vjs-progress-holder .vjs-load-progress,
.video-js .vjs-progress-holder .vjs-load-progress div {
    position: absolute;
    display: block;
    height: 5px;
    margin: 0;
    padding: 0;
    width: 0;
    left: 0;
    top: 0;
    border-radius: 5px;
}

.video-js .vjs-mouse-display:before {
    display: none;
}

.video-js .vjs-play-progress {
    background: #FFF;
    border-radius: 10px;
    transition: all .25s linear;
}

.video-js .vjs-mouse-display:after,
.video-js .vjs-play-progress:after {
    display: none;
    position: absolute;
    top: -28px;
    right: 0;
    font-size: 12px !important;
    color: transparent;
    content: attr(data-current-time);
    padding: 8px;
    pointer-events: none;
    transition: .2s ease;
}

.video-js .vjs-play-progress:before,
.video-js .vjs-play-progress:after {
    z-index: 10;
}

.video-js .vjs-load-progress {
    background: rgba(255, 255, 255, .3);
    transition: width .25s linear;
}

.video-js .vjs-load-progress div {
    background: rgba(0, 0, 0, .2);
}

.video-js.vjs-no-flex .vjs-progress-control {
    width: auto;
}

.video-js .vjs-progress-control .vjs-mouse-display {
    position: absolute;
}

.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
    z-index: 0;
}

.video-js .vjs-progress-control:hover .vjs-mouse-display {
    display: block;
}

.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display,
.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display:after {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 1s, opacity 1s;
    -moz-transition: visibility 1s, opacity 1s;
    -o-transition: visibility 1s, opacity 1s;
    transition: visibility 1s, opacity 1s;
}

.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display,
.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display:after {
    display: none;
}

.video-js .vjs-progress-control .vjs-mouse-display:after {
    color: #999;
    background: #222;
    border-radius: 5px 5px 0px 5px;
    visibility: visible;
}

.video-js .vjs-slider {
    outline: 0;
    position: relative;
    cursor: pointer;
    padding: 0;
    margin: 0 0.45em 0 0.45em;
    background: rgba(255, 255, 255, .15);
}

.video-js .vjs-mute-control,
.video-js .vjs-volume-menu-button {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}

.video-js .vjs-volume-control {
    width: 5em;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.video-js .vjs-volume-bar {
    margin: 1.35em 0.45em;
    top: 9px;
    border-radius: 5px;
}

.vjs-volume-bar.vjs-slider-horizontal {
    width: 50px;
    height: 5px;
    border-radius: 5px;
}

.vjs-volume-bar.vjs-slider-vertical {
    width: 5px;
    height: 50px;
    margin: 1.35em auto;
    border-radius: 5px;
}

.video-js .vjs-volume-level {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #FFF;
    border-radius: 5px;
    transition: all 0s;
}

/*.video-js .vjs-volume-level:before {
	content: '';
	position: absolute;
	width: 9px;
	height: 9px;
	bottom: -2px;
	right: -6px;
	background: #fff;
	border-radius: 50px;
}*/

.vjs-slider-vertical .vjs-volume-level {
    width: 5px;
}

.vjs-slider-vertical .vjs-volume-level:before {
    top: -0.5em;
    left: -0.3em;
}

.vjs-slider-horizontal .vjs-volume-level {
    height: 5px;
}

.vjs-slider-horizontal .vjs-volume-level:before {
    top: -2px;
    right: -0.5em;
}

.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {
    height: 100%;
}

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
    width: 100%;
}

.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu {
    display: block;
    width: 0;
    height: 0;
    border-top-color: transparent;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
    left: 0.5em;
    height: 8em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-horizontal .vjs-menu {
    left: -2em;
}

.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu-content {
    height: 0;
    width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
}

.vjs-volume-menu-button-vertical:hover .vjs-menu-content,
.vjs-volume-menu-button-vertical .vjs-lock-showing .vjs-menu-content {
    height: 50px;
    width: 85px;
}

.vjs-volume-menu-button-horizontal:hover .vjs-menu-content,
.vjs-volume-menu-button-horizontal .vjs-lock-showing .vjs-menu-content {
    height: 50px;
    width: 60px;
}

.vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content {
    background-color: transparent !important;
}

.vjs-poster {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    cursor: pointer;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
}

.vjs-poster img {
    display: block;
    margin: 0 auto;
    max-height: 100%;
    padding: 0;
    width: 100%;
}

.vjs-has-started .vjs-poster {
    visibility: hidden;
    opacity: 0;
}

.vjs-audio.vjs-has-started .vjs-poster {
    visibility: visible;
}

.vjs-controls-disabled .vjs-poster {
    visibility: hidden;
    display: none;
}

.vjs-using-native-controls .vjs-poster {
    visibility: hidden;
    display: none;
}

.video-js .vjs-live-control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: flex-start;
    -webkit-align-items: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    font-size: 1em;
    line-height: 3em;
}

.vjs-no-flex .vjs-live-control {
    display: table-cell;
    width: auto;
    text-align: left;
}

.video-js .vjs-time-control {
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    font-size: 100%;
    line-height: 50px;
    color: rgba(255, 255, 255, .8);
}

.vjs-live .vjs-time-control {
    display: none;
}

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
    display: block;
}

.video-js .vjs-duration,
.vjs-no-flex .vjs-duration {
    display: block;
}

.vjs-duration.vjs-control,
.vjs-current-time.vjs-control {
    width: auto !important;
    padding: 0 10px;
}

.vjs-time-divider {
    line-height: 50px;
    width: 2px;
    transform: translateX(-2px);
}

.vjs-time-divider div span {
    font-size: 150%;
    color: rgba(255, 255, 255, .8);
}

.vjs-live .vjs-time-divider {
    display: none;
}

.video-js .vjs-play-control {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}

.video-js .vjs-play-control:after {
    content: 'Play/Pause';
    position: absolute;
    top: -40px;
    left: 0px;
    width: auto;
    height: auto;
    background: #111;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #ddd;
    text-align: center;
    letter-spacing: 1px;
    padding: 10px 15px;
    pointer-events: none;
    opacity: 0;
    transition: .2s ease;
    transition-delay: 0s;
}

.video-js .vjs-play-control:hover:after {
    opacity: 1;
    transition-delay: 1.3s;
}

.vjs-text-track-display {
    position: absolute;
    bottom: 3em;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;
}

.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
    bottom: 1em;
}

.video-js .vjs-text-track {
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 0.1em;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.5);
}

.vjs-subtitles {
    color: #fff;
}

.vjs-captions {
    color: #fc6;
}

.vjs-tt-cue {
    display: block;
}

video::-webkit-media-text-track-display {
    -moz-transform: translateY(-3em);
    -ms-transform: translateY(-3em);
    -o-transform: translateY(-3em);
    -webkit-transform: translateY(-3em);
    transform: translateY(-3em);
}

.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
    -moz-transform: translateY(-1.5em);
    -ms-transform: translateY(-1.5em);
    -o-transform: translateY(-1.5em);
    -webkit-transform: translateY(-1.5em);
    transform: translateY(-1.5em);
}

.video-js .vjs-fullscreen-control {
    cursor: pointer;
    -webkit-box-flex: none;
    -moz-box-flex: none;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
}

.video-js .vjs-fullscreen-control:after {
    content: 'Fullscreen';
    position: absolute;
    top: -40px;
    right: 0px;
    width: auto;
    height: auto;
    background: #111;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #ddd;
    text-align: center;
    letter-spacing: 1px;
    padding: 10px 15px;
    pointer-events: none;
    opacity: 0;
    transition: .2s ease;
    transition-delay: 0s;
}

.video-js .vjs-fullscreen-control:hover:after {
    opacity: 1;
    transition-delay: 1.3s;
}

.vjs-playback-rate .vjs-playback-rate-value {
    font-size: 120%;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

.vjs-playback-rate .vjs-menu {
    transform: translateX(0%);
}

.vjs-error .vjs-error-display .vjs-modal-dialog-content {
    font-size: 1.4em;
    text-align: center;
}

.vjs-error .vjs-error-display:before {
    color: #fff;
    content: 'X';
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4em;
    left: 0;
    line-height: 1;
    margin-top: -0.5em;
    position: absolute;
    text-shadow: 0.05em 0.05em 0.1em #000;
    text-align: center;
    top: 50%;
    vertical-align: middle;
    width: 100%;
}

.vjs-loading-spinner {
    position: absolute;
    top: 5px;
    left: calc(50% - 65px);
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: #111;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: all .25s ease;
}

.vjs-loading-spinner:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: solid transparent 2px;
    border-top-color: #fff;
    -webkit-animation: rotate 1s infinite linear;
    animation: rotate 1s infinite linear;
}

.vjs-loading-spinner:after {
    content: 'Loading';
    position: absolute;
    top: 0px;
    right: 5px;
    width: 90px;
    height: 40px;
    line-height: 40px;
    font-size: 150%;
    text-align: center;
}

.vjs-seeking .vjs-loading-spinner,
.vjs-waiting .vjs-loading-spinner {
    visibility: visible;
    opacity: 1;
    top: 20px;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.vjs-chapters-button .vjs-menu {
    left: -10em;
    width: 0;
}

.vjs-chapters-button .vjs-menu ul {
    width: 24em;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {
    -webkit-box-flex: auto;
    -moz-box-flex: auto;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {
    width: auto;
}

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-menu-button {
    display: none;
}

.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-fullscreen-control {
    display: none;
}

.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button {
    display: none;
}

.vjs-remaining-time {
    display: none;
}

.vjs-caption-settings {
    position: relative;
    top: 1em;
    /*background-color: #2B333F;
	background-color: rgba(43, 51, 63, 0.75);*/
    color: #fff;
    margin: 0 auto;
    padding: 0.5em;
    height: 15em;
    font-size: 12px;
    width: 40em;
}

.vjs-caption-settings .vjs-tracksettings {
    top: 0;
    bottom: 2em;
    left: 0;
    right: 0;
    position: absolute;
    overflow: auto;
}

.vjs-caption-settings .vjs-tracksettings-colors,
.vjs-caption-settings .vjs-tracksettings-font {
    float: left;
}

.vjs-caption-settings .vjs-tracksettings-colors:after,
.vjs-caption-settings .vjs-tracksettings-font:after,
.vjs-caption-settings .vjs-tracksettings-controls:after {
    clear: both;
}

.vjs-caption-settings .vjs-tracksettings-controls {
    position: absolute;
    bottom: 1em;
    right: 1em;
}

.vjs-caption-settings .vjs-tracksetting {
    margin: 5px;
    padding: 3px;
    min-height: 40px;
}

.vjs-caption-settings .vjs-tracksetting label {
    display: block;
    width: 100px;
    margin-bottom: 5px;
}

.vjs-caption-settings .vjs-tracksetting span {
    display: inline;
    margin-left: 5px;
}

.vjs-caption-settings .vjs-tracksetting>div {
    margin-bottom: 5px;
    min-height: 20px;
}

.vjs-caption-settings .vjs-tracksetting>div:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    min-height: 0;
}

.vjs-caption-settings label>input {
    margin-right: 10px;
}

.vjs-caption-settings input[type="button"] {
    width: 40px;
    height: 40px;
}

.video-js .vjs-modal-dialog {
    /*background: rgba(0, 0, 0, 0.8);
	background: -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));*/
}

.vjs-modal-dialog .vjs-modal-dialog-content {
    font-size: 1.2em;
    line-height: 1.5;
    padding: 20px 24px;
    z-index: 1;
}

/*
Next step:

Customize https://plyr.io

*/
</style>

