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
import { connect } from 'react-redux';
import { getGiftByOption } from '../../../redux/giftsRedux';
import { getOptionsByProducts } from '../../../redux/optionRedux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './Gift.module.scss';

const Component = ({ gift, options, className}) => { 
  const [value, setValue] = React.useState('female');
  const [amount, setAmount] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const updateTextField = (event) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <Container className={clsx(className, styles.root)}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography component="p">Price {gift.price}$</Typography>
          <Typography component="h1">{gift.option}</Typography>
          <Typography component="p"> {gift.description}</Typography>
          <FormControl component="fieldset"
            className={styles.select}>
            <FormLabel component="legend">{gift.productSelect}</FormLabel>
            <RadioGroup aria-label={gift.productSelect} 
              name="select"
              value={value} 
              onChange={handleChange}>
              {options.map( option => (
                <FormControlLabel 
                  key={option.option} 
                  value={option.option} 
                  control=
                    {<Radio 
                      className={styles.radio}
                      style= {{color: '#584332'}} />} 
                  label={option.option} />
              ))}
            </RadioGroup>
          </FormControl>
          <span>Ilość:&nbsp;
            <NumberInput
              value={amount}
              onChange={updateTextField}
            />
          </span>
          <Button 
            className={styles.button}
            variant="contained"
            onClick={() => addToCart(gift, amount)}>Add to Card</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select options={options}/>
        </Grid>
      </Grid>
    </Container>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  gift: PropTypes.object,
  options: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state, props) => ({
  gift: getGiftByOption(state,  props.match.params.id),
  options: getOptionsByProducts(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (gift, amount) => dispatch(addToCart(gift, amount)),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
//  Component as Gift,
  ContainerComponent as Gift,
  Component as GiftComponent,
};
