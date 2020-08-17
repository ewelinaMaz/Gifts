import React from 'react';
import { shallow } from 'enzyme';
import { SelectComponent } from './Select';

describe('Component Select', () => {
  it('should render without crashing', () => {
    const component = shallow(<SelectComponent />);
    expect(component).toBeTruthy();
  });
});
