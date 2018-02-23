import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('NameTag', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('name-tag')
      .inView('<name-tag name="Matt"></name-tag>')
      .boundTo({ firstName: 'Matt' });
  });

  it('should render name', done => {
    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('.name-tag-body');
      expect(nameElement.innerHTML).toBe('Matt');
      done();
    }).catch(e => { console.log(e.toString()) });
  });

  afterEach(() => {
    component.dispose();
  });
});