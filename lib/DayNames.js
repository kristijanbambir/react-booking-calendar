import React from 'react';
import Day from './Day';

const DayNames = () => (
  <div className='week names'>
    <Day>{'Mon'}</Day>
    <Day>{'Tue'}</Day>
    <Day>{'Wed'}</Day>
    <Day>{'Thu'}</Day>
    <Day>{'Fri'}</Day>
    <Day>{'Sat'}</Day>
    <Day>{'Sun'}</Day>
  </div>
);

export default DayNames;
