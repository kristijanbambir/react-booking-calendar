import React from 'react';

function isBooked(date, bookedNights) {
  let isBooked = false;
  for (let i = 0; i < bookedNights.length; i++) {
    if (date.isSame(bookedNights[i], 'day')) {
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
      isBooked: isBooked(date, props.bookedNights),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), 'day'),
      date: date
    };
    days.push(
      <span
        key={day.date.toString()}
        className={`day${day.isToday ? ' today' : ''}${day.isCurrentMonth ? '' : ' different-month'}${day.date.isSame(props.selected) ? ' selected' : ''}${day.isBooked ? ' booked' : ''}`}
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
