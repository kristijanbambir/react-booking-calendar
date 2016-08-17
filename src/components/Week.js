import React from 'react';

function sortDatesAsc(date1, date2) {
  return date1 > date2 ? 1 : date1 < date2 ? -1 : 0;
}

function isBookedDay(date, bookings) {
  let isBooked = false;
  const sortedBookings = bookings.sort(sortDatesAsc);
  for (let i = 0; i < sortedBookings.length; i++) {
    if (date.isSame(sortedBookings[i], 'day') && sortedBookings[i + 1]) {
      isBooked = true;
      break;
    }
  }
  return isBooked;
}

function isBookedNight(date, bookings) {
  let isBooked = false;
  const sortedBookings = bookings.sort(sortDatesAsc);
  for (let i = 0; i < sortedBookings.length; i++) {
    if (date.isSame(sortedBookings[i], 'day') && sortedBookings[i - 1]) {
      isBooked = true;
      break;
    }
  }
  return isBooked;
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
