<template>
<div>
    <router-view></router-view>
    <Header />
    <Nav />
    <AddBook />
</div>
</template>
    
<script>
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import AddBook from '@/components/AddBook';
export default {
    components: {
        Header,
        Nav,
        AddBook
    }
};
</script>

<style>
</style>