
import {useState} from 'react'
import {type Product, ProductCard} from '../components/ProductCard'

export const ProductForm = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0.0)
  const [products, setProducts] = useState<Product[]>([])
 
  const handleCreateProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      titulo: title,
      categoria: category,
      descripcion: description,
      precio: price
    }
    setProducts([...products, newProduct])
    setTitle('')
    setCategory('')
    setDescription('')
    setPrice(0.0)
 
  }
  return (
    <main className="page">
      <div className="container">
        <section className="card" aria-labelledby="product-form-title">
          <header className="card__header stack stack--tight">
            <span className="badge badge--primary">
              Nuevo producto
            </span>
 
            <h1 id="product-form-title">Registrar producto</h1>
 
            <p className="text-muted">
              Completa la información para agregar un producto al catálogo.
            </p>
          </header>
 
          <form className="stack">
            <div className="grid">
              <div className="form-group">
                <label htmlFor="title">Título</label>
 
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Ej. Monitor ultrawide"
                  autoComplete="off"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
 
              <div className="form-group">
                <label htmlFor="category">Categoría</label>
 
                <select
                  id="category"
                  name="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
 
                  <option value="electronics">Electrónica</option>
                  <option value="home">Hogar</option>
                  <option value="clothing">Ropa</option>
                  <option value="other">Otra</option>
                </select>
              </div>
            </div>
 
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
 
              <textarea
                id="description"
                name="description"
                placeholder="Describe las características principales del producto"
                rows={5}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
 
              <small className="form-help">
                Incluye detalles que ayuden a identificar el producto.
              </small>
            </div>
 
            <div className="form-group">
              <label htmlFor="price">Precio</label>
 
              <input
                id="price"
                name="price"
                type="number"
                min="0.01"
                step="0.01"
                inputMode="decimal"
                placeholder="0.00"
                aria-describedby="price-help"
                required
                value={price}
                onChange={(e) => {
                  const value = e.target.value
                  const priceConvertor = value === '' ? 0 : Number.parseFloat(value)
                  setPrice(priceConvertor)
                }}
              />
 
              <small id="price-help" className="form-help">
                Ingresa el precio en MXN.
              </small>
            </div>
 
            <footer className="card__footer cluster cluster--spread">
              <button className="btn btn--secondary" type="reset">
                Limpiar
              </button>
 
              <button className="btn btn--primary" type="submit"
              onClick={handleCreateProduct} >
                Guardar producto
              </button>
              <button className="btn btn--primary" type="submit"
              onClick={handleCreateProduct} >
                Guardar producto
              </button>
            </footer>
          </form>
        </section>
        <section>
          {
            products.map((product) => (
                <ProductCard key={product.id} product={product} /> )
            )
        }
        </section>
      </div>
    </main>
  );
};
 