<script>
export default {
    data() {
        return {
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
        }
    }
};
</script>
  
<template>
    <div v-if="Badges && Badges !== []" class="flex flex-col gap-2">
        <div v-for="badge in Badges">
            <div v-if="badge.isShown" class="flex items-center justify-start gap-2 rounded-md bg-white px-3 py-3.5 lg:px-3.5 border border-zinc-300">
                <span v-html="badge.icon" class="w-5 h-5 text-indigo-500 shrink-0"></span>
                <div>
                    <span class="block text-sm leading-5 font-semibold text-slate-600 tracking-tight mb-1">
                        {{ badge.title }}
                    </span>
                    <span class="block text-xs font-medium text-gray-400">
                        {{ badge.body }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
