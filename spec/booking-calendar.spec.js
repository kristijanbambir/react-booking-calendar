import React from 'react/addons';
import BookingCalendar from '../lib/booking-calendar';

describe('BookingCalendar', () => {
  let component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <BookingCalendar/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('booking-calendar');
  });
});
