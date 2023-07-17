import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ brandImage, productImage, altText, productName, price, stockStatus }) => {
  return (
    <div className={styles.product_card}>
      <img src={productImage} alt={altText} />
      <div className={styles.product_info}>
        <img className={styles.brand_image} src={ brandImage } />
        <div className={styles.product_description}>
          <p>{productName}</p>
        </div>
        <p className={styles.price}>£{price.priceIncTax}</p>
        {price.monthlyFinanceEstimate && <p className={styles.finance}>Finance from £{price.monthlyFinanceEstimate}/month</p>}
        <div className={styles.stock_container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" aria-hidden="true" focusable="false" width="25" height="25" fill="none">
            <path d="M24.1697.8333C24.7232 1.389 25 2.037 25 2.8703v19.3519c0 .7408-.2768 1.4815-.8303 2.0371-.5535.5555-1.1992.7407-2.0295.7407H2.8598c-.8303 0-1.476-.2778-2.0295-.8333C.2768 23.6111 0 22.963 0 22.2222V2.8704C0 2.037.2768 1.3889.8303.8334 1.3838.2777 2.0295 0 2.8598 0h19.2804c.8303 0 1.476.2778 2.0295.8333zM9.6864 19.9074L21.679 7.8704l-1.8451-1.8519L9.6863 16.2037l-4.6125-4.6296-1.845 1.8518 6.4575 6.4815z" fill={stockStatus.status === 'G' ? '#32AA3C' : '#f45825'}></path>
        </svg>
          <p className={styles.date}>{stockStatus.status === 'G' ? 'In Stock' : 'Not currently in Stock'}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default ProductCard





