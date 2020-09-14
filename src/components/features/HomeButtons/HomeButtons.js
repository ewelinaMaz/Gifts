import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './HomeButtons.module.scss';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/giftsRedux';
import { NotFound } from '../../views/NotFound/NotFound';

class Component extends React.Component {
  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }
  render() {
    const { className, gifts } = this.props;
    return (
      gifts.length ? (
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
        </div>) : (<NotFound/>)
    );
  }
}
Component.propTypes = {
  className: PropTypes.string,
  gifts: PropTypes.array,
  loadProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  gifts: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  //Component as HomeButtons,
  ContainerComponent as HomeButtons,
  Component as HomeButtonsComponent,
};
