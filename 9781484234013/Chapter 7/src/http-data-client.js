import {HttpClient} from 'aurelia-http-client';

export class HttpDataClient {

  constructor() {
    this.http = new HttpClient();
  }

  activate() {
    this.getUsers();
  }

  getUsers(numberUsers = 6) {
    let path = `api?nat=us&results=${numberUsers}`;
    return this.http.createRequest(path)
      .asGet()
      .withBaseUrl('https://randomuser.me/')
      .send()
      .then(response => response.content)
      .then(data => this.users = data.results);
  }

  // Uncomment for intercepter
  // constructor() {
  //   this.http = new HttpClient()
  //     .configure(x => {
  //       x.withBaseUrl('https://randomuser.me/');
  //       x.withInterceptor({
  //         request(message) {
  //           console.log(`Requesting ${message.method} ${message.url}`);
  //           return message;
  //         },
  //         requestError(error) {
  //           console.error(`Request error`, error);
  //           throw error;
  //         },
  //         response(message) {
  //           console.log(`  Received ${message.statusCode} ${message.content.results.length}`);
  //           return message;
  //         },
  //         responseError(error) {
  //           console.error(`Response error`, error);
  //           throw error;
  //         }
  //       });
  //     });    
  // }

  // activate() {
  //   this.getUsers();
  // }

  // getUsers(numberUsers = 6) {
  //   let path = `api?nat=us&results=${numberUsers}`;
  //   return this.http.get(path)
  //     .then(response => response.content)
  //     .then(data => this.users = data.results);
  // }  
}
