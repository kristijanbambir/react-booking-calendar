# React Booking Calendar

A responsive customizable React booking calendar.

## Demo

TODO

## Installation (Not yet on npm)

```bash
npm install --save react-booking-calendar
```

## Usage

```jsx
import React from 'react';
import BookingCalendar from 'react-booking-calendar';

const bookings = [
  new Date(2016, 7, 1),
  new Date(2016, 7, 2),
  new Date(2016, 7, 3),
  new Date(2016, 7, 9),
  new Date(2016, 7, 10),
  new Date(2016, 7, 11),
  new Date(2016, 7, 12),
];

const MyBookingCalendar = () => (
  <BookingCalendar bookings={bookings} />
);
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
