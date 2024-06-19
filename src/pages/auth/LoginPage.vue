<template>
    <h1>Login</h1>

    <form action="#" method="POST" @submit.prevent="auth" > 
        
        <div v-if="error.active">
            <p>{{ error.msgError }}</p>
        </div>

        <div>
            <label for="email">Email</label>
            <input v-model="email" type="text" name="email">
        </div>
        <div>
            <label for="password">Senha</label>
            <input v-model="password" type="text" name="password">
        </div>

        <button type="submit">
            <span v-if="loading">Carregando</span>
            <span v-else="loading">Login</span>
        </button>

    </form>

    <div>
        <a href="/esqueci-a-senha">Esqueci a senha</a>
    </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import { UsersStore } from '@/store/users'

export default {

    setup(){
        const loading = ref(false)
        const email = ref('')
        const password = ref('')
        const userStore = UsersStore()
        // const messageError = ref('')
        const error = reactive({
            msgError: '',
            status: 0,
            active: false
        })

        const auth = () =>{
            loading.value = true
           
            userStore.auth(email.value, password.value)
                .then(response => alert(response.data.access_token))
                .catch((responseError) => {
                    error.msgError = 'Falha ao autenticar'
                    error.status = responseError.response.status  
                    error.active = true

                    if (error.status === 422){
                        error.msgError = "Dados inválidos"
                    }
                    if (error.status === 404){
                        error.msgError = "Usuário não encontrado"
                    }
                })
                .finally(() => loading.value = false)
        }

        return{
            email,
            password,
            loading,
            auth,
            error,
        }
    }
}
</script>


