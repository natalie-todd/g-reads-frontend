<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
export default {
    components: {
        Header,
        Nav
    }
};
</script>

<style>
</style>