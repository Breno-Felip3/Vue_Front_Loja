import HttpClientRequests from "../HttpClientRequests";

export default class UserGatewayHttp {
  async login(email: string, password: string): Promise<any> {
    await HttpClientRequests.post('/login', {
      email,
      password,
    });
  }
}
