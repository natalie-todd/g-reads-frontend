<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <DeleteA />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import DeleteA from '@/components/DeleteA';
export default {
    components: {
        Header,
        Nav,
        DeleteA
    }
};
</script>

<style>
</style>