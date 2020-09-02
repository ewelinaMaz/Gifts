import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { getGiftsByRate, fetchPublished } from '../../../redux/giftsRedux.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './Best.module.scss';
import Divider from '@material-ui/core/Divider';

class Component extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    gifts: PropTypes.array,
    loadProduct: PropTypes.func,
  };
  componentDidMount() {
    this.props.loadProduct();
  }

  render() {
    const { className, gifts } = this.props;
    return (
      <Container className={clsx(className, styles.root)}>
        {gifts.map((gift) => (
          <div key={gift.option}>
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
                  <Button
                    className={styles.button}
                    variant="outlined"
                    style={{ color: '#584332' }}
                  >
                    See more
                  </Button>
                  <Typography component="p">
                    Price from: {gift.price}$
                  </Typography>
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

const mapStateToProps = (state) => ({
  gifts: getGiftsByRate(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  // Component as Best,
  ContainerComponent as Best,
  Component as BestComponent,
};
