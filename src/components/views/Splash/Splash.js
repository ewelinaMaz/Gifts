import React from 'react';
import styles from './Splash.module.scss';

const Component = () => (

  <div className={styles.root}>
    <img
      src={'https://cdn.pixabay.com/photo/2017/05/19/17/35/cake-2327069_960_720.jpg'}
      alt="luxury-gifts"
    />
  </div>
);

export {
  Component as Splash,
  Component as SplashComponent,
};
