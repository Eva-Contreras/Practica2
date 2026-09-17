import { Card } from './Card'

export interface Product{
  id:string,
  titulo:string,
  categoria:string,
  descripcion:string,
  precio:number
}

interface ProductProps{
  product:Product
}

export const ProductCard = ({product}:ProductProps) => {
  return (
    <Card header={<h4>{product.titulo}</h4>}>
      <p className="text-muted">{product.categoria}</p>
      <p>{product.descripcion}</p>
      <dl className="meta-list">
        <div className="meta-list__row">
          <dt className="meta-list__label">Precio</dt>
          <dd className="meta-list__value">${product.precio}</dd>
        </div>
      </dl>
    </Card>
  )
}