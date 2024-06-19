import HomeAdmin from '@/pages/admin/home/HomeAdmin.vue';
import AuthTemplate from '@/layouts/AuthTemplate.vue';
import LoginPage from '@/pages/Auth/LoginPage.vue';
import ForgotPassword from '@/pages/Auth/ForgotPassword.vue';
import DefaultTemplate from "@/layouts/DefaultTemplate.vue";

export const routes = [
    {
        path: '/',
        component: AuthTemplate,
        children: [
            {
                path:'',
                component: LoginPage,
                name: 'auth.login'

            },
            {
                path:'/esqueci-a-senha',
                component: ForgotPassword,
                name: 'forgot.password'

            }
        ]
    },
    {
        path: '/admin',
        component: DefaultTemplate,
        children: [
            {
                path:'',
                component: HomeAdmin,
                name: 'admin.home'
            },
        ]
    },
]



