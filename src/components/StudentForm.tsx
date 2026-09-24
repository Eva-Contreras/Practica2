
import {useState} from 'react'
import { StudentCard, type Student } from '../components/StudentCard'
import { useStudents } from '../hooks/useStudents'

export const StudentForm = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [state, setState] = useState('')
    const [career, setCareer] = useState('')
    const [studentID, setStudentID] = useState('')
    const [age, setAge] = useState(0) 
    const [semester, setSemester] = useState(0) 
    const [email, setEmail] = useState('') 
    const { students, hasError, addStudent, deleteStudent } = useStudents()
     
      const handleCreateStudent = () => {
        const newStudent: Student = {
          id: Date.now().toString(),
          nombre:name,
          apellido:lastname,
          estado:state,
          carrera:career,
          matricula:studentID,
          edad:age,
          semestre:semester,
          correo:email
        }
        addStudent(newStudent)
        setAge(0)
        setCareer('')
        setEmail('')
        setLastname('')
        setName('')
        setSemester(0)
        setState('')
        setStudentID('')
      }

  return (
      <main className="page">
        <div className="container">
          <section className="card" aria-labelledby="product-form-title">
            <header className="card__header stack stack--tight">
              <span className="badge badge--primary">
                Nuevo estudiante
              </span>
   
              <h1 id="product-form-title">Registrar estudiante</h1>
   
              <p className="text-muted">
                Completa la información para agregar un estudiante.
              </p>
            </header>
   
            <form
              className="stack"
              onSubmit={(event) => {
                event.preventDefault()
                handleCreateStudent()
              }}
            >
              <div className="grid">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
   
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej. Juan"
                    autoComplete="off"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label htmlFor="lastname">Apellido</label>
   
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Ej. Pérez"
                    autoComplete="off"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
   
                <div className="form-group">
                  <label htmlFor="state">Estado</label>
   
                  <select
                    id="state"
                    name="state"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona un estadoo
                    </option>
   
                    <option value="activo">Activo</option>
                    <option value="inactivo">inactivo</option>
                  </select>
                </div>
                <label htmlFor="career">Carrera</label>
   
                  <input
                    id="career"
                    name="career"
                    type="text"
                    placeholder="Ej. Ing. en Sistemas Computacionales"
                    autoComplete="off"
                    required
                    value={career}
                    onChange={(e) => setCareer(e.target.value)}
                  />

                  <label htmlFor="studentID">Matricula</label>
   
                  <input
                    id="studentID"
                    name="studentID"
                    type="text"
                    placeholder="23100150"
                    autoComplete="off"
                    required
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                  />

                <label htmlFor="age">Edad</label>
   
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="decimal"
                  placeholder="0"
                  aria-describedby="price-help"
                  required
                  value={age}
                  onChange={(e) => {
                    const value = e.target.value
                    const ageConvertor = value === '' ? 0 : Number.parseFloat(value)
                    setAge(ageConvertor)
                  }}
                />

                <label htmlFor="semester">Semestre</label>
   
                <input
                  id="semester"
                  name="semester"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="decimal"
                  placeholder="0"
                  aria-describedby="price-help"
                  required
                  value={semester}
                  onChange={(e) => {
                    const value = e.target.value
                    const semesterConvertor = value === '' ? 0 : Number.parseFloat(value)
                    setSemester(semesterConvertor)
                  }}
                />
                <label htmlFor="email">Correo</label>
   
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="name@email.com"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

              
              <footer className="card__footer cluster cluster--spread">
                <button className="btn btn--secondary" type="reset">
                  Limpiar
                </button>
   
                <button className="btn btn--primary" type="submit"
                >
                  Guardar estudiante
                </button>
                
              </footer>
            </form>
          </section>
          <section>
                    {hasError ? <p>Error al cargar los estudiantes.</p> :
                      students.map((student) => (
                          <StudentCard
                            key={student.id}
                            student={student}
                            onDelete={deleteStudent}
                          /> )
                      )
                  }
                  </section>
        </div>
      </main>
    );
  };
   