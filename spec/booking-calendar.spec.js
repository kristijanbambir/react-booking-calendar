import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import BookingCalendar from '../src/BookingCalendar';

describe('BookingCalendar', () => {
  let component;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(
      <BookingCalendar />
    );
  });

  it('should render', () => {
    expect(component.getDOMNode().className).toEqual('booking-calendar');
  });
});
