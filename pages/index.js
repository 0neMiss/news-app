import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = 'page-container'>
      <div className = {styles.main}>
        
        <h1>Todays News</h1>

        <h3>Your one stop news source!</h3>

      </div>

    </div>
  )
}
