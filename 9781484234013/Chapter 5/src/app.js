import {inject, NewInstance} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'jQuery';
import 'bootstrap';
import {Globals} from './globals';

@inject(Globals, NewInstance.of(HttpClient))
export class App {

  message = '';

  constructor(globals, http) {
    this.globals = globals;
    this.http = http;
    // Configure the HttpClient instance...
    this.configureHttpClient();
    this.message = this.globals.message;
  }
  configureHttpClient() {
    //...
  }
}