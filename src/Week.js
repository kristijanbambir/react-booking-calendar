import React, { PropTypes } from 'react';
import moment from 'moment';
import Day from './Day';

export default class Week extends React.Component {

  sortDatesAsc(date1, date2) {
    if (date1 > date2) {
      return 1;
    }
    return date1 < date2 ? -1 : 0;
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
        date,
      };

      let className = '';
      if (day.isToday) {
        className += ' today';
      }
      if (!day.isCurrentMonth) {
        className += ' different-month';
      }
      if (day.date.isSame(this.props.selected)) {
        className += ' selected';
      }
      if (day.isBookedDay) {
        className += ' booked-day';
      }
      if (day.isBookedNight) {
        className += ' booked-night';
      }
      if (!this.props.clickable) {
        className += ' not-clickable';
      }

      days.push(
        <Day
          key={day.date.toString()}
          className={className}
          clickHandler={() => this.props.selectHandler(day)}
        >
          {day.number}
        </Day>
      );

      date = date.clone();
      date.add(1, 'd');
    }

    return (
      <div className='week' key={days[0].toString()}>
        {days}
      </div>
    );
  }

}

Week.propTypes = {
  bookings: PropTypes.array,
  clickable: PropTypes.bool.isRequired,
  date: PropTypes.object,
  month: PropTypes.object,
  selected: PropTypes.object,
  selectHandler: PropTypes.func,
};
