import React from 'react';
import { shallow } from 'enzyme';
import { HomeButtonsComponent } from './HomeButtons';

describe('Component HomeButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeButtonsComponent />);
    expect(component).toBeTruthy();
  });
});
