<template>
    <h1>Categorias</h1>
    <ul>
        <li v-for="category in categories" :key="category.id">
            {{ category.id }}
            {{ category.nome }}
        </li>
    </ul>
   
</template>
  
<script>

import CategoriesService from '@/service/categories.servece';
import { onMounted, ref } from 'vue';

export default {
    name: 'CategoriesView',

    setup(){
        const categories = ref([])

        onMounted( ()=>{
            CategoriesService.getAllCategory()
            .then(response => {
                categories.value = response.data
            })
            .catch(error => {
                console.log(error)
            }) 
        })

        return{
            categories
        }
    }
}
</script>
  