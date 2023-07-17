import styles from '../styles/sortBy.module.css'

const SortBy = ({ totalResults, sortID, handleSortID }) => {
  return (
      <div className={styles.sortBy_container}>
          <select value={sortID} onChange={e => handleSortID(e.target.value)} >
            <option value='1'>Recommended</option>
            <option value='2'>Lowest Price</option>
            <option value='3'>Highest Price</option>
            <option value='4'>Highest Discount</option>
          </select>
          <p>{totalResults && totalResults} results</p>
    </div>
  )
}

export default SortBy