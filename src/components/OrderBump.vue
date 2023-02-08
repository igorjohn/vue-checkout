<script>

// Mock images
import OrderBump01 from '@/assets/img/mock/orderbump-01.jpeg';
import OrderBump02 from '@/assets/img/mock/orderbump-02.jpeg';

export default {
    data() {
        return {

            Icons: {
                orderBumpArrow: `
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 512" preserveAspectRatio="xMidYMid meet" class="text-[#dc2626] w-8 pb-[0.15rem]" fill="currentColor">
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path d="m596.39 279.65c-0.0625-3.1133-1.4961-6.1758-3.8516-8.2227l-156.8-134.33c-3.2383-2.8125-8.1562-3.5117-12.051-1.7148-3.8945 1.7969-6.5469 5.9961-6.5 10.285v67.164h-302.39c-5.8633 0-11.199 5.332-11.199 11.195v111.94c0 5.8594 5.3359 11.191 11.199 11.195h302.39v67.164c-0.042968 4.2852 2.6055 8.4844 6.5 10.285 3.8945 1.7969 8.8125 1.0977 12.051-1.7148l156.8-134.32c2.5312-2.1953 3.9883-5.5742 3.8516-8.918z"></path>
                    </g>
                </svg>`,
            },

            Classes: {
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
            ]
        }
    }
};
</script>
  
<template>
    <div class="my-2">
        <template v-for="ob in OrderBumpProducts">
            <label :class="Classes.orderBump.label">
                <span :class="Classes.orderBump.titleWrapper">
                    <div v-html="Icons.orderBumpArrow"></div>
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
    </div>
</template>