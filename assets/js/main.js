'use strict';
const { createApp } = Vue

const vueStart = createApp({
    data() {
        return {
            message: "Hello and Welcome",
            mainImage: `assets/images/diary2.jpg`
        }
    }
}).mount("#app")
