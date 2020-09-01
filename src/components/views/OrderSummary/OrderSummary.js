import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../../features/CartItem/CartItem';
import { Popup } from '../../features/Popup/Popup';
import { connect } from 'react-redux';
import { getCart, getTotalPrice } from '../../../redux/cartRedux.js';
import { NavLink } from 'react-router-dom';
import styles from './OrderSummary.module.scss';
import { countProductsInCart } from '../../../utils/countProductsInCart.js';
import { OrderForm } from '../../features/OrderForm/OrderForm';
import { unmountAfterDelay } from '../../../HOC/unmountAfterDelay/unmountAfterDelay';

const Component = ({ cart, total }) => {
  const DelayedPopup = unmountAfterDelay(Popup);
  return (
    <div className={styles.wrapper}>
      {!cart.gifts.length ? (
        <DelayedPopup variant="danger">Add product to the basket</DelayedPopup>
      ) : null}
      <h2 className={styles.header}>My products</h2>
      <div className={styles.items}>
        {cart.gifts.length ? (
          cart.gifts.map((gift) => 
            <CartItem key={gift._id} id={gift._id} />)
        ) : (
          <small className={styles.noProducts}>
            <i>Shop basket is empty</i>
          </small>
        )}
      </div>
      <NavLink className={styles.link} exact to="/">
        Add more products
      </NavLink>
      <h2>Order Summary</h2>
      <div className={styles.summary}>
        <span>Product count: </span>
        <span>{countProductsInCart(cart.gifts)}</span>
      </div>
      <div className={styles.summary}>
        <span>Payment amount: </span>
        <span>{total}$</span>
      </div>
      <h2>Contact Form</h2>
      <OrderForm />
    </div>
  );
};
Component.propTypes = {
  cart: PropTypes.object,
  total: PropTypes.number,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
  total: getTotalPrice(state),
});

const Container = connect(mapStateToProps, null)(Component);

export { Container as OrderSummary, Component as OrderSummaryComponent };
