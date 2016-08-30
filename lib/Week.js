import React from 'react';
import moment from 'moment';

export default class Week extends React.Component {

  sortDatesAsc(date1, date2) {
    return date1 > date2 ? 1 : date1 < date2 ? -1 : 0;
  }

  isBooked(date, isNight) {
    let isBooked = false;
    const sortedBookings = this.props.bookings.sort(this.sortDatesAsc);
    for (let i = 0; i < sortedBookings.length; i++) {
      const currentBooking = isNight ? moment(sortedBookings[i]).add(1, 'days') : sortedBookings[i];
      if (date.isSame(currentBooking, 'day')) {
        isBooked = true;
        break;
      }
    }
    return isBooked;
  }

  isBookedDay(date) {
    return this.isBooked(date, false);
  }

  isBookedNight(date) {
    return this.isBooked(date, true);
  }

  render() {
    const days = [];
    const month = this.props.month;
    let date = this.props.date;

    for (let i = 0; i < 7; i++) {
      const day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isBookedDay: this.isBookedDay(date),
        isBookedNight: this.isBookedNight(date),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date: date
      };
      days.push(
        <span
          key={day.date.toString()}
          className={`day${day.isToday ? ' today' : ''}${day.isCurrentMonth ? '' : ' different-month'}${day.date.isSame(this.props.selected) ? ' selected' : ''}${day.isBookedDay ? ' booked-day' : ''}${day.isBookedNight ? ' booked-night' : ''}`}
          onClick={this.props.select.bind(null, day)}>
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
  }

}
