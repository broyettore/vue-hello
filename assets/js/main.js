'use strict';

const { createApp } = Vue

const vueStart = createApp({
    data() {
        return {
            message: "hello"
        }
    }
}).mount("#app")