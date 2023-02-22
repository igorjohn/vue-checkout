<script setup>

import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { CreditCardIcon } from '@heroicons/vue/24/outline'

import { vMaska } from "maska";

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
];
const selectedInstallment = ref(installment[11]);


const expirationYear = ref(null);
const expirationMonth = ref(null);

const maskName = {
    tokens: {
        A: {
            multiple: false,
            transform: chr => chr.toUpperCase()
        },
        a: {
            multiple: true,
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

// Mock images
import BannerImg from '@/assets/img/mock/checkout-banner.png';
import OrderBump01 from '@/assets/img/mock/orderbump-01.jpeg';
import OrderBump02 from '@/assets/img/mock/orderbump-02.jpeg';

import PagamentoSeguroSvg from '@/assets/img/pagamento-seguro.svg';
import SvgFlags from '@/assets/img/payment-labels.svg';

import Badges from "@/components/Badges.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";
import FooterDisclaimer from "@/components/FooterDisclaimer.vue";
import FooterPaymentLabels from "@/components/FooterPaymentLabels.vue";
import OrderBump from "@/components/OrderBump.vue";

import SelectCountryFlags from "@/components/SelectCountryFlags.vue";
import CreditCardSavedData from "@/components/SavedCreditCard.vue";
import CheckoutStep from "@/components/CheckoutStep.vue";
import FormLabel from "@/components/FormLabel.vue";

export default {
    data() {
        return {
            pepper: this.pepper,
            tab: 1,
            checkoutHas2Columns: true,
            SvgPaymentLabels: SvgFlags,

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

            Classes: {
                checkoutLeftColumn: 'w-full max-w-3xl mx-auto pt-6 pb-8 lg:pb-10 px-3 flex flex-col gap-4',
                checkoutRightColumn: 'xl:pt-6 pb-12 px-3 flex flex-col gap-5',
                input: 'border border-slate-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-400 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                button: 'flex w-full justify-center rounded-md border-0 bg-green-500 text-lg tracking-tight font-bold text-white hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-0',
                containerPayment: 'w-full grid grid-cols-1 lg:grid-cols-2 gap-3 px-1',
                discount: {
                    input: 'h-[32px] border border-slate-300 text-gray-600 text-xs bg-white placeholder-gray-400 focus:border-indigo-400 grow rounded py-2 px-2.5 font-medium outline-none transition duration-500 focus:ring-0 disabled:cursor-default disabled:bg-[#F5F7FD]',
                    button: 'h-[32px] flex justify-center items-center rounded border-0 bg-indigo-600 text-xs tracking-tight font-bold min-w-[80px] text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0',
                },
                tabs: {
                    default: 'text-sm bg-white flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-1 lg:gap-[0.35rem] w-[29%] lg:w-1/6 px-4 py-2.5 lg:py-4 font-semibold rounded-md border hover:border-indigo-600 hover:text-indigo-500 transition duration-300',
                    selected: 'border-indigo-600 text-indigo-500',
                    notSelected: 'border-slate-400 text-gray-500 opacity-70 grayscale',
                },
                pixTab: {
                    titleWrapper: 'flex items-center justify-start gap-1 text-base tracking-tight font-bold text-[#33bcad] mb-1',
                    secondaryText: 'block text-xs text-gray-500 mb-4 font-medium'
                }
            },

            icons: {
                pix: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g fill="#32bcad" fill-rule="evenodd">
                <path d="M112.57 391.19c20.056 0 38.928-7.808 53.12-22l76.693-76.692c5.385-5.404 14.765-5.384 20.15 0l76.989 76.989c14.191 14.172 33.045 21.98 53.12 21.98h15.098l-97.138 97.139c-30.326 30.344-79.505 30.344-109.85 0l-97.415-97.416h9.232zm280.068-271.294c-20.056 0-38.929 7.809-53.12 22l-76.97 76.99c-5.551 5.53-14.6 5.568-20.15-.02l-76.711-76.693c-14.192-14.191-33.046-21.999-53.12-21.999h-9.234l97.416-97.416c30.344-30.344 79.523-30.344 109.867 0l97.138 97.138h-15.116z" />
                <path d="M22.758 200.753l58.024-58.024h31.787c13.84 0 27.384 5.605 37.172 15.394l76.694 76.693c7.178 7.179 16.596 10.768 26.033 10.768 9.417 0 18.854-3.59 26.014-10.75l76.989-76.99c9.787-9.787 23.331-15.393 37.171-15.393h37.654l58.3 58.302c30.343 30.344 30.343 79.523 0 109.867l-58.3 58.303H392.64c-13.84 0-27.384-5.605-37.171-15.394l-76.97-76.99c-13.914-13.894-38.172-13.894-52.066.02l-76.694 76.674c-9.788 9.788-23.332 15.413-37.172 15.413H80.782L22.758 310.62c-30.344-30.345-30.344-79.524 0-109.868" />
            </g>
        </svg>`,

                lock: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
        </svg>`,

                ticket: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
        </svg>`,

                pixLiClock: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,

                pixLiQRCode: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z" clip-rule="evenodd" />
        </svg>`,

                pixLiShield: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>`,

            },


            CreditCard: {
                expYear: [
                    { year: 2023 },
                    { year: 2024 },
                    { year: 2025 },
                    { year: 2026 },
                    { year: 2027 },
                    { year: 2028 },
                    { year: 2029 },
                    { year: 2030 },
                    { year: 2031 },
                    { year: 2032 }
                ],
                expMonth: [
                    { month: 1 },
                    { month: 2 },
                    { month: 3 },
                    { month: 4 },
                    { month: 5 },
                    { month: 6 },
                    { month: 7 },
                    { month: 8 },
                    { month: 9 },
                    { month: 10 },
                    { month: 11 },
                    { month: 12 }
                ]
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
            cardExpirationDateIsValid: null,
            cardExpirationDateErrorMessage: '',
            cardExpirationDate: null,
            cardExpirationMonth: null,
            cardExpirationYear: null,

            // Validação - Card Number
            cardNumberIsValid: null,
            cardNumberErrorMessage: '',
            cardNumber: null,
            cardFlag: undefined,

            // Validação - CVV
            cvvIsValid: null,
            cardCVVErrorMessage: '',
            cvv: null,

        }
    },
    methods: {
        paymentCreditCard() { this.tab = 1; },
        paymentPix() { this.tab = 2; },
        paymentBillet() { this.tab = 3; },


        // Validations:
        ValidateName(val) {
            this.nameIsValid = false;
            this.nameErrorMessage = 'Digite o seu nome completo.'

            if (val == '' || !val) this.nameErrorMessage = 'Este campo é obrigatório.';

            if (val.length >= 0 && val.length >= 4) this.nameIsValid = false;
            if (val.length > 4) this.nameIsValid = true;
        },

        ValidateEmail(mail) {
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

                const domain = RegExp(`.*${query.toLowerCase().split('').join('.*')}.*`)
                const matches = EmailDomains.filter(v => v.toLowerCase().match(domain))

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
                if (mail == '' || !mail) this.emailErrorMessage = 'Este campo é obrigatório.'
            }
        },

        SelectEmailSuggest(suggested) {
            this.showEmailAutoSuggest = false;
            this.email = this.email.split('@')[0] + '@' + suggested;
            this.emailIsValid = true;
        },

        ValidatePhone(phone) {
            this.phoneIsValid = false;
            let phoneNumbers = phone.replace(/[\s.,-,/(,/)]*/igm, '');

            if (phoneNumbers.length >= 10) {
                this.phoneIsValid = true;

            } else {
                this.phoneIsValid = false;
                this.phoneErrorMessage = "Digite um telefone válido."
            }
        },

        ValidateCPF(val) {
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

            if (this.doc == '') this.cpfErrorMessage = 'Este campo é obrigatório.'

            if (isCpfValid() == false) this.cpfIsValid = false;
            if (isCpfValid() == true) this.cpfIsValid = true;
        },

        ValidateCardHolder(val) {
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

        ValidateCardNumber(val) {
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
                ]

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
                        console.log(`${val} is a valid Credit Card number.`);
                        this.cardNumberIsValid = true;
                    } else {
                        this.cardNumberIsValid = false;
                        this.cardNumberErrorMessage = 'Informe um número de cartão válido.'
                        console.log(`${val} is not a valid Credit Card number.`);
                    }
                }
            }

        },

        validateCVV(cvv) {
            this.cvvIsValid = false;
            this.cardCVVErrorMessage = 'Campo obrigatório.';

            if (cvv && cvv.length >= 3) this.cvvIsValid = true;
        },

        submitPayment(e) {
            console.log('dados inválidos');
            e.preventDefault();

            // Se a Tab 'Cartão' estiver selecionada:
            if (this.tab == 1) {
                if (!this.cvv || this.cvv == '' || this.cvvIsValid == false) {
                    this.validateCVV(this.cvv);
                    this.$refs.cvv.focus();
                }
                if (!this.expirationYear || this.expirationYear == '' || !this.expirationMonth || this.expirationMonth == '' || this.cardExpirationDateIsValid == false) {
                    this.validateCardExpirationDate(this.expirationMonth, this.expirationYear)
                    this.$refs.expirationMonth.focus();
                }
                if (!this.cardHolder || this.cardHolder == '' || this.cardHolderIsValid == false) {
                    this.ValidateCardHolder(this.cardHolder);
                    this.$refs.cardHolder.focus();
                }
                if (!this.cardNumber || this.cardNumber == '' || this.cardNumberIsValid == false) {
                    this.ValidateCardNumber(this.cardNumber);
                    this.$refs.cardNumber.focus();
                }
            }

            if (!this.doc || this.doc == '' || this.cpfIsValid == false) {
                this.ValidateCPF(this.doc);
                this.$refs.doc.focus();
            }
            if (!this.phone || this.phone == '' || this.phoneIsValid == false) {
                this.ValidatePhone(this.phone);
                this.$refs.phone.focus();
            }
            if (!this.email || this.email == '' || this.emailIsValid == false) {
                this.ValidateEmail(this.email);
                this.$refs.email.focus();
            }
            if (!this.name || this.name == '' || this.nameIsValid == false) {
                this.ValidateName(this.name);
                this.$refs.name.focus();
            }

            if (this.nameIsValid == true && this.emailIsValid == true && this.phoneIsValid == true && this.cpfIsValid == true) {
                console.log('dados válidos')
            }

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
    <!-- <div class="w-full flex gap-2 lg:gap-3 items-center justify-center bg-slate-800 px-4 py-2.5">
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="rounded-full w-4 h-4 lg:w-5 lg:h-5 aspect-square bg-green-600 text-white flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div v-html="icons.lock" class="w-2.5 h-2.5 lg:w-3 lg:h-3"></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                            </span>-->
    <CountdownTimer />

    <div id="checkout-container" class="w-full flex flex-col xl:flex-row xl:justify-center">
        <!-- Checkout Left Column -->
        <div :class="[checkoutHas2Columns ? 'xl:mx-0 xl:w-2/3 xl:px-6' : '', Classes.checkoutLeftColumn]">

            <!-- Checkout Banner -->
            <img :src="BannerImg" class="w-full rounded-lg" />

            <!-- Payment form container -->
            <div :class="Classes.containerPayment">

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
                        @input="ValidateName(name)"
                        v-model="name"
                        ref="name"
                        autocomplete="name"
                        v-maska:[maskName]
                        data-maska="Aa a a a a"
                        :class="[{ 'input-has-error': nameIsValid == false }, Classes.input, 'pepper-input icon-user']"
                        required
                        inputmode="text"
                        type="text" />
                    <div v-if="nameIsValid == false" class="checkout-invalid-feedback"> {{ nameErrorMessage }} </div>
                </div>

                <div class="lg:col-span-2 relative">
                    <FormLabel name="Digite seu e-mail:" />
                    <input
                        :class="[{ 'input-has-error': emailIsValid == false }, Classes.input, 'pepper-input icon-email']"
                        v-model="email"
                        autocomplete="email"
                        ref="email"
                        @keyup="ValidateEmail(email)"
                        v-maska:[maskEmail]
                        data-maska="aab"
                        required
                        inputmode="email"
                        @keyup.enter="SelectEmailSuggest(emailSuggest[0])"
                        type="email" />

                    <!-- Email autosuggest -->
                    <transition appear>
                        <div v-if="showEmailAutoSuggest && emailSuggest.length > 0" class="w-full rounded-md bg-gray-50 border border-slate-400 shadow-lg absolute overflow-hidden top-100 z-40 mt-1">
                            <template v-for="sug in emailSuggest">
                                <li @click.stop.prevent="SelectEmailSuggest(sug)"
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
                            :class="[{ 'input-has-error': phoneIsValid == false }, Classes.input, 'pepper-input icon-phone rounded-l-none rounded-r-md']"
                            v-model="phone"
                            autocomplete="phone"
                            ref="phone"
                            @input="ValidatePhone(phone)"
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
                        :class="[{ 'input-has-error': cpfIsValid == false }, Classes.input]"
                        v-model="doc"
                        ref="doc"
                        @input="ValidateCPF(doc)"
                        v-maska
                        data-maska="###.###.###-##"
                        required
                        inputmode="tel"
                        type="text" />
                    <div v-if="cpfIsValid == false" class="checkout-invalid-feedback"> {{ cpfErrorMessage }} </div>
                </div>

                <div class="lg:col-span-2 pt-4">
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
                            <input :class="Classes.discount.input" type="text" inputmode="text" placeholder="Digite o código do cupom" />
                            <button :class="Classes.discount.button">
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>

                <CheckoutStep :hasNumber="true" :StepNumber="2" title="Dados de pagamento" class="mt-4" />

                <!-- Saved Credit card -->
                <CreditCardSavedData @hasSavedCardData="checkSavedCards" />

                <div class="flex justify-start gap-x-2 lg:col-span-2" v-show="hasSavedCards == false">
                    <button
                        @click="paymentCreditCard"
                        :class="[Classes.tabs.default, tab == 1 ? Classes.tabs.selected : Classes.tabs.notSelected, 'flex flex-col lg:flex-row items-center justify-center tracking-tight']">
                        <CreditCardIcon class='w-6 h-6 lg:w-5 flex items-center' />
                        Cartão
                    </button>
                    <button
                        @click="paymentPix"
                        :class="[Classes.tabs.default, tab == 2 ? Classes.tabs.selected : Classes.tabs.notSelected, 'flex flex-col lg:flex-row items-center justify-center tracking-tight']">
                        <span v-html="icons.pix" class='w-5 h-6 lg:w-[17px] flex items-center'></span>
                        PIX
                    </button>
                    <button
                        @click="paymentBillet"
                        :class="[Classes.tabs.default, tab == 3 ? Classes.tabs.selected : Classes.tabs.notSelected, 'flex flex-col lg:flex-row items-center justify-center tracking-tight']">
                        <div class="inline-flex items-center justify-center lg:justify-start h-6 w-auto">
                            <img class="w-7" :src="SvgPaymentLabels + '#boleto'" />
                        </div>
                        Boleto
                    </button>
                </div>

                <!-- Credit card Tab -->
                <div class="lg:col-span-2 grid grid-cols-3 gap-3 gap-x-2 my-2" v-if="hasSavedCards == false && tab === 1">
                    <div class="col-span-3">
                        <FormLabel name="Número do cartão:" />
                        <div class="relative">
                            <input
                                @input="ValidateCardNumber(cardNumber)"
                                v-model="cardNumber"
                                autocomplete="cardNumber"
                                ref="cardNumber"
                                v-maska
                                data-maska="#### #### #### ####"
                                :class="[{ 'input-has-error': cardNumberIsValid == false }, Classes.input]"
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
                            @input="ValidateCardHolder(cardHolder)"
                            v-model="cardHolder"
                            autocomplete="cardHolder"
                            ref="cardHolder"
                            v-maska:[maskCardHolder]
                            data-maska="A A A A"
                            :class="[{ 'input-has-error': cardHolderIsValid == false }, Classes.input]"
                            required
                            inputmode="text"
                            type="text" />
                        <div v-if="cardHolderIsValid == false" class="checkout-invalid-feedback"> {{ cardHolderErrorMessage }} </div>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="Mês:" />
                        <select
                            required
                            :class="[Classes.input, { 'text-gray-400': !expirationMonth, 'border-red-500 focus:border-red-500': expirationMonth !== null && expirationYear !== null && cardExpirationDateIsValid == false }]"
                            v-model="expirationMonth"
                            ref="expirationMonth"
                            @change="validateCardExpirationDate(expirationMonth, expirationYear)">
                            <option :value="null" disabled>Mês</option>
                            <template v-for="m in CreditCard.expMonth">
                                <option :value="(m.month).toString().padStart(2, '0')">{{ (m.month).toString().padStart(2, '0') }}</option>
                            </template>
                        </select>
                        <div v-if="expirationMonth !== null && expirationYear !== null && cardExpirationDateIsValid == false" class="checkout-invalid-feedback">
                            {{ cardExpirationDateErrorMessage }}
                        </div>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="Ano:" />
                        <select
                            required
                            :class="[Classes.input, { 'text-gray-400': !expirationYear, 'border-red-500 focus:border-red-500': expirationMonth !== null && expirationYear !== null && cardExpirationDateIsValid == false }]"
                            v-model="expirationYear"
                            ref="expirationYear"
                            @change="validateCardExpirationDate(expirationMonth, expirationYear)">
                            <option :value="null" disabled>Ano</option>
                            <template v-for="y in CreditCard.expYear">
                                <option :value="y.year">{{ y.year }}</option>
                            </template>
                        </select>
                    </div>

                    <div class="col-span-1">
                        <FormLabel name="CVV:" />
                        <input
                            :class="[{ 'border-red-500 focus:border-red-500': cvvIsValid == false }, Classes.input]"
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
                        <div v-if="cvvIsValid == false" class="checkout-invalid-feedback"> {{ cardCVVErrorMessage }} </div>
                    </div>

                    <div class="col-span-3">
                        <FormLabel name="Parcelamento:" />
                        <select
                            required
                            :class="[Classes.input]"
                            v-model="selectedInstallment">
                            <template v-for="inst in installment">
                                <option :value="inst">{{ inst.text }}</option>
                            </template>
                        </select>
                    </div>
                </div>
                <!-- End Credit card Tab -->

                <!-- PIX Tab -->
                <div class="lg:col-span-2 mt-2" v-show="tab === 2">
                    <span class="block text-base font-semibold text-slate-600 mb-4">
                        Pague no PIX
                    </span>
                    <span :class="Classes.pixTab.titleWrapper">
                        <div v-html="icons.pixLiClock"></div>
                        Imediato
                    </span>
                    <span :class="Classes.pixTab.secondaryText">
                        Ao selecionar a opção Gerar Pix, o código para pagamento estará disponível.
                    </span>
                    <span :class="Classes.pixTab.titleWrapper">
                        <div v-html="icons.pixLiQRCode"></div>
                        Pagamento simples
                    </span>
                    <span :class="Classes.pixTab.secondaryText">
                        Basta abrir o aplicativo do seu banco, procurar pelo PIX e escanear o QRcode.
                    </span>
                    <span :class="Classes.pixTab.titleWrapper">
                        <div v-html="icons.pixLiShield"></div>
                        100% Seguro
                    </span>
                    <span :class="Classes.pixTab.secondaryText">
                        O pagamento com PIX foi desenvolvido pelo Banco Central para facilitar suas compras.
                    </span>
                </div>
                <!-- End PIX Tab -->

                <!-- Billet Tab -->
                <div class="lg:col-span-2 mt-2" v-show="tab === 3">
                    <span class="block text-base font-semibold text-slate-600 mb-4">
                        Boleto bancário (somente à vista)
                    </span>
                    <span class="block mb-2">
                        <CheckCircleIcon class="w-4 h-4 text-indigo-600 inline-block mb-[2px]" />
                        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
                            Pagamentos com Boleto bancário podem levar até 3 dias úteis para serem compensados e então ter os produtos liberados.
                        </span>
                    </span>
                    <span class="block mb-2">
                        <CheckCircleIcon class="w-4 h-4 text-indigo-600 inline-block mb-[2px]" />
                        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
                            Atente-se ao vencimento do boleto. Você pode pagar o boleto em qualquer banco ou casa lotérica até o dia do vencimento.
                        </span>
                    </span>
                    <span class="block mb-2">
                        <CheckCircleIcon class="w-4 h-4 text-indigo-600 inline-block mb-[2px]" />
                        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
                            Depois do pagamento, verifique seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM).
                        </span>
                    </span>
                </div>
                <!-- End Billet Tab -->

                <!-- Order bumps -->
                <CheckoutStep :hasNumber="false" title="🔥 Aproveite e leve também:" class="mt-4" />
                <div class="lg:col-span-2">
                    <OrderBump />
                </div>
                <!-- End Order bumps -->

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
                    <button id="buyBtn" :class="Classes.button" @click="submitPayment">
                        Comprar agora
                    </button>
                    <!-- <span class="block mt-4 text-center text-xs font-medium tracking-normal text-slate-400">
                                                Você está em um ambiente seguro.
                                        </span> -->
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
        <div v-if="checkoutHas2Columns" :class="['max-w-xl mx-auto xl:mx-0 w-full xl:w-1/3 xl:pl-5 xl:border-l xl:border-zinc-200', Classes.checkoutRightColumn]">

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

            <!-- Checkout Badges -->
            <Badges />

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
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#mastercard');
}

.saved-credit-card.visa {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#visa');
}

.saved-credit-card.hipercard {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#hipercard');
}

.saved-credit-card.elo {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#elo');
}

.saved-credit-card.amex {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#amex');
}

.saved-credit-card.jcb {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#jcb');
}

.saved-credit-card.discover {
    background-image: url('https://img6.wsimg.com/fos/react/icons/115/gd/sprite.svg#discover');
}

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
.pepper-input.icon-user,
.pepper-input.icon-phone,
.pepper-input.icon-email {
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
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="slategray" width="14" height="14"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/%3E%3C/svg%3E')
}
</style>