import React from 'react';
import { shallow } from 'enzyme';
import { BestComponent } from './Best';

describe('Component Best', () => {
  it('should render without crashing', () => {
    const component = shallow(<BestComponent />);
    expect(component).toBeTruthy();
  });
});
