<script>
export default {
    data() {
        return {
            producerEmail: 'contato@produtor.uy',
            mailHref: 'mailto:' + this.producerEmail,
        }
    }
};
</script>
  
<template>
    <div class="mt-2 flex flex-col gap-3 xl:gap-2">
        <span class="text-xs text-gray-500 block">
            Esta compra é processada por Pepper Tecnologia e Pagamentos Ltda. *Taxa de 2,99% a.m.
        </span>
        <span class="text-xs text-gray-500 block">
            Ao continuar nesta compra, você concorda com os
            <a href="https://pepper.com.br/termos-de-uso" class="text-gray-600 hover:text-indigo-600 transition duration-500">Termos de uso e privacidade</a>
        </span>
        <span class="text-xs text-gray-500 block">
            Dúvidas? Entre em contato com o produtor:
            <a :href="mailHref" class="text-xs underline text-gray-600 font-medium hover:text-indigo-500 transition duration-500">
                {{ producerEmail }}
            </a>
        </span>
    </div>
</template>
