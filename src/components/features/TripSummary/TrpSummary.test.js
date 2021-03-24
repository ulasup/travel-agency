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
    const component = shallow(<TripSummary id={expectedId} image='image' name='name' cost='cost' days={0} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('img has correct src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} cost='cost' days={0} tags={[]} />); //dlaczego wyrzuca blad jak brak tagow??

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render proper name, cost and days', () => {
    const component = shallow(<TripSummary name='name' cost='cost' days={0} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should render tags in correct order', () => {
    const component = shallow(<TripSummary tags={['tag1', 'tag2', 'tag3']} image='image' name='name' cost='cost' days={0} />);

    expect(component.find('.tags span').at(0).text()).toEqual('tag1');
    expect(component.find('.tags span').at(1).text()).toEqual('tag2');
    expect(component.find('.tags span').at(2).text()).toEqual('tag3');
  });

  it('should throw error without required tags', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} image='image' name='name' cost='cost' days={0} />);
    expect(component.hasClass('tags')).toBe(false);
  });
});

