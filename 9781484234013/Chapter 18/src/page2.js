import {InlineViewStrategy} from 'aurelia-templating';
import {HttpClient} from 'aurelia-fetch-client';

export class Page2 {
  static inject = [HttpClient];
  
  users = [];
  view = '';

  constructor(http) {
    this.http = http;
    this.baseUrl = `https://randomuser.me/`;
    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.baseUrl);
    });
  }

  activate() {
    return this.getUsers().then(data => {
      this.users = data.results;
      this.view = `
<template>
  <div class="users"> 
    <div class="user" repeat.for="user of users"> 
      <img src.bind="user.picture.medium"> 
      <span class="">\${user.name.first} \${user.name.last}
      </span> 
    </div>
  </div>
</template>`;
    });    
  }

  getViewStrategy() {
    let vs = new InlineViewStrategy(this.view, this);
    return vs;
  }

  getUsers(numberUsers = 6) {
    let path = `api?nat=us&results=${numberUsers}`;
    return this.http.fetch(path)
      .then(response => response.json());
  }
}