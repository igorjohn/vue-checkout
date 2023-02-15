
<script>

export default {
    data() {
        return {

            showNotification: true,

            notificationSettings: {
                duration: 558,
                title: 'Parabéns, você está prestes a concluir sua compra!',
                hasIcon: true,

                icon: {
                    cart: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>`,

                }

            }
        }
    },
    methods: {
        progressWidth(bar) {
            bar.style.width = '5px';
            bar.style.transition = 'width';
            bar.style.transitionTimingFunction = 'ease-out';
            bar.style.transitionDuration = this.notificationSettings.duration + 's';
        },

        startTimer: function () {
            this.notificationSettings.duration = this.notificationSettings.duration - 1;

            if (this.notificationSettings.duration <= 0) {
                this.showNotification = false;
            }
        }
    },

    mounted() {
        setInterval(() => {

            this.startTimer()
        }, 1000);
    }
};
</script>
  
<template>
    <Transition>
        <div v-if="showNotification" class="fixed w-full bottom-0 right-0 px-2 py-3 z-20">

            <div class="max-w-3xl ml-auto shadow-lg bg-[#f0fdf4] border border-[#4ade80] rounded overflow-hidden">
                <div class="mx-auto flex flex-row gap-2 px-5 py-4 xl:py-5 relative">

                    <template v-if="notificationSettings.hasIcon">
                        <div v-html="notificationSettings.icon.cart" class="w-4 h-4 text-green-600 -ml-1 mt-[1px]"></div>
                    </template>

                    <span class="text-sm tracking-tight font-semibold leading-5 text-green-800">
                        {{ notificationSettings.title }}
                    </span>

                    <button class="text-zinc-400 absolute top-0 right-0 m-2" @click="showNotification = false">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div class="notification-progress-wrapper">
                    <transition appear @after-appear="progressWidth">
                        <div class="notification-progress-current"></div>
                    </transition>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.notification-progress-wrapper {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: rgb(14, 174, 73, 0.1);
    height: 0.25rem;
}

.notification-progress-wrapper .notification-progress-current {
    height: 100%;
    width: 100%;
    background: #4ade80;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease, transform 1s ease;
}

.v-enter-to,
.v-leave-from {
    transform: translateY(0);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(200%);
}
</style>