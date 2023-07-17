import styles from '../styles/FilterCard.module.css'

const FilterCard = ({facet}) => {
  return (
      <div className={styles.filterCard_container}>
          <h3 className={styles.filterCard_header}>{facet.displayName}</h3>
              {facet.options.map(option => {
                  return (
                      <div className={styles.filterCard_checkboxContainer} key={option.identifier}>
                          {option.linkSlug ? <a href={option.linkSlug}>{option.displayValue}</a> :
                              <>
                                <input id={option.identifier} value="test" type="checkbox" /> 
                                <label htmlFor={option.identifier}>{option.displayValue} <small>({option.productCount})</small></label>
                              </>
                          }
                      </div>
                  )
              })}
    </div>
  )
}

export default FilterCard