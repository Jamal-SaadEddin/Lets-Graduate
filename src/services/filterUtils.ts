import { Project, Student } from "../constants/availableGroups";

export const filterStudents = (
  students: Student[],
  address: string | null,
  batchNumber: string | null
): Student[] => {
  return students
    .filter((s) => (address === "" ? s : s.address === address))
    .filter((s) =>
      batchNumber === "" ? s : s.batchNumber?.toString() === batchNumber
    );
};

export const filterProjects = (
  projects: Project[] | null | undefined,
  filteredStudentIds: number[]
): Project[] | null | undefined => {
  return projects?.filter(({ id }) => filteredStudentIds.indexOf(id) !== -1);
};

export const filterGroups = (
  students: Student[],
  projects: Project[] | null | undefined,
  address: string | null,
  batchNumber: string | null
): Project[] | null | undefined => {
  const filteredStudents = students
    .filter((s) => (address === "" ? s : s.address === address))
    .filter((s) =>
      batchNumber === "" ? s : s.batchNumber?.toString() === batchNumber
    );

  const filteredProjectsIds = filteredStudents.map((s) => s.projectId);

  return projects?.filter(({ id }) => filteredProjectsIds.indexOf(id) !== -1);
};
