<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <EditA />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import EditA from '@/components/EditA';
export default {
    components: {
        Header,
        Nav,
        EditA
    }
};
</script>

<style>
</style>