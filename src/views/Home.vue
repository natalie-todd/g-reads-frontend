<template>
<div>
    <router-view></router-view>
    <Header />
    <Options />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Options from '@/components/Options';
export default {
    components: {
        Header,
        Options
    }
};
</script>

<style>
</style>