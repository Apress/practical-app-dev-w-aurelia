import {customElement, bindable} from 'aurelia-framework';
// import {MultiSelectorItem} from './multi-selector-item';

@customElement('multi-selector')
export class MultiSelector {
  static inject = [Element];

  // @bindable valueMember;
  @bindable instanceOptions = [];
  @bindable selectedOptions = [];
  options = [];
  @bindable placeholder = '';

  constructor(element) {
    this.element = element;
  }
  /**
   *  The following is necessary to ensure that we have a unique copy for every instance
   *  of our control.
   */
  instanceOptionsChanged(newValue, oldValue) {
    if (this.instanceOptions) {
      this.options = [];
      this.options = [...this.instanceOptions];
      // let opts = JSON.parse(JSON.stringify(this.instanceOptions));
      // console.log('opts', opts);
      // opts.forEach(o => {
      //   this.options.push(o);
      // });      
    }
  }
  /**
   *  This function performs the selection of an item.
   */
  select(item) {
    this.selectedOptions.push(item);
    this.removeFromOptions(item);      
    // this.hide();
  }
  /**
   *  This function removes a single item from the selectedOptions array.
   */
  removeOne(item) {
    // console.log('multi-selector:removeOne', item, this.selectedOptions);
    let index = this.selectedOptions.indexOf(item);
    this.selectedOptions.splice(index,1);
    this.addToOptions(item);
  }
  /**
   *  This function removes all items from the selectedOptions array.
   */
  removeAll(e) {
    e.stopPropagation();
    for (let i = this.selectedOptions.length - 1; i >= 0; i--) {
      let item = this.selectedOptions[i];
      this.selectedOptions.splice(i,1);
      this.addToOptions(item);
    }
  }
  /**
   *  This function adds an item to the options array.
   */
  addToOptions(item) {
    let index = this.options.indexOf(item);
    if (index === -1) {
      this.options.push(item);
    }
  }  
  /**
   *  This function removes an item from the options array.
   */  
  removeFromOptions(item) {
    // console.log('multi-selector:removeFromOptions', item, this.options);
    let index = this.options.indexOf(item);
    if (index > -1) {
      this.options.splice(index,1);
    }
  }
  /**
   *  This function handles the keydown event. It checks for the 'enter'
   *  key and process the value; otherwise, it simply returns true.
   */
  processKeydown(e) {
    e.stopPropagation();
    if (e.key.toLowerCase() == 'enter' &&
      this.dynamicOption.value.length > 0) {
      this.select(this.dynamicOption.value);
      // this.selectedOptions.push(this.dynamicOption.value);
      this.dynamicOption.value = '';
    }
    return true;
  }

}
