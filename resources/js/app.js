import Vue from 'vue'

// import router definition
import router from './router'

// import route component
import App from './App.vue'

new Vue({
    el: '#app',
    router, // router difinition
    components: { App }, // declare to use route component
    template: '<App />'
})
