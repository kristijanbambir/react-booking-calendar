require('normalize.css/normalize.css');

import React from 'react';
import BookingCalendar from './BookingCalendar';

export default class AppComponent extends React.Component {

  bookings() {
    return [
      new Date(2016, 7, 9),
      new Date(2016, 7, 10),
      new Date(2016, 7, 11),
      new Date(2016, 7, 14),
      new Date(2016, 7, 15),
      new Date(2016, 7, 16),
      new Date(2016, 7, 17),
      new Date(2016, 7, 18),
      new Date(2016, 7, 19),
      new Date(2016, 7, 20),
      new Date(2016, 7, 21),
      new Date(2016, 7, 22)
    ];
  }

  render() {
    return (
      <div className="index">
        <BookingCalendar bookings={this.bookings()} />
      </div>
    );
  }

}
