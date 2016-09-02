import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import DayNames from './DayNames';
import Week from './Week';
import './BookingCalendar.scss';
// require('normalize.css/normalize.css');
// require('font-awesome/css/font-awesome.css');

export default class BookingCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      month: props.selected.clone(),
      selected: props.selected,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(day) {
    this.setState({ selected: day.date });
  }

  renderMonthLabel() {
    return (
      <span className='month-label'>
        {this.state.month.format('MMMM, YYYY')}
      </span>
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
          selectHandler={this.handleSelect}
          selected={this.state.selected}
          bookings={this.props.bookings}
        />
      );
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  render() {
    return (
      <div className='booking-calendar'>
        <div className='header'>
          <div className='header-content'>
            <span className='icon-previous' onClick={this.previous}>{'<'}</span>
            {this.renderMonthLabel()}
            <span className='icon-next' onClick={this.next}>{'>'}</span>
          </div>
        </div>
        <DayNames />
        {this.renderWeeks()}
      </div>
    );
  }

}

BookingCalendar.propTypes = {
  bookings: PropTypes.array,
  selected: PropTypes.object,
};

BookingCalendar.defaultProps = {
  bookings: [],
  selected: moment().startOf('day'),
};
