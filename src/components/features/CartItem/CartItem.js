import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { NumberInput } from '../../common/NumberInput/NumberInput';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './CartItem.module.scss';
import { connect } from 'react-redux';
import { getProductFromCart, changeProductAmount, removeFromCart, addOrderNotes } from '../../../redux/cartRedux.js';
import EditIcon from '@material-ui/icons/Edit';

const Component = ({ gift, changeAmount, removeProduct, addNotes }) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.root}>
      <div className={styles.productItem}>
        <div className={styles.image}>
          <img
            src={gift.image}
            alt={gift.name}
          />
        </div>
        <div className={styles.productData}>
          <div className={styles.productInfo}>
            <span>{gift.option}</span>
            <span>{gift.value}</span>
            <small>{gift.price}&nbsp;$</small>
          </div>
          <div>
            <small>Quantity:&nbsp;</small>
            <NumberInput
              value={gift.amount}
              onChange={e => changeAmount({ id: gift._id, amount: parseInt(e.target.value) })}
            />
            <Button
              onClick={handleExpandClick}
              aria-label="add-notes"
              className={styles.icon}
            >
              <EditIcon style={{color: '#584332'}}/>
            </Button>
            <Button
              onClick={() => removeProduct(gift)}
              aria-label="delete"
              className={styles.icon}
            >
              <DeleteIcon style={{color: '#584332'}} />
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.notes} ${expanded ? styles.expanded : ''}`}>
        <textarea
          value={gift.notes}
          onChange={e => addNotes({ id: gift._id, notes: e.target.value })}
          placeholder="Notification for order"
        >
        </textarea>
      </div>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  gift: PropTypes.object,
  changeAmount: PropTypes.func,
  removeProduct: PropTypes.func,
  addNotes: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  gift: getProductFromCart(state, props.id),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeProductAmount(id, amount)),
  removeProduct: data => dispatch(removeFromCart(data)),
  addNotes: (id, notes) => dispatch(addOrderNotes(id, notes)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CartItem,
  Component as CartItemComponent,
};
