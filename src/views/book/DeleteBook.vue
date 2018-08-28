<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <DeleteB />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import DeleteB from '@/components/DeleteB';
export default {
    components: {
        Header,
        Nav,
        DeleteB
    }
};
</script>

<style>
</style>