export class Page3 {

  constructor() {
  }
  tabSelectionChanged(detail) {
    if (this.currentTab === detail) return;
    console.log('tabSelectionChanged', detail);
  }

}