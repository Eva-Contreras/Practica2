
interface EstudianteProps{
  name:string,
  lastName:string,
  age:number
}

export const FirstComponent = ({name, lastName, age}:EstudianteProps) => {
    // const name:string = 'Eva'
    // const lastName:string = 'Contreras'
    // const age:number = 21
  return (
    <div>
      <p>{name} {lastName}</p>
      <p>{age}</p>
    </div>
  )
}
