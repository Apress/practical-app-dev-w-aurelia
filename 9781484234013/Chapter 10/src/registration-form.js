import {inject} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {BootstrapFormRenderer} from './bootstrap-form-renderer';

@inject(ValidationControllerFactory)
export class RegistrationForm {
  firstName = '';
  lastName = '';
  email = '';
  controller = null;
  
  constructor(controllerFactory) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
  }
  
  submit() {
    this.controller.validate();
  }
}

ValidationRules
  .ensure(a => a.firstName).required()
  .ensure(a => a.lastName).required()
  .ensure(a => a.email).required().email()
  .on(RegistrationForm);
