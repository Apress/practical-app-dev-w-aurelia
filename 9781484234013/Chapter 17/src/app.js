import 'jQuery';
import 'bootstrap';

export class App {

  message = 'Chapter 17 - Compose';
  customerView = './customer-view.html';
  customerEdit = './customer-edit.html';

  constructor() {
    this.currentView = this.customerView;
  }

  toggleView() {
    if (this.currentView === this.customerView) {
      this.currentView = this.customerEdit;
    } else {
      this.currentView = this.customerView;
    }
    console.log(this.currentView);
  }
}
