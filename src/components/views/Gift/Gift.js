import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { NumberInput } from '../../common/NumberInput/NumberInput';
import { Select } from '../../features/Select/Select';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { getGiftByOption, fetchPublished } from '../../../redux/giftsRedux';
import {
  getOptionsByProducts,
  loadOptionsRequest,
} from '../../../redux/optionRedux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './Gift.module.scss';

class Component extends React.Component {
  state = {
    value: '',
    amount: 1,
    rate: this.props.gift.rate,
  };

  static propTypes = {
    className: PropTypes.string,
    gift: PropTypes.object,
    options: PropTypes.array,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    addGift: PropTypes.func,
    addToCart: PropTypes.func,
    loadProducts: PropTypes.func,
    loadOptionsRequest: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadProducts();
    this.props.loadOptionsRequest();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleRate = (event) => {
    this.setState({ rate: event.target.value || this.props.gift.rate});
  };

  updateTextField = (event) => {
    this.setState({ amount: parseInt(event.target.value) });
  };

  addGiftToCart = (amount, value) =>
    this.props.addGift({
      gift: this.props.gift,
      amount: amount,
      value: value,
    });

  render() {
    const { gift, options, className } = this.props;
    const { amount, value, rate } = this.state;

    return (
      
      <Container className={clsx(className, styles.root)}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography component="p">Price {gift.price}$</Typography>
            <Typography component="h1">{gift.option}</Typography>
            <Typography component="p"> {gift.description}</Typography>
            {gift ?
              (<Box
                component="fieldset"
                mb={3}
                borderColor="transparent"
                className={styles.rate}
              >
                <Typography component="legend">Client rate</Typography>
                <Rating
                  name="Product rate"
                  value={rate}
                  onChange={this.handleRate}
                />
              </Box>) : null}
            <FormControl component="fieldset" className={styles.select}>
              <FormLabel component="legend">{gift.productSelect}</FormLabel>
              <RadioGroup
                aria-label={gift.productSelect}
                name="select"
                value={value}
                onChange={this.handleChange}
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option.option}
                    value={option.option}
                    control={
                      <Radio
                        className={styles.radio}
                        style={{ color: '#584332' }}
                      />
                    }
                    label={option.option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <span>
              Quantity:&nbsp;
              <NumberInput value={amount} onChange={this.updateTextField} />
            </span>
            <Button
              className={styles.button}
              variant="contained"
              onClick={() => this.addGiftToCart(amount, value)}
            >
              Add to Card
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            {options.length ? 
              (<Select options={options} />) : null}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  gift: getGiftByOption(state, props.match.params.id),
  options: getOptionsByProducts(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addGift: (arg) => dispatch(addToCart(arg)),
  loadProducts: () => dispatch(fetchPublished()),
  loadOptionsRequest: () => dispatch(loadOptionsRequest()),
});

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  //  Component as Gift,
  ContainerComponent as Gift,
  Component as GiftComponent,
};
