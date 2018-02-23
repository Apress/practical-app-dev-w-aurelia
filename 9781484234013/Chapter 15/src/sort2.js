export class Sort2 {     

  columnName = '';
  direction = '';
  rows = [
    { company: 'Berglunds snabbkop', country: 'Sweden' },
    { company: 'North/South', country: 'UK' },
    { company: 'Alfreds Futterkiste', country: 'Germany' },
    { company: 'Koniglich Essen', country: 'Germany' },
    { company: 'Magazzini Alimentari Riuniti', country: 'Italy' },
    { company: 'Paris specialites', country: 'France' },
    { company: 'Island Trading', country: 'UK' },
    { company: 'Laughing Bacchus Winecellars', country: 'Canada' }
  ];  

  sortBy(propertyName, direction) {
    if (this.columnName === propertyName) {
      if (this.direction === 'ascending') {
        this.direction = 'descending';
      } else {
        this.direction = 'ascending';
      }
    } else {
      this.direction = 'ascending';
      this.columnName = propertyName;      
    }
  }

}