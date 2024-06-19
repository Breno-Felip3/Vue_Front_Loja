import HttpClientRequests from "@/config/http/HttpClientRequests";
import User from "@/entities/User";
import { NAME_TOKEN } from "@/utils/constantes";

export default class UserGatewayHttp {
  async login(email: string, password: string): Promise<Response> {
    return await HttpClientRequests.post('/login', {
      email,
      password,
    })
    .then(response => {
      localStorage.setItem(NAME_TOKEN, response.data.access_token)
      return Promise.resolve(response)
    });
  }

  async getMe(): Promise<User>{
    const response = await HttpClientRequests.withAuthorization().get('/me')
    const {id, name, email} = response.data.usuario
    return new User(id, name, email)
  }
}
