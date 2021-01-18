import Vue from 'vue';
import App from './App.vue';
import HotReload from './HotReload.vue';

new Vue({
    el: '#app',
    render: (h) => h(App),
});

new Vue({
    el: '#hot-reload',
    render: (h) => h(HotReload),
});
