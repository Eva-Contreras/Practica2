
import { useState } from 'react'

export const Contador = () => {
    // Las funciones dentro de eventos o trigger empiezan con handle-accion
    const [count, setCount] = useState(0);

    const handleClickSuma = () => {
        setCount(count + 1)
    }

    const handleClickResta = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={handleClickSuma}>Sumar</button>
            <button onClick={handleClickResta}>Restar</button>
            <h1>Cantidad: {count}</h1>
        </div>
    )
}