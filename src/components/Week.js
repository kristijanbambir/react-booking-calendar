import React from 'react';
import moment from 'moment';

function sortDatesAsc(date1, date2) {
  return date1 > date2 ? 1 : date1 < date2 ? -1 : 0;
}

function isBooked(date, bookings, isNight) {
  let isBooked = false;
  const sortedBookings = bookings.sort(sortDatesAsc);
  for (let i = 0; i < sortedBookings.length; i++) {
    const currentBooking = isNight ? moment(sortedBookings[i]).add(1, 'days') : sortedBookings[i];
    if (date.isSame(currentBooking, 'day')) {
      isBooked = true;
      break;
    }
  }
  return isBooked;
}

function isBookedDay(date, bookings) {
  return isBooked(date, bookings, false);
}

function isBookedNight(date, bookings) {
  return isBooked(date, bookings, true);
}

const Week = (props) => {
  const days = [];
  const month = props.month;
  let date = props.date;

  for (let i = 0; i < 7; i++) {
    const day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isBookedDay: isBookedDay(date, props.bookings),
      isBookedNight: isBookedNight(date, props.bookings),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), 'day'),
      date: date
    };
    days.push(
      <span
        key={day.date.toString()}
        className={`day${day.isToday ? ' today' : ''}${day.isCurrentMonth ? '' : ' different-month'}${day.date.isSame(props.selected) ? ' selected' : ''}${day.isBookedDay ? ' booked-day' : ''}${day.isBookedNight ? ' booked-night' : ''}`}
        onClick={props.select.bind(null, day)}>
        {day.number}
      </span>);
    date = date.clone();
    date.add(1, 'd');
  }

  return (
    <div className='week' key={days[0].toString()}>
      {days}
    </div>
  )
};

export default Week;
