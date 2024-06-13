import axios from "axios";
export default class CategoryService{
    
    static async getAllCategory()
    {
        return axios.get('/categorias')
    }

}






