
import {useState} from 'react'
import { type Product } from "../components/ProductCard"
import { ProductCard } from '../components/ProductCard'

export const AddProducts = () => {
    const [products,setProducts] = useState<Product[]>([])
    const handleAddProducts = () => {
        const newProduct: Product = {
            id:Date.now().toString(),
            titulo: 'Producto 1',
            categoria: 'Categoria 1',
            descripcion: 'Descripcion del producto 1',
            precio: 24999
        }
        setProducts([...products,newProduct])
    }
    return (
        <div>
            <button onClick={handleAddProducts}>Add Product</button>
            {
                products.map(product=> 
                <ProductCard key={product.id} product = {product}/>)
            }
        </div>
    )
}