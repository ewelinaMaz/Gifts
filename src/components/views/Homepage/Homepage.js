import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import image from '../../images/candy.jpg';
import image2 from '../../images/candy-4.jpg';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';

const Component = ({className}) => (
  <Container className={clsx(className, styles.root)}>
    <Divider variant="middle" />

    <Grid
      container 
      direction="row"
      justify="space-evenly"
      alignItems="center">
      <Grid item xs={12} sm={7}>
        <img src={image} alt="gift"/>
      </Grid>
      <Grid item xs={12} sm={5}
        className={styles.TextBox}>
        <img className={styles.image} src={image2} alt="sweets"/>  
        <h2 className={styles.Maintext}>Unique gifts came from passion and love  <FavoriteBorderIcon className={styles.heart}/></h2>
        <h3 className={styles.Subtext}>Choose yours </h3>
      </Grid> 
    </Grid>
    
    <Divider variant="middle" />
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
