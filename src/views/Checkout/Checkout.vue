<script setup>
import { ref } from 'vue'
import { CreditCardIcon } from '@heroicons/vue/24/outline'
import { vMaska } from "maska";

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
];
const selectedInstallment = ref(installment[11]);

// Máscaras vmaska - inputs:
const maskName = {
    tokens: {
        A: {
            multiple: false,
            transform: chr => chr.toUpperCase()
        },
        a: {
            multiple: true
        }
    }
}

const maskCardHolder = {
    tokens: {
        A: {
            multiple: true,
            transform: chr => chr.toUpperCase()
        }
    }
}

const maskPhone = {
    tokens: {
        N: {
            multiple: false,
            pattern: /[1-9]/
        }
    }
}

const maskEmail = {
    tokens: {
        a: {
            multiple: false,
            pattern: /^(?![@,#,!,$,%,¨,*,&,(,),+,=,[,{,},~,^,`,\,/,;,:,<,>])/,
            transform: chr => chr.toLowerCase()
        },
        b: {
            multiple: true,
            pattern: /^(?![#,!,$,%,¨,*,&,(,),+,=,[,{,},~,^,`,\,/,;,:,<,>])/,
            transform: chr => chr.toLowerCase()
        }
    }
}
</script >

<script type="text/javascript">

// Mock images:
import BannerImg from '@/assets/img/mock/checkout-banner.png';
import OrderBump01 from '@/assets/img/mock/orderbump-01.jpeg';

// svgs:
import PagamentoSeguroSvg from '@/assets/img/pagamento-seguro.svg';
import SvgFlags from '@/assets/img/payment-labels.svg';
import IconPix from '@/assets/img/icon-pix.svg';

// checkout components:
import Badges from "@/components/Badges.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";
import FooterDisclaimer from "@/components/FooterDisclaimer.vue";
import FooterPaymentLabels from "@/components/FooterPaymentLabels.vue";
import OrderBump from "@/components/OrderBump.vue";
import SelectCountryFlags from "@/components/SelectCountryFlags.vue";
import CreditCardSavedData from "@/components/SavedCreditCard.vue";
import CheckoutStep from "@/components/CheckoutStep.vue";
import FormLabel from "@/components/FormLabel.vue";
import Discount from "@/components/Discount.vue";
import TabPix from "@/components/TabPix.vue";
import TabBillet from "@/components/TabBillet.vue";

export default {
    data() {
        return {
            pepper: this.pepper,
            tab: 1,
            checkoutHas2Columns: true,
            SvgPaymentLabels: SvgFlags,
            SvgIconPix: IconPix,

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
            },

            hasSavedCards: false,

            // Validação - Nome
            nameIsValid: null,
            nameErrorMessage: '',
            name: '',

            // Validação - Email
            emailIsValid: null,
            emailErrorMessage: '',
            showEmailAutoSuggest: false,
            emailSuggest: [],
            email: '',

            // Validação - Phone
            phoneIsValid: null,
            phoneErrorMessage: '',
            phone: '',

            // Validação - CPF
            cpfIsValid: null,
            cpfErrorMessage: '',
            doc: '',

            // Validação - Card holder
            cardHolderIsValid: null,
            cardHolderErrorMessage: '',
            cardHolder: '',

            // Validação - Card Expiration date
            cardExpirationDateIsValid: undefined,
            cardExpirationDateErrorMessage: '',
            cardExpirationDate: null,
            cardExpirationYear: null,
            cardExpirationMonth: null,

            // Validação - Card Number
            cardNumberIsValid: null,
            cardNumberErrorMessage: '',
            cardNumber: null,
            cardFlag: undefined,

            // Validação - CVV
            cvvIsValid: null,
            cvvErrorMessage: '',
            cvv: null,

        }
    },
    methods: {
        paymentCreditCard() { this.tab = 1; },
        paymentPix() { this.tab = 2; },
        paymentBillet() { this.tab = 3; },

        // Validations:
        validateName(val) {
            this.nameIsValid = false;
            this.nameErrorMessage = 'Digite o seu nome completo.'

            if (val == '' || !val) this.nameErrorMessage = 'Este campo é obrigatório.';

            if (val.length >= 0 && val.length >= 4) this.nameIsValid = false;
            if (val.length > 4) this.nameIsValid = true;
        },

        validateEmail(mail) {
            const EmailDomains = [
                'hotmail.com',
                'gmail.com',
                'terra.com.br',
                'icloud.com',
                'yahoo.com.br',
                'outlook.com',
                'live.com'
            ]

            if (!mail.includes('@')) this.showEmailAutoSuggest = false;

            if (mail.includes('@')) {
                this.showEmailAutoSuggest = true;

                const getLength = mail.split('@').length;
                const query = mail.split('@')[getLength - 1];

                const domain = RegExp(`.*${query.toLowerCase().split('').join('.*')}.*`);
                const matches = EmailDomains.filter(v => v.toLowerCase().match(domain));

                this.emailSuggest = matches;
            }

            this.emailIsValid = false;
            this.emailErrorMessage = 'Insira um e-mail válido.'

            // Regex e-mail:
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                this.emailIsValid = true;
                this.showEmailAutoSuggest = false;
            } else {
                this.emailIsValid = false;
                if (mail == '' || !mail) this.emailErrorMessage = 'Este campo é obrigatório.';
            }
        },

        selectEmailSuggest(suggested) {
            this.showEmailAutoSuggest = false;
            this.email = this.email.split('@')[0] + '@' + suggested;
            this.emailIsValid = true;
        },

        validatePhone(phone) {
            this.phoneIsValid = false;
            let phoneNumbers = phone.replace(/[\s.,-,/(,/)]*/igm, '');

            if (phoneNumbers.length >= 10) {
                this.phoneIsValid = true;

            } else {
                this.phoneIsValid = false;
                this.phoneErrorMessage = "Digite um telefone válido.";
            }
        },

        validateCPF(val) {
            this.cpfIsValid = false;
            this.cpfErrorMessage = 'Digite um CPF válido.';

            function isCpfValid() {
                var Soma = 0;
                var strCPF = val.replace('.', '').replace('.', '').replace('-', '');

                if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' ||
                    strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' || strCPF === '88888888888' ||
                    strCPF === '99999999999' || strCPF.length !== 11) {
                    return false;
                }

                for (let i = 1; i <= 9; i++) { Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i) }

                var Resto = (Soma * 10) % 11;
                if ((Resto === 10) || (Resto === 11)) { Resto = 0 }

                if (Resto !== parseInt(strCPF.substring(9, 10))) { return false }

                Soma = 0;
                for (let k = 1; k <= 10; k++) { Soma = Soma + parseInt(strCPF.substring(k - 1, k)) * (12 - k) }

                Resto = (Soma * 10) % 11;
                if ((Resto === 10) || (Resto === 11)) { Resto = 0 }

                if (Resto !== parseInt(strCPF.substring(10, 11))) { return false }

                return true;
            }

            if (this.doc == '') this.cpfErrorMessage = 'Este campo é obrigatório.';

            if (isCpfValid() == false) this.cpfIsValid = false;
            if (isCpfValid() == true) this.cpfIsValid = true;
        },

        validateCardHolder(val) {
            this.cardHolderIsValid = false;
            this.cardHolderErrorMessage = 'Digite o nome do titular do cartão.';
            if (val == '' || !val) this.cardHolderErrorMessage = 'Este campo é obrigatório.';

            if (val.length > 5 && val.split(' ').length >= 2 && val.split(' ')[1] !== '') this.cardHolderIsValid = true;
        },

        validateCardExpirationDate(month, year) {
            this.cardExpirationDateIsValid = false;
            this.cardExpirationDateErrorMessage = 'Data inválida.';

            const currentMonth = new Date().getMonth() + 1;
            const currentYear = new Date().getFullYear();

            if (year && month && year > currentYear) this.cardExpirationDateIsValid = true;
            if (year && month && year == currentYear && month > currentMonth) this.cardExpirationDateIsValid = true;
        },

        validateCardNumber(val) {
            this.cardNumberIsValid = false;
            this.cardFlag = undefined;

            if (!val || val.length == 0) this.cardNumberErrorMessage = 'Este campo é obrigatório.';

            if (val) {
                let numbers = val.replace(/ /g, '');

                // Card flags Regex:
                const cardFlagsRegex = [
                    { flag: 'elo', regex: /^(4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|50(4175|6(699|7([0-6]\d|7[0-8]))|9\d{3})|6(27780|36(297|368)|5(0(0(3[1-35-9]|4\d|5[01])|4(0[5-9]|([1-3]\d|8[5-9]|9\d))|5([0-2]\d|3[0-8]|4[1-9]|[5-8]\d|9[0-8])|7(0\d|1[0-8]|2[0-7])|9(0[1-9]|[1-6]\d|7[0-8]))|16(5[2-9]|[67]\d)|50([01]\d|2[1-9]|[34]\d|5[0-8]))))/ },
                    { flag: 'visa', regex: /^4\d{5}/ },
                    { flag: 'mastercard', regex: /^(5[1-5]\d{4}|2(2(2[1-9]\d{2}|[3-9]\d{3})|[3-6]\d{4}|7([01]\d{3}|20\d{2})))/ },
                    { flag: 'amex', regex: /^3[47]\d{4}/ },
                    { flag: 'hipercard', regex: /^(?:3841[046]0|6(?:06282|37(?:095|5(?:68|99)|6(?:09|12))))/ }
                ];

                for (let i = 0; i < cardFlagsRegex.length; i++) {
                    if (cardFlagsRegex[i].regex.test(numbers)) this.cardFlag = cardFlagsRegex[i].flag;
                }

                // Validação card Number:
                if (numbers.length < 16) {
                    this.cardNumberIsValid = false;
                    this.cardNumberErrorMessage = 'Informe um número de cartão válido.';
                }

                if (numbers.length >= 16) {
                    // Luhn's algorythm:
                    let multiplier = "2121212121212121";  // One more character added...
                    let multipliedNumber;
                    let sum = 0 // Initialise it as a number.

                    for (let i = 0; i < numbers.length; i++) {
                        multipliedNumber = numbers[i] * multiplier[i];
                        if (multipliedNumber > 9) multipliedNumber = multipliedNumber % 10 + Math.floor(multipliedNumber / 10);

                        sum += multipliedNumber;
                    }
                    let check = sum % 10; // Simpler now because all digits were processed
                    if (check == 0) { // Sum is multiple of 10
                        this.cardNumberIsValid = true;
                    } else {
                        this.cardNumberIsValid = false;
                        this.cardNumberErrorMessage = 'Informe um número de cartão válido.'
                    }
                }
            }
        },

        validateCVV(cvv) {
            this.cvvIsValid = false;
            this.cvvErrorMessage = 'Campo obrigatório.';
            if (cvv && cvv.length >= 3) this.cvvIsValid = true;
        },

        checkSavedCards(event) {
            event ? this.hasSavedCards = true : this.hasSavedCards = false;
        }
    },
    mounted() {
        document.title = 'Checkout – Pepper'
    }
}
</script>

<template>
    <CountdownTimer />

    <div id="checkout-container" class="w-full flex flex-col xl:flex-row xl:justify-center">
        <!-- Checkout Left Column -->
        <div :class="[{ 'xl:mx-0 xl:w-2/3 xl:px-6': checkoutHas2Columns }, 'w-full max-w-3xl mx-auto pt-6 pb-8 lg:pb-10 px-3 flex flex-col gap-4']">

            <!-- Checkout Banner -->
            <img :src="BannerImg" class="w-full rounded-lg" />

            <!-- Payment form container -->
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 px-1">

                <!-- Você está adquirindo -->
                <div class="rounded-md lg:col-span-2 px-3 lg:px-5 py-3.5 lg:py-4 border border-zinc-200 mb-3">
                    <div class="w-full font-bold tracking-tight text-xs uppercase text-indigo-500">
                        Você está adquirindo:
                    </div>
                    <div class="flex items-start justify-start gap-3 mt-3">
                        <img :src="OrderBump01" class="w-12 h-12 lg:w-16 lg:h-16 rounded-md object-cover shadow-lg" />
                        <div class="flex flex-col -mt-[3px]">
                            <span class="block text-sm font-semibold text-slate-600 tracking-tight">
                                Curso de gastronomia atualizado para 2023 – As melhores receitas
                            </span>
                            <span class="flex items-center gap-1 mt-1 text-sm font-medium text-slate-500">
                                12x <span class="text-xl font-bold text-slate-700 tracking-tighter">R$ 22,70</span>
                            </span>
                            <span class="flex mt-1 text-xs font-medium text-slate-500">
                                ou R$ 197,00 à vista
                            </span>
                        </div>
                    </div>
                </div>

                <CheckoutStep :hasNumber="true" :StepNumber="1" title="Suas informações" />

                <div class="lg:col-span-2">
                    <FormLabel name="Nome completo:" />
                    <input
                        @input="validateName(name)"
                        v-model="name"
                        ref="name"
                        autocomplete="name"
                        v-maska:[maskName]
                        data-maska="Aa a a a a"
                        :class="[{ 'input-has-error': nameIsValid == false }, 'pepper-input icon-user']"
                        required
                        inputmode="text"
                        type="text" />
                    <div v-if="nameIsValid == false" class="checkout-invalid-feedback"> {{ nameErrorMessage }} </div>
                </div>

                <div class="lg:col-span-2 relative">
                    <FormLabel name="Digite seu e-mail:" />
                    <input
                        :class="[{ 'input-has-error': emailIsValid == false }, 'pepper-input icon-email']"
                        v-model="email"
                        autocomplete="email"
                        ref="email"
                        v-maska:[maskEmail]
                        data-maska="aab"
                        required
                        inputmode="email"
                        @keyup="validateEmail(email)"
                        @keyup.enter="selectEmailSuggest(emailSuggest[0])"
                        type="email" />
                    <!-- Email autosuggest -->
                    <transition appear>
                        <div v-if="showEmailAutoSuggest && emailSuggest.length > 0" class="w-full rounded-md bg-gray-50 border border-slate-400 shadow-lg absolute overflow-hidden top-100 z-40 mt-1">
                            <template v-for="sug in emailSuggest">
                                <li @click.stop.prevent="selectEmailSuggest(sug)"
                                    :class="sug == emailSuggest[0] ? 'font-semibold bg-indigo-50 text-slate-700' : 'font-medium text-gray-600 hover:bg-indigo-100 hover:text-slate-700'"
                                    class="pr-3 pl-8 py-2.5 text-sm list-none cursor-pointer transition duration-600">
                                    {{ email.split('@')[0] + '@' + sug }}
                                </li>
                            </template>
                        </div>
                    </transition>
                    <div v-if="emailIsValid == false" class="checkout-invalid-feedback"> {{ emailErrorMessage }} </div>
                </div>

                <div class="lg:col-span-1">
                    <FormLabel name="Celular:" />
                    <div class="flex flex-row">
                        <SelectCountryFlags />
                        <input
                            :class="[{ 'input-has-error': phoneIsValid == false }, 'pepper-input icon-phone']"
                            v-model="phone"
                            autocomplete="phone"
                            ref="phone"
                            @input="validatePhone(phone)"
                            v-maska:[maskPhone]
                            data-maska="['(NN) N### ####', '(NN) N#### ####']"
                            required
                            inputmode="tel"
                            type="text" />
                    </div>
                    <div v-if="phoneIsValid == false" class="checkout-invalid-feedback"> {{ phoneErrorMessage }} </div>
                </div>

                <div class="lg:col-span-1">
                    <FormLabel name="CPF:" />
                    <input
                        :class="[{ 'input-has-error': cpfIsValid == false }, 'pepper-input']"
                        v-model="doc"
                        ref="doc"
                        @input="validateCPF(doc)"
                        v-maska
                        data-maska="###.###.###-##"
                        required
                        inputmode="tel"
                        type="text" />
                    <div v-if="cpfIsValid == false" class="checkout-invalid-feedback"> {{ cpfErrorMessage }} </div>
                </div>

                <div class="lg:col-span-2 pt-4">
                    <Discount />
                </div>

                <CheckoutStep :hasNumber="true" :StepNumber="2" title="Dados de pagamento" class="mt-4" />

                <!-- Saved Credit card -->
                <CreditCardSavedData @hasSavedCardData="checkSavedCards" />

                <div class="flex justify-start gap-x-2 lg:col-span-2" v-show="hasSavedCards == false">
                    <button @click="paymentCreditCard" :class="[{ 'selected-tab': tab == 1 }, 'pepper-payment-tab']">
                        <CreditCardIcon class='w-6 h-6 lg:w-5 flex items-center' />
                        Cartão
                    </button>
                    <button @click="paymentPix" :class="[{ 'selected-tab': tab == 2 }, 'pepper-payment-tab']">
                        <span class='w-5 h-6 lg:w-[17px] flex items-center'>
                            <img :src="SvgIconPix" />
                        </span>
                        PIX
                    </button>
                    <button @click="paymentBillet" :class="[{ 'selected-tab': tab == 3 }, 'pepper-payment-tab']">
                        <div class="inline-flex items-center justify-center lg:justify-start h-6 w-auto">
                            <img class="w-7" :src="SvgPaymentLabels + '#boleto'" />
                        </div>
                        Boleto
                    </button>
                </div>

                <!-- Credit card Tab -->
                <div class="lg:col-span-2 grid grid-cols-3 gap-3 gap-x-2 my-2" v-if="hasSavedCards == false && tab == 1">
                    <div class="col-span-3">
                        <FormLabel name="Número do cartão:" />
                        <div class="relative">
                            <input
                                @input="validateCardNumber(cardNumber)"
                                v-model="cardNumber"
                                autocomplete="cardNumber"
                                ref="cardNumber"
                                v-maska
                                data-maska="#### #### #### ####"
                                :class="[{ 'input-has-error': cardNumberIsValid == false }, 'pepper-input']"
                                required
                                inputmode="tel"
                                type="text" />
                            <div v-if="cardFlag && cardFlag !== undefined" class="absolute top-0 right-0 w-auto p-2 z-10 flex items-center">
                                <img class="h-[24px] w-[36px]" :src="SvgPaymentLabels + '#' + cardFlag" />
                            </div>
                        </div>
                        <div v-if="cardNumberIsValid == false" class="checkout-invalid-feedback"> {{ cardNumberErrorMessage }} </div>
                    </div>

                    <div class="col-span-3">
                        <FormLabel name="Nome impresso no cartão:" />
                        <input
                            @input="validateCardHolder(cardHolder)"
                            v-model="cardHolder"
                            autocomplete="cardHolder"
                            ref="cardHolder"
                            v-maska:[maskCardHolder]
                            data-maska="A A A A"
                            :class="[{ 'input-has-error': cardHolderIsValid == false }, 'pepper-input']"
                            required
                            inputmode="text"
                            type="text" />
                        <div v-if="cardHolderIsValid == false" class="checkout-invalid-feedback"> {{ cardHolderErrorMessage }} </div>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="Mês:" />
                        <select
                            required
                            :class="[{ 'text-gray-400': !cardExpirationMonth, 'input-has-error': cardExpirationMonth !== null && cardExpirationYear !== null && cardExpirationDateIsValid == false }, 'pepper-input']"
                            v-model="cardExpirationMonth"
                            ref="cardExpirationMonth"
                            @change="validateCardExpirationDate(cardExpirationMonth, cardExpirationYear)">
                            <option :value="null" disabled>Mês</option>
                            <template v-for="month in [...Array(12)].map((a, b) => (1 + b).toString().padStart(2, '0'))">
                                <option :value="month">{{ month }}</option>
                            </template>
                        </select>
                        <div v-if="cardExpirationMonth !== null && cardExpirationYear !== null && cardExpirationDateIsValid == false" class="checkout-invalid-feedback">
                            {{ cardExpirationDateErrorMessage }}
                        </div>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="Ano:" />
                        <select
                            required
                            :class="[{ 'text-gray-400': !cardExpirationYear, 'input-has-error': cardExpirationMonth !== null && cardExpirationYear !== null && cardExpirationDateIsValid == false }, 'pepper-input']"
                            v-model="cardExpirationYear"
                            ref="cardExpirationYear"
                            @change="validateCardExpirationDate(cardExpirationMonth, cardExpirationYear)">
                            <option :value="null" disabled>Ano</option>
                            <template v-for="year in [...Array(10)].map((a, b) => new Date().getFullYear() + b)">
                                <option :value="year">{{ year }}</option>
                            </template>
                        </select>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="CVV:" />
                        <input
                            :class="[{ 'input-has-error': cvvIsValid == false }, 'pepper-input icon-lock']"
                            required
                            @input="validateCVV(cvv)"
                            v-model="cvv"
                            autocomplete="cvv"
                            ref="cvv"
                            maxlength="4"
                            inputmode="tel"
                            type="text"
                            v-maska
                            data-maska="####" />
                        <div v-if="cvvIsValid == false" class="checkout-invalid-feedback"> {{ cvvErrorMessage }} </div>
                    </div>
                </div>
                <!-- Parcelamento -->
                <div class="lg:col-span-2" v-if="tab == 1">
                    <FormLabel name="Parcelamento:" />
                    <select required :class="['pepper-input']" v-model="selectedInstallment">
                        <template v-for="inst in installment">
                            <option :value="inst">{{ inst.text }}</option>
                        </template>
                    </select>
                </div>
                <!-- End Credit card Tab -->

                <!-- PIX Tab -->
                <div class="lg:col-span-2 mt-2" v-show="tab == 2">
                    <TabPix />
                </div>

                <!-- Billet Tab -->
                <div class="lg:col-span-2 mt-2" v-show="tab == 3">
                    <TabBillet />
                </div>

                <!-- Order bumps -->
                <CheckoutStep :hasNumber="false" title="🔥 Aproveite e leve também:" class="mt-4" />
                <div class="lg:col-span-2">
                    <OrderBump />
                </div>
                <!-- End order bumps -->

                <div class="lg:col-span-2">
                    <span class="block text-base text-indigo-600 font-bold tracking-tight lg:text-right">
                        Valor total: 12x de R$ 22,70 no cartão
                    </span>
                    <span class="block mt-1 mb-4 lg:mb-5 text-sm font-medium text-slate-500 lg:text-right">
                        ou R$ 197,00 à vista
                    </span>
                </div>

                <!-- Buy Button -->
                <div class="lg:col-span-2">
                    <button
                        id="buyBtn"
                        class="flex w-full justify-center rounded-md border-0 bg-green-500 text-lg tracking-tight font-bold text-white hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-0"
                        @click="submitPayment">
                        Comprar agora
                    </button>
                    <div class="flex gap-6 xl:gap-8 flex-col md:flex-row items-center justify-center mt-8 mb-4">
                        <img :src="PagamentoSeguroSvg" class="h-6" />
                        <div class="flex flex-row items-center">
                            <FooterPaymentLabels />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Checkout Right column -->
        <div v-if="checkoutHas2Columns" :class="['max-w-xl mx-auto xl:mx-0 w-full xl:w-1/3 xl:pl-5 xl:border-l xl:border-zinc-200 xl:pt-6 pb-12 px-3 flex flex-col gap-5']">

            <!-- Checkout List -->
            <div v-if="Elements.List && Elements.List !== []" class="flex flex-col items-start justify-start gap-2 rounded-md bg-[#eff4f9] px-3.5 py-4 lg:px-4 border border-slate-300">
                <span class="text-base text-zinc-700 font-bold tracking-tight block mb-2">
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

            <!-- Badges -->
            <Badges />

            <!-- Disclaimer -->
            <FooterDisclaimer />

        </div>
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

.saved-credit-card {
    background-position: center;
    background-size: 40px;
    width: 2.25rem;
    height: 1.5rem;
    background-color: rgb(255 255 255);
    border-color: rgb(226 232 240);
    border-width: 1px;
    overflow: hidden;
    border-radius: 4px;
}

.saved-credit-card.mastercard {
    background-image: url('../../assets/img/payment-labels.svg#mastercard');
}

.saved-credit-card.visa {
    background-image: url('../../assets/img/payment-labels.svg#visa');
}

.saved-credit-card.hipercard {
    background-image: url('../../assets/img/payment-labels.svg#hipercard');
}

.saved-credit-card.elo {
    background-image: url('../../assets/img/payment-labels.svg#elo');
}

.saved-credit-card.amex {
    background-image: url('../../assets/img/payment-labels.svg#amex');
}

.saved-credit-card.jcb {
    background-image: url('../../assets/img/payment-labels.svg#jcb');
}

.saved-credit-card.discover {
    background-image: url('../../assets/img/payment-labels.svg#discover');
}

/* Transition Appear */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.7s ease, transform 1s ease, height 0.5s ease, margin 0.5s ease, padding 0.5s ease;
}

.v-enter-to,
.v-leave-from {
    transform: translateY(0);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-leave-to {
    transform: translateY(-200%);
    height: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
    border-width: 0;
}

/* Form styles */
.input-has-error,
.input-has-error:focus {
    border-color: rgb(239, 68, 68) !important;
}

.checkout-invalid-feedback {
    display: block;
    font-size: 12px;
    color: rgb(227, 41, 41);
    margin-top: .25rem;
}

.pepper-input[type='text'],
.pepper-input[type='email'],
.pepper-input[type='url'],
.pepper-input[type='password'],
.pepper-input[type='number'],
.pepper-input[type='date'],
.pepper-input[type='datetime-local'],
.pepper-input[type='month'],
.pepper-input[type='search'],
.pepper-input[type='tel'],
.pepper-input[type='time'],
.pepper-input[type='week'],
.pepper-input[multiple],
textarea.pepper-input,
select.pepper-input,
.pepper-input {
    color: rgb(55, 65, 81);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem 0.75rem;
    background-color: #fff !important;
    border: 1px solid rgb(203, 213, 225);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: 100%;
    border-radius: 0.375rem;
}

.pepper-input[type='text']:focus,
.pepper-input[type='email']:focus,
.pepper-input[type='url']:focus,
.pepper-input[type='password']:focus,
.pepper-input[type='number']:focus,
.pepper-input[type='date']:focus,
.pepper-input[type='datetime-local']:focus,
.pepper-input[type='month']:focus,
.pepper-input[type='search']:focus,
.pepper-input[type='tel']:focus,
.pepper-input[type='time']:focus,
.pepper-input[type='week']:focus,
.pepper-input[multiple]:focus,
textarea.pepper-input:focus,
select.pepper-input:focus,
.pepper-input:focus {
    border-color: rgb(129, 140, 248);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.pepper-input.icon-user,
.pepper-input.icon-phone,
.pepper-input.icon-email,
.pepper-input.icon-lock {
    background-repeat: no-repeat;
    background-position: 8px center;
    background-size: 16px;
    padding-left: 2rem;
}

.pepper-input.icon-user {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="slategray" width="16" height="16"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/%3E%3C/svg%3E');
}

.pepper-input.icon-email {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="slategray" width="16" height="16"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/%3E%3C/svg%3E')
}

.pepper-input.icon-phone {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="slategray" width="14" height="14"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/%3E%3C/svg%3E');
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.pepper-input.icon-lock {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="slategray" width="14" height="14"%3E%3Cpath fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"/%3E%3C/svg%3E')
}

.pepper-payment-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    font-weight: 600;
    border-radius: 0.375rem;
    width: 29%;
    gap: 0.25rem;
    border: 1px solid rgb(148, 163, 184);
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(107, 114, 128);
    letter-spacing: -0.025em;
    opacity: 0.7;
    transition-duration: 300ms;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.625rem 1rem;
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    /* 'hover:border-indigo-600 hover:text-indigo-500 ' */
}

.pepper-payment-tab.selected-tab {
    color: rgb(99 102 241);
    border-color: rgb(79 70 229);
    filter: none;
    -webkit-filter: none;
    opacity: 1;
}



@media (min-width: 1024px) {
    .pepper-payment-tab {
        flex-direction: row;
        padding-top: 1rem;
        padding-bottom: 1rem;
        gap: 0.35rem;
        justify-content: flex-start;
        width: 16.666667%;
    }
}
</style>