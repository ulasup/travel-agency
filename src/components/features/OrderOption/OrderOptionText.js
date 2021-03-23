import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({id, setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <input
      type='text'
      key={id}
      placeholder={'fill in data...'}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
    />
  </div>
);

OrderOptionText.propTypes ={
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionText;
