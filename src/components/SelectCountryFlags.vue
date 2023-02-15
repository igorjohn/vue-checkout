<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

</script>

<script>

import ChinaFlag from "@/assets/img/country-flags/China.png"
import ArgentinaFlag from "@/assets/img/country-flags/Argentina.png"
import BrasilFlag from "@/assets/img/country-flags/Brasil.png"
import ChileFlag from "@/assets/img/country-flags/Chile.png"
import MexicoFlag from "@/assets/img/country-flags/Mexico.png"

const countries = [
    { DDI: 55, flag: BrasilFlag },
    { DDI: 86, flag: ChinaFlag },
    { DDI: 86, flag: ArgentinaFlag },
    { DDI: 86, flag: ChileFlag },
    { DDI: 86, flag: MexicoFlag },
];
const selectedCountry = ref(countries[0]);

export default {
    data() {
        return {
            pepper: this.pepper,
        }
    }
}
</script>

<template>
    <Listbox v-model="selectedCountry">
        <div class="relative min-w-[60px]">
            <ListboxButton
                class="relative border border-slate-300 bg-white w-full rounded-l-md border-r-0 flex items-center justify-center h-[38px] px-2 outline-none transition duration-500 focus:ring-0">
                <div class="overflow-hidden rounded-[2px] shrink-0 mr-1">
                    <img :src="selectedCountry.flag" class="w-[24px] h-auto" />
                </div>
                <span class="pointer-events-none flex items-center shrink-0 -mr-1">
                    <ChevronDownIcon class="h-3.5 w-3.5 text-gray-400 shrink-0" aria-hidden="true" />
                </span>
            </ListboxButton>
            <transition
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                    class="absolute mt-[2px] min-w-[68px] rounded border border-slate-300 bg-white overflow-hidden shadow-lg ring-0 focus:outline-none focus:ring-0 sm:text-sm">
                    <ListboxOption
                        v-slot="{ active }"
                        v-for="c in countries"
                        :key="c.DDI"
                        :value="c"
                        as="template">
                        <li :class="[active ? 'bg-slate-200' : '', 'relative cursor-pointer select-none py-[.3rem] px-1.5 flex items-center justify-center']">
                            <div class="shadow-md rounded-[2px] shrink-0 mr-1 overflow-hidden">
                                <img :src="c.flag" class="w-[22px] h-auto" />
                            </div>
                            <span class="block text-xs font-medium tracking-tight text-slate-500">
                                +{{ c.DDI }}
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>