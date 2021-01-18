<template>
    <div id="hot-reload">
        <counter></counter>
    </div>
</template>

<script>

import Counter from './components/Counter.vue';

export default {
    name: 'hot-reload',
    components: {
        Counter,
    },
    data() {
        return {
        };
    },
};
</script>

<style>

</style>
