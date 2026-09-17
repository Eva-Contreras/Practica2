import { Avatar } from './Avatar'
import { Card } from './Card'

export interface Student{
  id:string,
  nombre:string,
  apellido:string,
  estado:string,
  carrera:string,
  matricula:string,
  edad:number,
  semestre:number,
  correo:string
}

interface StudentProps{
  student:Student
  onDelete: (id: string) => void
}

export const StudentCard = ({student, onDelete}:StudentProps) => {
  return (
    <Card
      header={
        <div className="cluster">
          <Avatar firstName={student.nombre} lastName={student.apellido} />
          <div className="stack stack--tight grow">
            <div className="cluster cluster--spread">
              <h4>{student.nombre} {student.apellido}</h4>
              <span className="badge badge--success">'{student.estado}'</span>
            </div>
            <p className="text-muted">{student.carrera}</p>
          </div>
        </div>
      }
      footer={
        <div className="cluster">
          <button className="btn btn--sm" type="button">
            Ver perfil
          </button>
          <button className="btn btn--secondary btn--sm" type="button">
            Editar
          </button>
          <button
            className="btn btn--secondary btn--sm"
            type="button"
            onClick={() => onDelete(student.id)}
          >
            Eliminar
          </button>
        </div>
      }
    >
      <dl className="meta-list">
        <div className="meta-list__row">
          <dt className="meta-list__label">Matricula</dt>
          <dd className="meta-list__value">{student.matricula}</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Edad</dt>
          <dd className="meta-list__value">{student.edad} years</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Semestre</dt>
          <dd className="meta-list__value">{student.semestre}</dd>
        </div>
        <div className="meta-list__row">
          <dt className="meta-list__label">Correo</dt>
          <dd className="meta-list__value">{student.correo}</dd>
        </div>
      </dl>
    </Card>
  )
}