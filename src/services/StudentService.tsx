
import { students } from '../data/students'
import { type Student } from '../components/StudentCard'

export const getStudentsAsync = async (): Promise<Student[]> => {
	return [...students]
}
