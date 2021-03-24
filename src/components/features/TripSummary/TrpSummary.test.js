import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct address', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} image='image.jpg' name='name' intro='intro' cost='cost' days={0} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
});

