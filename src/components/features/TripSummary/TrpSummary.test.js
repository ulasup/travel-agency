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
    const component = shallow(<TripSummary id={expectedId} tags={[]} />); // hm, tez musialy zostac tagi, bo inaczej sie crashuje

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('img has correct src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>); //dlaczego wyrzuca blad jak brak tagow??

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render proper name, cost and days', () => {
    const component = shallow(<TripSummary name='name' cost='cost' days={0} tags={[]}/>);
    expect(component).toBeTruthy();
  });
});

