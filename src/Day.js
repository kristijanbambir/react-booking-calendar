import React, { PropTypes } from 'react';

const Day = (props) => (
  <div className='day-box'>
    <div className={`day ${props.className}`} onClick={props.clickHandler}>
      <div className='day-content'>
        {props.children}
      </div>
    </div>
  </div>
);

Day.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

Day.defaultProps = {
  className: '',
};

export default Day;
