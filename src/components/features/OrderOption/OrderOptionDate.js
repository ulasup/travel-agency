import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({setOptionValue, currentValue}) => {
  return (
    <div className={styles.component} >
      <DatePicker placeholderText="select date..." selected={currentValue} onChange={(date) => setOptionValue(date)} />
    </div>
  );
};

OrderOptionDate.propTypes ={
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
