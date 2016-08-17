require('normalize.css/normalize.css');
require('font-awesome/css/font-awesome.css');
require('styles/BookingCalendar.scss');

import React from 'react';
import moment from 'moment';

import DayNames from './DayNames';
import Week from './Week';

export default class BookingCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: props.selected.clone(),
      selected: props.selected
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.select = this.select.bind(this);
  }

  previous() {
    const month = this.state.month;
    month.add(-1, 'M');
    this.setState({ month });
  }

  next() {
    const month = this.state.month;
    month.add(1, 'M');
    this.setState({ month });
  }

  select(day) {
    this.setState({ selected: day.date });
  }

  render() {
    return (
      <div className='calendar'>
        <div className='header'>
          <i className='fa fa-angle-left' onClick={this.previous}></i>
          {this.renderMonthLabel()}
          <i className='fa fa-angle-right' onClick={this.next}></i>
        </div>
        <DayNames />
        {this.renderWeeks()}
      </div>
    );
  }

  renderWeeks() {
    const weeks = [];
    let done = false;
    const date = this.state.month.clone().startOf('month').add('w' - 1).startOf('isoWeek');
    let monthIndex = date.month();
    let count = 0;

    while (!done) {
      weeks.push(
        <Week
          key={date.toString()}
          date={date.clone()}
          month={this.state.month}
          select={this.select}
          selected={this.state.selected}
          bookings={this.props.bookings} />
      );
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    return (
      <span>{this.state.month.format('MMMM, YYYY')}</span>
    );
  }

}

// Counter.propTypes = { initialCount: React.PropTypes.number };
BookingCalendar.defaultProps = {
  bookings: [],
  selected: moment().startOf('day')
};
