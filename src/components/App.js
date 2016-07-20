require('normalize.css/normalize.css');

import React from 'react';
import BookingCalendar from './BookingCalendar';

export default class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <BookingCalendar />
      </div>
    );
  }

}
