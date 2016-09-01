import React, { PropTypes } from 'react';

const Day = (props) => (
  <div className='day-box'>
    <div className={`day ${props.className}`} onClick={props.clickHandler}>
      {props.children}
    </div>
  </div>
);

Day.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Day;
