import {TemplatingEngine} from 'aurelia-framework';

export class Page3 {
  static inject = [TemplatingEngine];

  currentRecord = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    isActive: true
  };
  viewTemplate = `
  <form id="dynamicForm" submit.delegate="submit()">
    <div class="form-group">
      <label class="control-label" for="first">First Name</label>
      <input type="text" class="form-control" id="first" placeholder="First Name"
            value.bind="currentRecord.firstName">
    </div>
    <div class="form-group">
      <label class="control-label" for="last">Last Name</label>
      <input type="text" class="form-control" id="last" placeholder="Last Name"
            value.bind="currentRecord.lastName">
    </div>
    <div class="form-group">
      <label class="control-label" for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Email"
            value.bind="currentRecord.email">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>  
  `.trim();

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  update() {
    const selector = '#dynamicForm';
    const el = document.querySelector(selector);
    if (el) {
      this.templatingEngine.enhance({element: el, bindingContext: this });
    }        
  }
  
  submit() {
    console.log('submitting...', this.currentRecord);
  }
}


