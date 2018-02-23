export class SortValueConverter {
  toView(array, propertyName, direction) {
    let factor = direction === 'ascending' ? 1 : -1;
    let newArr = array.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return -1 * factor;
      } else if (a[propertyName] > b[propertyName]) {
        return 1 * factor;
      }
      return 0;
    });
    return newArr;
  }
}