import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import DayNames from './DayNames';
import Week from './Week';
import './BookingCalendar.scss';

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
    if (this.props.clickable) {
      this.setState({ selected: day.date });
    }
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
          bookings={this.props.bookings}
          clickable={this.props.clickable}
          date={date.clone()}
          key={date.toString()}
          month={this.state.month}
          selected={this.state.selected}
          selectHandler={this.handleSelect}
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
            <button className='icon-previous' onClick={this.previous}>{'<'}</button>
            {this.renderMonthLabel()}
            <button className='icon-next' onClick={this.next}>{'>'}</button>
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
  clickable: PropTypes.bool,
  selected: PropTypes.object,
};

BookingCalendar.defaultProps = {
  bookings: [],
  clickable: false,
  selected: moment().startOf('day'),
};
