import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import SortBy from './components/SortBy'
import NavBar from './components/NavBar'
import FilterCard from './components/FilterCard'
import Loading from './components/Loading'
import './App.css'

function App() {

  const [productData, setproductData] = useState(null);
  const [sortID, setSortID] = useState(1);
  const [loading, setLoading] = useState(true);
  const [additionalPages, setAdditionalPages] = useState(0);
  const [dataQuery, setdataQuery] = useState('Toilets');

  const handleSortID = (id) => {
    setSortID(id)
  }

  const handleAdditionalPages = () => {
    setAdditionalPages(additionalPages => additionalPages + 1)
  }

  const handleQuery = (value) => {
    setdataQuery(value)
  }

  /////////////////////////////////////////////////////////////

  const API_ENDPOINT = 'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI';

  const bodySchema = {
    query: dataQuery,
    pageNumber: 0,
    size: 0,
    additionalPages: additionalPages,
    sort: sortID
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodySchema)
  }

  const fetchData = async (URL, request) => {
    const data = await fetch(URL, request);
    const products = await data.json();
    console.log(products)
      setproductData(products);
      setLoading(false)
  };

  useEffect(() => {
    fetchData(API_ENDPOINT, requestOptions);
  }, [sortID, additionalPages, dataQuery]);

  /////////////////////////////////////////////////////////////

  return (
    <>
      <h1 className='title'>Victorian Plumbing Technical Test - Chris Hughes</h1>
      {productData && <NavBar handleQuery={ handleQuery } />}

      <div className='product_list'>

        {loading ? <Loading /> : 
          <>
            <section>
              <h2>Filter By</h2>
                {productData && productData.facets.map(facet => {
                return <FilterCard key={facet.identifier} facet={facet} />
              })}</section>
                
              <section>
                { productData && <SortBy totalResults={productData.pagination.total} sortID={sortID} handleSortID={handleSortID} />}
                
                <section className='product_grid'>
                {productData && productData.products.map(product => {
                  const { id, productName, image, price, brand, stockStatus} = product
                  return <ProductCard key={id} brandImage={brand.brandImage.url} productImage={image.url} altText={image.attributes.imageAltText} productName={productName} price={price} stockStatus={ stockStatus} />
                })}
              </section>

              <div className='loadMore_container'>
                <p>You've viewed {productData.pagination.size} of {productData.pagination.total} results</p>
                <button className='btn_loadMore' onClick={handleAdditionalPages}  >LOAD MORE</button>
              </div>
              
             </section>
          </>
        }

      </div>
    </>
  )
}
 
export default App