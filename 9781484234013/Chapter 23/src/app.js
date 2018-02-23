import {I18N} from 'aurelia-i18n';

export class App {
  static inject = [I18N];

  constructor(i18n) {
    this.i18n = i18n;
    this.i18n
      // .setLocale('es')
      .setLocale('en-US')
      .then(() => {
        console.log('Locale is ready!');
      });    
  }
}