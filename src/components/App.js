require('normalize.css/normalize.css');

import React from 'react';
import BookingCalendar from './BookingCalendar';

export default class AppComponent extends React.Component {

  bookedNights() {
    return [
      new Date(2016, 7, 16),
      new Date(2016, 7, 17),
      new Date(2016, 7, 18),
      new Date(2016, 7, 19)
    ];
  }

  render() {
    return (
      <div className="index">
        <BookingCalendar bookedNights={this.bookedNights()} />
      </div>
    );
  }

}
