import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

// HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

// HomeButton component
const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

export default () => (

  <header className={styles.container}>

    <div className={styles.row}>
      <HeaderLink to='/' text='ARTICLES' />
      <HeaderLink to='/about' text='ABOUT' />
    </div>

  </header>

)