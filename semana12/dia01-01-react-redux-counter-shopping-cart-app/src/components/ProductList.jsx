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
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <button>
                Add to cart
              </button>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default ProductList