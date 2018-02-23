import {InlineViewStrategy} from 'aurelia-templating';

export class Page1 {

  getViewStrategy() {
    let template = `
    <template>
      <section>
        <h2>Dynamic View!</h2>
      </section>
    </template>
    `;
    let vs = new InlineViewStrategy(template, this);
    return vs;
  }
}