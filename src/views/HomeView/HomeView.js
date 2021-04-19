import React from 'react';
import styles from './HomeView.module.css';
import Grid from '@material-ui/core/Grid';

const HomeView = () => (
  <Grid container component="main" className={styles.root}>
    <Grid item xs={false} sm={4} md={7} className={styles.image} />
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      className={styles.paper}
      elevation={6}
      square="true"
    >
      <h1 className={styles.title}>
        Приветственная страница нашего сервеса{' '}
        <span role="img" aria-label="иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </Grid>
  </Grid>
);

export default HomeView;
