
import { useState } from "react"
import { type Product } from "../components/ProductCard"

export const useProducts = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
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

  return {
    setTitle,
    title, 
    setCategory,
    category,
    setDescription,
    description,
    setPrice,
    price,
    handleCreateProduct,
    products
  }
}

