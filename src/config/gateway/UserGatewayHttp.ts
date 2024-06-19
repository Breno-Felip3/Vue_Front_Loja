import User from "@/entities/User";
import HttpClientRequests from "@/config/http/HttpClientRequests";

export default class UserGatewayHttp {
  async login(email: string, password: string): Promise<User> {
    return await HttpClientRequests.post('/login', {
      email,
      password,
    });
  }
}
