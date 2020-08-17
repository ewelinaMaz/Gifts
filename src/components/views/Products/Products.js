import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getGiftsByCategory } from '../../../redux/giftsRedux.js';
import { getHeaderById } from '../../../redux/categoriesRedux';
import styles from './Products.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const Component = ({ className, children, categoryGifts, category }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>{category[0].name}!</h2>
    <Divider variant="middle" className={styles.divider} />
    {categoryGifts.map((gift) => (
      <div key={gift.option}>
        <h3>{gift.name}</h3>
        <NavLink key={gift.option} exact to={`/gift/${gift.option}`}>
          <Card className={styles.Card}>
            <CardMedia
              className={styles.BoardImg}
              component="img"
              image={gift.image}
              option={gift.option}
            />
            <CardContent className={styles.Content}>
              <Typography component="h3">{gift.option}</Typography>
              <Typography component="p" className={styles.description}>
                {gift.description}
              </Typography>
              <Button className={styles.button} variant="outlined" color="primary">See more</Button>
              <Typography component="p">Price from: {gift.price}$</Typography>
            </CardContent>
          </Card>
        </NavLink>
        <Divider variant="middle" className={styles.divider} />
      </div>
    ))}
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  categoryGifts: PropTypes.array,
  category: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  category: getHeaderById(state, props.match.params.id),
  categoryGifts: getGiftsByCategory(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
  // Component as Products,
  ContainerComponent as Products,
  Component as ProductsComponent,
};
