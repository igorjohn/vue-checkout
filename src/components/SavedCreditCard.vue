<script setup>
import { CheckCircleIcon, TrashIcon } from '@heroicons/vue/20/solid'
</script>

<script>
export default {
    data() {
        return {

            hasSavedCardData: false,

            selectedCreditCardSavedData: 1,
            creditCardSavedData: [
                {
                    id: 1,
                    brand: 'Mastercard',
                    lastDigits: '**** **** **** 7749',
                    expiration: '04/24',
                    isActive: true
                },
                {
                    id: 2,
                    brand: 'Visa',
                    lastDigits: '**** **** **** 6763',
                    expiration: '11/28',
                    isActive: true
                },
                {
                    id: 3,
                    brand: 'Elo',
                    lastDigits: '**** **** **** 6763',
                    expiration: '11/28',
                    isActive: true
                }
            ]
        }
    },

    created() {

        this.hasSavedCardData = true;
        this.$emit('hasSavedCardData', this.hasSavedCardData);

    },

    methods: {

        toggleSavedCard(e) { this.selectedCreditCardSavedData = e },

        removeCreditCard(card) {
            card.isActive = false;

            // Ver se há cartões salvos
            let totalActive = this.creditCardSavedData.filter((el) => { return (el.isActive === true) }).length;

            if (this.selectedCreditCardSavedData == card.id && totalActive !== 0) {
                // Selecionar o primeiro cartão da Array 'isActive':
                this.selectedCreditCardSavedData = this.creditCardSavedData.filter((el) => { return (el.isActive === true) })[0].id;
            }

            if (totalActive == 0) {
                this.hasSavedCardData = false;
                this.$emit('hasSavedCardData', this.hasSavedCardData);
            }
        }
    }
};
</script>
  
<template>
    <div class="lg:col-span-2 flex flex-col" v-if="hasSavedCardData && creditCardSavedData && creditCardSavedData.filter((el) => { return (el.isActive === true) }).length > 0">
        <template v-for="cc in creditCardSavedData">
            <transition appear>
                <div
                    v-if="cc.isActive"
                    @click="toggleSavedCard(cc.id)"
                    :class="[selectedCreditCardSavedData === cc.id ? 'border-green-600' : 'border-gray-150 hover:border-green-600', 'w-full rounded-md bg-gray-50 border-2 transition duration-700 flex grow gap-2 px-3 py-3.5 items-center justify-between cursor-pointer mb-2']">
                    <div class="flex gap-3 items-center justify-start grow">
                        <div :class="[{ 'visa': cc.brand == 'Visa' }, { 'mastercard': cc.brand == 'Mastercard' }, { 'hipercard': cc.brand == 'Hipercard' }, { 'elo': cc.brand == 'Elo' }, { 'amex': cc.brand == 'AMEX' }, { 'jcb': cc.brand == 'JCB' }, { 'discover': cc.brand == 'Discover' }, 'saved-credit-card']">
                        </div>
                        <div>
                            <span class="flex gap-1 text-sm text-slate-700 font-semibold">
                                {{ cc.brand }}
                                <span class="font-bold ml-1 tracking-tight">{{ cc.lastDigits }}</span>
                            </span>
                            <span class="flex gap-1 text-xs text-slate-500 font-normal block mt-[2px]">
                                Validade {{ cc.expiration }}
                            </span>
                        </div>
                    </div>
                    <div class="inline-flex items-center justify-center gap-2 mr-1 transition duration-500">
                        <TrashIcon @click.stop.prevent="removeCreditCard(cc)" class="w-4 h-4 text-gray-400 opacity-80" />
                        <CheckCircleIcon :class="[selectedCreditCardSavedData == cc.id ? 'text-green-500' : 'text-slate-300', 'w-6 h-6 transition duration-700']" />
                    </div>
                </div>
            </transition>
        </template>
    </div>
</template>

<style scoped>
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
</style>