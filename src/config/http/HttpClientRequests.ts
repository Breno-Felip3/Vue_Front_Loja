import axios, { AxiosInstance } from "axios";
import HttpCliente from "@/config/http/HttpCliente";
import { API_URL, NAME_TOKEN } from "@/utils/constantes";

class HttpClientRequests implements HttpCliente{

    private axiosInstance: AxiosInstance | null = null
    private static instance: HttpClientRequests | null = null

    constructor() {
        const baseURL = API_URL

        this.axiosInstance = axios.create({
            baseURL,
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }

    static getInstance(): HttpCliente
    {
        if (!this.instance){
            this.instance = new HttpClientRequests()
        }

        return this.instance
    }

    withAuthorization(): this {
        if(this.axiosInstance){
            const token = localStorage.getItem(NAME_TOKEN)
            this.axiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        }
        return this
    }

    async get(url: string, configs?: object): Promise<any> {
        return await this.axiosInstance?.get(url, configs);
    }
    async post(url: string, body: object, configs?: object): Promise<any> {
        return await this.axiosInstance?.post(url, body, configs);
    }
    async put(url: string, body: object, configs?: object): Promise<any> {
        return await this.axiosInstance?.put(url, body, configs);
    }
    async delete(url: string, configs: object): Promise<any> {
       return await this.axiosInstance?.delete(url, configs);
    }
}

export default HttpClientRequests.getInstance()





