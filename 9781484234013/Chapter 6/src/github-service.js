import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class GithubService {

  users = [];

  constructor(http) {
    this.http = http;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  getUsers() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });    
  }

}
