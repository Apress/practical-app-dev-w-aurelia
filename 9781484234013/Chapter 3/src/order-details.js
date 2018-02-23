export class OrderDetails {

  constructor() {

  }

  activate(params, routerConfig) {
    this.id = params.id;
    // load order details by provided id
  }
}