
import { useEffect, useState } from 'react'
import { type Student } from '../components/StudentCard'
import { getStudentsAsync } from '../services/StudentService'

export const useStudents = () => {

	const [students, setStudents] = useState<Student[]>([])
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		const getStudents = async () => {
			setHasError(false)

			try {
				const studentResponse = await getStudentsAsync()
				setStudents(studentResponse)
			} catch (error) {
				console.error(error)
				setHasError(true)
			}
		}

		void getStudents()
	}, [])

	const addStudent = (student: Student) => {
		setStudents((currentStudents) => [...currentStudents, student])
	}

	const deleteStudent = (id: string) => {
		setStudents((currentStudents) =>
			currentStudents.filter((student) => student.id !== id),
		)
	}

	return {
		students,
		hasError,
		addStudent,
		deleteStudent,
	}
}
