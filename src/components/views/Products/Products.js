import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getGiftsByCategory, fetchPublished } from '../../../redux/giftsRedux.js';
import styles from './Products.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    categoryGifts: PropTypes.array,
    category: PropTypes.array,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    getCategory: PropTypes.func,
    loadProduct:PropTypes.func,
  }

  componentDidMount() {
    this.props.loadProduct();
  }


  render() {
    const { className, categoryGifts } = this.props; 
    return  (
      <Container className={clsx(className, styles.root)}>
        <h2>{categoryGifts[0].categoryName}</h2>
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
  }
}


const mapStateToProps = (state, props) => ({
  categoryGifts: getGiftsByCategory(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Products,
  ContainerComponent as Products,
  Component as ProductsComponent,
};
