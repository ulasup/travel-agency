import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, setOptionValue, price, ...limits }) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.limits.min}
      max={limits.limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)} />
    {` + ${formatPrice(price)}`}
  </div>
);

OrderOptionNumber.propTypes ={
  value: PropTypes.number,
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
