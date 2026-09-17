
import {FirstComponent} from './FirstComponent'
import {SecondComponent} from './SecondComponent'

interface MainViewProps{
    cualMuestro:number
}

export const MainComponent = ({cualMuestro}:MainViewProps) => {
  return (
    <div>
        {
            cualMuestro == 1 ? <FirstComponent name='Eva' lastName='Contreras' age={21} /> : <SecondComponent />
        }
    </div>
  )
}

