// rafc + tab

import './design-system.css'
// import {FirstComponent} from './FirstComponent.tsx'
// import {MainComponent} from './MainComponent.tsx'
// import {students} from './data/students.tsx'
// import {StudentCard} from './components/StudentCard.tsx'
// import {products} from './data/products.tsx'
// import { ProductCard } from './components/ProductCard.tsx'
// import { Contador } from './components/Contador.tsx'
// import { AddProducts  } from './components/AddProducts'
// import { ProductForm } from './components/ProductForm'
import { StudentForm } from './components/StudentForm'

export const App = () => {
  
  return (
    <main className="page">
      <div className="container stack">
        <section className="stack">
          {/*<MainComponent cualMuestro={2} /> */}
          {/* <StudentCard/> */}
          {/* <ProductCard/> */}
          {/* {products.map(product=>
            <ProductCard product = {product}/>
          )}
          {students.map(student=>(
            <StudentCard student={student} />
          ))} */}
          {/* <Contador/> */}
          {/* <AddProducts/> */}
          {/* <ProductForm/> */}
          <StudentForm/>
        </section>
      </div>
    </main>
  )
}

