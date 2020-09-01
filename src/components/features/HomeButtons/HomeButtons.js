import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './HomeButtons.module.scss';
import { Grid } from '@material-ui/core';
//import { connect } from 'react-redux';
//import { getCategories } from '../../../redux/categoriesRedux';

const Component = ({className, gifts}) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container 
      direction="row"
      justify="space-between"
      alignItems="center">
      <NavLink exact to={`/products/${gifts[0].category}`} className={styles.firstLink}>
        <Grid item sm={12} className={styles.Box}>
          <img src={gifts[0].categoryImg} alt={gifts[0].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{gifts[0].categoryName}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${gifts[3].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={gifts[3].categoryImg} alt={gifts[3].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{gifts[3].categoryName}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/products/${gifts[7].category}`} className={styles.link}>
        <Grid item sm={12} className={styles.Box}>
          <img src={gifts[7].categoryImg} alt={gifts[7].category} className={styles.imageButton}/>
          <p className={styles.textButton}>{gifts[7].categoryName}</p>
        </Grid>
      </NavLink>
    </Grid>
  </div>
);
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gifts: PropTypes.array,
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
