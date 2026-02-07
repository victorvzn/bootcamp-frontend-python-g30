const ProductList = ({ products }) => {


  return (
    <section>
      <h3>Product list</h3>

      <section>
        {products.map(product => {
          return (
            <article
              key={product.id}
            >

            </article>
          )
        })}
      </section>
    </section>
  )
}

export default ProductList