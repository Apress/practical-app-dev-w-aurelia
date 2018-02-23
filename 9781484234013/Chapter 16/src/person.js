import {BindingSignaler} from 'aurelia-templating-resources';

export class Person {
  static inject = [BindingSignaler];

  modifiedDateTime = Date.now();

  constructor(signaler) {
    this.signaler = signaler;

    setInterval(() => {
      this.signaler.signal('time-signal');
    }, 3000);
  }
}
