# React Booking Calendar

A responsive customizable React booking calendar.

[DEMO](https://kristijanbambir.github.io/react-booking-calendar/)

## Installation

```bash
npm install --save react-booking-calendar
```

## Usage

```js
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

Result:

<img src="https://github.com/kristijanbambir/react-booking-calendar/blob/master/preview.png?raw=true" width="292">

## Options

| Prop             | Type        | Default | Description                                            |
| :--------------- | :---------- | :------ | :----------------------------------------------------- |
| `bookings`       | array       | `[]`    | Dates that will be rendered on the calendar as booked. |
| `clickable`      | bool        | `false` | Make days clickable.                                   |
| `disableHistory` | bool        | `false` | Disable navigating before current month.               |
| `selected`       | Date        | today   | Default selected day if `clickable` is set.            |

## Styling

CSS class taxonomy:

```sass
.booking-calendar {
  .header {
    .header-content {
      .icon-previous {}
      .icon-next {}
      .month-label {}
    }
  }

  .week {
    &.names {
      .day-box .day {}
    }

    .day-box .day {
      &.different-month {}
      &.selected {}
      &.today {}
      &.booked-day:before {}
      &.booked-night:after {}
    }
  }
}
```

## Development

* Development server: `npm start`
* Continuously run tests on file changes: `npm run watch-test`
* Run tests: `npm test`
* Build: `npm run build`

## Todos

- [ ] Add tests

## Changelog

### 1.0.3

* Removed Bower dependencies

### 1.0.2

* Changed `bookings` prop type definition
* Fixed header vertical positioning

### 1.0.1

* Removed console log statements

### 1.0.0

* Initial version
