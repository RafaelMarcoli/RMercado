import styles from './Banner.module.css'

function Banner(img) {
  return (
    <div >
      <img className={styles.banner} src={img.img} alt='Banner dos Produtos' />
    </div>
  )
}

export default Banner
