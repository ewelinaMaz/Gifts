import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, getTotalPrice } from '../../../redux/cartRedux.js';
import { NavLink } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import { countProductsInCart } from '../../../utils/countProductsInCart.js';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Component = ({ cart, total }) => {
  const [opened, setOpened] = useState(false);
  const handleClick = e => {
    setOpened(!opened);
  };

  return (
    <div>
      <div className={styles.cartlink}>
        <span>
          {total}$
        </span>
        <Button
          className={styles.shop}
          color="inherit"
          startIcon={<AddShoppingCartIcon />}
          onClick={(e) => handleClick(e)}
        >
        </Button>
      </div>
      {opened ? (
        <div className={`${styles.root} ${opened ? styles.expanded : ''}`}>
          <div onClick={(e) => handleClick(e)} className={`${styles.background}`}></div>
          <div className={`${styles.cart}`}>
            <div className={styles.items}>
              {cart.gifts.length ? (cart.gifts.map(gift => (
                <CartItem id={gift._id} key={gift._id} />
              ))) :
                (
                  <small className={styles.noProducts}>
                    <i>Basket is empty</i>
                  </small>
                )
              }
            </div>
            <div className={styles.summary}>
              <p>
                Order summary
              </p>
              <div>
                <span>amount of products:</span>
                <span>{countProductsInCart(cart.gifts)}</span>
              </div>
              <div>
                <span>Order value: </span>
                <span>{total} $</span>
              </div>
              <NavLink className={styles.linkContinue} exact to="/order">
                <Button 
                  className={styles.button}
                  variant="contained"
                  disabled={cart.gifts.length ? false : true} onClick={(e) => handleClick(e)}>
                  Continue the order
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.object,
  total: PropTypes.number,
  expanded: PropTypes.bool,
  gift: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
