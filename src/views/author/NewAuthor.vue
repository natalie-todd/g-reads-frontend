<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <AddAuthor />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import AddAuthor from '@/components/AddAuthor';
export default {
    components: {
        Header,
        Nav,
        AddAuthor
    }
};
</script>

<style>
</style>