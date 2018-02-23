import {customElement, bindable} from 'aurelia-framework';

@customElement('listview-item')
export class ListviewItem {
  @bindable name = '';
  @bindable header = '';
  @bindable selectedView;
  @bindable class = 'flex-column-1';
  @bindable iconClass = '';
}