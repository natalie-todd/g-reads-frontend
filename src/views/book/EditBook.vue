<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <EditB />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import EditB from '@/components/EditB';
export default {
    components: {
        Header,
        Nav,
        EditB
    }
};
</script>

<style>
</style>