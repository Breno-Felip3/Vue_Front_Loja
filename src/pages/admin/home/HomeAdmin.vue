<template>
    <p> Olá {{ userStore.me?.nome}}</p>
    <div>Home Admin</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { UsersStore } from '@/store/users' 
const userStore = UsersStore()
onMounted(() => {
    userStore.getMe()
    
})
</script>