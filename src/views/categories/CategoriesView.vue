<template>
    <h1>Categorias</h1>

    <div v-if="loading">
        Carregando os dados
    </div>

    <ul>
        <li v-for="category in categories" :key="category.id">
            {{ category.id }}
            {{ category.nome }}
        </li>
    </ul>
   
</template>
  
<script>

import CategoryService from '@/service/CategoryService';
import { onMounted, ref } from 'vue';

export default {
    name: 'CategoriesView',

    setup(){
        const categories = ref([])

        const loading = ref(false)

        onMounted( async ()=>{
             loading.value = true;
            CategoryService.getAllCategory()
                .then(response => {
                    categories.value = response.data
                })
                .catch(error => {
                    console.log(error)
                }) 
                .finally(()=>{
                    
                    loading.value = false
                })
        })

        return{
            loading,
            categories
        }
    }
}
</script>
  