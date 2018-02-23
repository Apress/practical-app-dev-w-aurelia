import {customAttribute, bindable} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

/**
 *  Name: input-mask
 *  Desc: This is an input mask custom attribute.
 *  Usage: <input class="form-control" 
 *  value.bind="currentItem.phone" 
 *  input-mask="pattern: (###) ###-####;" 
 *  placeholder="(555) 555-1234">  
*/
@customAttribute('input-mask')
export class InputMask {
  static inject = [DOM.Element];

  @bindable pattern = ''; // '####-##-##' or '(###) ###-####' or '##:##'

  constructor(element) {
    this.element = element;
    if (element instanceof HTMLInputElement) {
      this.element = element;
    } else {
      throw new Error('The input-mask attribute can only be applied on Input elements.');
    }
  }

  attached() {
    this.element.addEventListener("keydown", this.keyDownHandler.bind(this));
  }
  detached() {
    this.element.removeEventListener("keydown", this.keyDownHandler.bind(this));    
  }

  keyDownHandler(e) {
    let value = e.target.value;
    let isInt = Number.isInteger(Number.parseInt(e.key));
    let key = e.key.toLowerCase();
    let valueLen = value.length;
    let patternLen = this.pattern.length;
    let char = this.pattern[valueLen];
    let options = {
      e,
      value,
      isInt,
      key,
      valueLen,
      patternLen,
      char
    };
    let result = true;
    if (this.isValidNonInputKey(key)) {
      // valid key input...    
    } else if (valueLen === patternLen) {
      e.preventDefault();
      result = false;
    } else if (char === '#' && isInt) {
      // valid key input...    
    } else if (this.processKey(options)) {
      // valid key input...    
    } else {
      // bad input...
      e.preventDefault();
      result = false;    
    }
    return result;
  }

  processKey(options) {
    let {key, char, isInt, valueLen, e} = options;
    if (key === char) {
      return true;
    } else if (char !== '#' && isInt) {
      let nextChar = this.pattern[valueLen + 1];
      if (nextChar === ' ') {
        e.target.value = e.target.value + char + ' ';
      } else {
        e.target.value = e.target.value + char;
      }
      return true;
    }
    return false;
  }

  isValidNonInputKey(key) {
    let keys = [
      "backspace",
      "arrowleft",
      "arrowright",
      "arrowup",
      "arrowdown",
      "home",
      "end",
      "tab"
    ];
    return keys.includes(key);
  }
  
}
