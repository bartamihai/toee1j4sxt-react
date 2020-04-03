import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>ToeE1j4SXT</title>
        <meta property="og:title" content="ToeE1j4SXT" />
      </Helmet>
      <AppComponent src="/playground_assets/p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
