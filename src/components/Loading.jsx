import logo from '../assets/VP_logo.jpg'
import styles from '../styles/Loading.module.css'

const Loading = () => {
  return (
      <div className={styles.loading_container}>
          <img src={logo} />
          <h1 className={styles.loading_header}>Loading...</h1>
    </div>
  )
}

export default Loading