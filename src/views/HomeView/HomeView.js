import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Приветственная страница нашего сервеса{' '}
      <span role="img" aria-label="иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
