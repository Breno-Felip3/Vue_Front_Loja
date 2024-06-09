import axios from "axios";
export default class CategoriesService{
    
    static async getAllCategory()
    {
        return axios.get('/categorias')
    }

}