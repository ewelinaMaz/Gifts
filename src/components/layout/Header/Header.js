import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Cart } from '../../features/Cart/Cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import manageCartStorageHOC from '../../../HOC/manageCartStorage.js/manageCartStorage';
import FavoriteIcon from '@material-ui/icons/Favorite';

const CartWithStorageMngmt = manageCartStorageHOC(Cart);

const Component = () => {
  return (
    <AppBar className={styles.AppBar}>
      <Toolbar className={styles.toolbar}>
        <Button
          edge="start"
          startIcon={<FavoriteIcon />}
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/best" className={styles.login}>
            Best projects
          </Link>
        </Button>
        <Link to="/" className={styles.login}>
          <Typography align="center" variant="h4" className={styles.brand}>
            Unique-
            <span className={styles.linka}>Gift</span>
          </Typography>
        </Link>
        <CartWithStorageMngmt />
      </Toolbar>
    </AppBar>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
