<script>

export default {
    data() {
        return {
            countdownInSeconds: 158,
            timerOutput: '00:00',
            countdownMessage: 'Finalize agora para não perder esta oportunidade!',
            countdownColors:
            {
                countdownBg: '#d31e27',
                progressBarCurrent: '#0ede4c',
                progressBarBg: '#a4151b',
                text: '#ffffff',
                svg: '#faa300'
            }
        }
    },
    methods: {
        progressWidth(bar) {
            bar.style.width = '5px';
            bar.style.transition = 'width';
            bar.style.transitionDuration = this.countdownInSeconds + 's';
            bar.style.backgroundColor = this.countdownColors.progressBarCurrent;
        },

        startTimer: function () {
            this.countdownInSeconds = this.countdownInSeconds - 1;

            let remainingMinutes = Math.floor(this.countdownInSeconds / 60);
            let remainingSeconds = this.countdownInSeconds - (remainingMinutes * 60)

            if (remainingMinutes < 10) { remainingMinutes = '0' + remainingMinutes }
            if (remainingSeconds < 10) { remainingSeconds = '0' + remainingSeconds }

            this.timerOutput = remainingMinutes + ":" + remainingSeconds;

            if (this.countdownInSeconds <= 0) {
                this.countdownInSeconds = 1;
                this.countdownMessage = 'O tempo acabou! Vagas esgotadas'
            }
        }
    },

    mounted() {
        setInterval(() => { this.startTimer() }, 1000);
    }
};
</script>
  
<template>
    <div class="sticky flex flex-col grow top-0 right-0 z-20 opacity-[97%] shadow-lg" :style="'background:' + countdownColors.countdownBg">
        <div class="flex gap-5 items-center justify-center max-w-xl mx-auto px-4 py-3" :style="'color:' + countdownColors.text">
            <h2 class="text-3xl lg:text-3xl font-bold font-mono tracking-tight">{{ timerOutput }}</h2>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" :style="'fill:' + countdownColors.svg" class="w-9 h-9 lg:w-10 lg:h-10 shrink-0">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                    <path
                        d="M2651 5004 c-69 -19 -108 -43 -161 -100 -136 -148 -114 -380 48 -499 26 -19 64 -40 85 -47 l37 -11 0 -127 0 -127 -72 -18 c-233 -56 -514 -194 -723 -354 -76 -58 -243 -218 -308 -296 l-50 -60 -383 -5 -382 -5 -26 -24 c-50 -48 -39 -133 21 -160 16 -7 129 -11 323 -11 165 0 300 -2 300 -4 0 -2 -24 -50 -54 -107 -29 -57 -68 -143 -86 -191 l-33 -88 -563 0 -563 0 -26 -22 c-34 -30 -44 -88 -20 -124 35 -53 41 -54 601 -54 l516 0 -6 -22 c-7 -27 -33 -217 -42 -300 l-5 -58 -230 0 c-250 0 -274 -4 -297 -55 -15 -33 -15 -57 0 -90 23 -51 47 -55 301 -55 l234 0 7 -80 c6 -77 42 -275 52 -292 3 -4 -141 -8 -321 -8 -353 0 -377 -3 -410 -54 -24 -36 -14 -94 20 -124 26 -22 27 -22 401 -22 l375 0 11 -32 c20 -58 115 -244 168 -329 194 -313 487 -575 825 -739 491 -239 1018 -271 1550 -95 87 29 331 145 408 195 81 52 96 124 35 175 -40 34 -83 32 -143 -6 -94 -60 -265 -140 -382 -179 -540 -179 -1129 -100 -1598 215 -748 503 -1014 1475 -626 2290 248 520 710 879 1291 1002 114 25 145 27 350 27 206 0 236 -2 351 -27 183 -39 296 -78 464 -162 168 -84 286 -164 417 -285 628 -579 769 -1532 334 -2263 -55 -94 -62 -118 -46 -158 21 -49 93 -74 141 -49 25 14 77 97 143 228 342 83 271 1498 -185 2112 -77 104 -247 281 -349 363 -214 173 -482 310 -743 379 l-87 23 0 125 0 125 56 24 c71 31 139 97 172 169 37 81 38 193 0 273 -36 79 -89 133 -166 171 l-67 33 -415 2 c-341 2 -425 0 -469 -13z m839 -190 c43 -9 97 -65 106 -108 8 -46 -10 -96 -47 -132 l-30 -29 -410 -3 c-399 -3 -412 -2 -444 18 -64 39 -84 129 -42 191 45 68 49 69 463 69 204 0 386 -3 404 -6z m-150 -576 l0 -103 -240 0 -240 0 0 103 0 102 240 0 240 0 0 -102z">
                    </path>
                    <path d="M2910 3663 c-207 -33 -359 -81 -520 -164 -419 -216 -710 -601 -812 -1073 -32 -148 -32 -455 1 -606 90 -422 331 -774 686 -1002 507 -326 1163 -326 1670 0 355 228 596 580 686 1002 33 151 33 458 1 606 -138 637 -632 1117 -1260 1225 -106 18 -372 25 -452 12z m405 -208 c584 -96 1030 -550 1121 -1140 19 -121 14 -343 -10 -455 -59 -273 -180 -496 -375 -690 -198 -197 -414 -314 -684 -371 -135 -29 -380 -32 -510 -6 -187 38 -372 115 -527 220 -41 29 -123 99 -181 157 -195 194 -316 417 -375 690 -24 112 -29 334 -10 455 90 586 537 1043 1115 1140 106 18 328 18 436 0z"></path>
                    <path d="M3051 3276 c-37 -20 -50 -55 -51 -129 0 -76 17 -118 57 -136 32 -15 59 -14 92 3 38 20 51 55 51 142 0 70 -2 78 -29 105 -33 32 -78 38 -120 15z"></path>
                    <path d="M3765 2916 c-16 -8 -142 -127 -279 -264 l-249 -250 -40 14 c-49 17 -150 17 -197 -1 l-35 -13 -126 124 c-116 114 -129 124 -163 124 -48 0 -72 -13 -91 -50 -31 -60 -24 -74 110 -209 l124 -126 -14 -49 c-32 -106 -8 -216 66 -299 120 -137 338 -137 458 0 74 83 98 193 66 299 l-15 49 260 260 c255 256 260 262 260 302 0 30 -7 47 -26 67 -15 14 -32 26 -40 26 -7 0 -18 2 -26 5 -7 2 -26 -2 -43 -9z m-589 -720 c40 -40 45 -83 15 -132 -57 -93 -201 -47 -201 65 0 51 54 101 110 101 34 0 48 -6 76 -34z"></path>
                    <path d="M1965 2196 c-46 -46 -43 -112 7 -149 29 -22 108 -33 161 -23 84 16 116 108 58 167 -28 28 -34 29 -116 29 -78 0 -88 -2 -110 -24z"></path>
                    <path d="M4009 2191 c-21 -22 -29 -39 -29 -66 0 -79 45 -109 158 -103 69 3 76 6 103 36 31 35 36 66 17 107 -18 40 -57 55 -143 55 -71 0 -79 -2 -106 -29z"></path>
                    <path d="M3073 1243 c-12 -2 -34 -18 -48 -34 -22 -27 -25 -40 -25 -110 0 -73 2 -81 29 -111 33 -37 82 -43 125 -14 35 22 46 53 46 126 0 32 -4 70 -10 84 -15 40 -70 68 -117 59z"></path>
                    <path d="M63 1595 c-99 -43 -71 -185 36 -185 96 0 138 124 59 173 -37 24 -61 27 -95 12z"></path>
                    <path d="M4389 831 c-38 -39 -39 -87 -3 -130 21 -26 33 -31 68 -31 49 0 79 18 96 59 40 98 -85 177 -161 102z"></path>
                </g>
            </svg>

            <span class="inline text-xs lg:text-sm font-medium max-w-[44vw] leading-4 lg:leading-5">
                {{ countdownMessage }}
            </span>
        </div>
        <div class="countdown-progress-wrapper" :style="'background: ' + countdownColors.progressBarBg">
            <transition appear @after-appear="progressWidth">
                <div class="countdown-progress-current"></div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.countdown-progress-wrapper {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: rgb(0, 0, 0, .25);
    height: 0.5rem;
}

.countdown-progress-wrapper .countdown-progress-current {
    height: 100%;
    width: 100%;
}
</style>