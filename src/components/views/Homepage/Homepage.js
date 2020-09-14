import React from 'react';
import PropTypes from 'prop-types';
import { HomeButtons } from '../../features/HomeButtons/HomeButtons';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import image from '../../images/candy.jpg';
import image2 from '../../images/candy-4.jpg';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';

class Component extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Container className={clsx(className, styles.root)}>
        <Divider variant="middle" className={styles.divider} />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <img className={styles.leftImage} src={image} alt="gift" />
          </Grid>
          <Grid item xs={12} sm={6} className={styles.TextBox}>
            <img className={styles.image} src={image2} alt="sweets" />
            <h2 className={styles.Maintext}>
              Unique gifts came from passion and love
              <FavoriteBorderIcon className={styles.heart} />
            </h2>
            <h3 className={styles.Subtext}>Choose yours </h3>
          </Grid>
        </Grid>

        <Divider variant="middle" className={styles.divider} />
        <HomeButtons />
        <Divider variant="middle" className={styles.divider} />
      </Container>
    );
  }
}
Component.propTypes = {
  className: PropTypes.string,
  loadProduct: PropTypes.func,
};

//const ContainerComponent = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(Component);

export {
  Component as Homepage,
  //ContainerComponent as Homepage,
  Component as HomepageComponent,
};
