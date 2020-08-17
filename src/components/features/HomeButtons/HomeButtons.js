import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './HomeButtons.module.scss';
import { Grid } from '@material-ui/core';
//import { connect } from 'react-redux';
//import { getCategories } from '../../../redux/categoriesRedux';

const Component = ({className, categories}) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container 
      direction="row"
      justify="space-between"
      alignItems="center">
      <NavLink exact to={`/products/${categories[1].id}`} className={styles.firstLink}>
        <Grid item xs={12} sm={12} className={styles.Box}>
          <img src={categories[1].image} alt={categories[1].id} className={styles.imageButton}/>
          <p className={styles.textButton}>{categories[1].name}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${categories[2].id}`} className={styles.link}>
        <Grid item xs={12} sm={12} className={styles.Box}>
          <img src={categories[2].image} alt={categories[2].id} className={styles.imageButton}/>
          <p className={styles.textButton}>{categories[2].name}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${categories[0].id}`} className={styles.link}>
        <Grid item xs={12} sm={12} className={styles.Box}>
          <img src={categories[0].image} alt={categories[0].id} className={styles.imageButton}/>
          <p className={styles.textButton}>{categories[0].name}</p>
        </Grid>
      </NavLink>
    </Grid>
  </div>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  categories: PropTypes.array,
};

//const mapStateToProps = state => ({
//  categories: getCategories(state),
//});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

//const Container = connect(mapStateToProps)(Component);

export {
  Component as HomeButtons,
  //Container as HomeButtons,
  Component as HomeButtonsComponent,
};
