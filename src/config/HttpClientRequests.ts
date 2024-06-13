import axios, { AxiosInstance } from "axios";
import HttpCliente from "./HttpCliente";

class HttpClientRequests implements HttpCliente{

    private axiosInstance: AxiosInstance | null = null
    private static instance: HttpClientRequests | null = null

    constructor() {
        const baseURL = 'http://localhost/api'

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





