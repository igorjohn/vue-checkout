<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
</script>

<script>
export default {

};
</script>
  
<template>
    <span class="block text-base font-semibold text-slate-600 mb-4">
        Boleto bancário (somente à vista)
    </span>
    <span class="block mb-2">
        <CheckCircleIcon class="w-4 h-4 text-green-500 inline-block mb-[2px]" />
        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
            Pagamentos com Boleto bancário podem levar até 3 dias úteis para serem compensados e então ter os produtos liberados.
        </span>
    </span>
    <span class="block mb-2">
        <CheckCircleIcon class="w-4 h-4 text-green-500 inline-block mb-[2px]" />
        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
            Atente-se ao vencimento do boleto. Você pode pagar o boleto em qualquer banco ou casa lotérica até o dia do vencimento.
        </span>
    </span>
    <span class="block mb-2">
        <CheckCircleIcon class="w-4 h-4 text-green-500 inline-block mb-[2px]" />
        <span class="leading-5 tracking-tight font-medium text-sm text-gray-500">
            Depois do pagamento, verifique seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM).
        </span>
    </span>
</template>

