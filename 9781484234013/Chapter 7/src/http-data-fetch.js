import {HttpClient} from 'aurelia-fetch-client';

export class HttpDataFetch {

  constructor() {
    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl('https://randomuser.me/');
        x.withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          requestError(error) {
            console.log(`Request Error`, error);
            throw error;
          },
          response(response) {
            console.log(`  Received ${response.status} ${response.url}`);
            return response;
          },
          responseError(error) {
            console.log(`  Response Error`, error);
            throw error;
          }
        });
      });    
  }

  activate() {
    this.getUsers();
  }

  getUsers(numberUsers = 6) {
    let path = `api?nat=us&results=${numberUsers}`;
    return this.http.fetch(path)
      .then(response => response.json())
      .then(data => this.users = data.results);
  }  
}
