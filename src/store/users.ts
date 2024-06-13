import { defineStore } from "pinia";
import UserGatewayHttp from "@/config/gateway/UserGatewayHttp";
import User from "@/entities/User";

const userGateway = new UserGatewayHttp
export const UsersStore = defineStore('users',{
    state: () => ({
        me: null as null | User,
        users: [] as User[]
    }),
    getters: {
        hasUsers: (state) => state.users.length > 0
    },
    actions: {
        async auth(email: string, password: string ): Promise<any> {
           return await userGateway.login(email, password)
        }
    }

})