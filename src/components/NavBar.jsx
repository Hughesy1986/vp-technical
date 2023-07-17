import styles from '../styles/navBar.module.css'

const NavBar = ({ handleQuery }) => {

    const navItems = ['Bathroom-Suites', 'Toilets', 'Basins', 'Baths', 'Bathroom-Furniture', 'Showers', 'Shower-Enclosures', 'Taps', 'Bathroom-Heating', 'Bathroom-Accessories', 'Tiles']

  return (
      <div className={styles.navBar_container}>
          <ul className={styles.nav_items}>
            {navItems.map(item => {
              return (
                <li key={item}>
                  <button className={styles.nav_link} value={item} onClick={(e) => handleQuery(e.target.value)}>{ item.includes('-') ? item.split('-')[1] : item}</button>
                </li>
                )
              })}
          </ul>
    </div>
  )
}

export default NavBar