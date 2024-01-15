import {
  AvailableGroupsProjectItem,
  GradingProjectsProjectItem,
  Project,
  Student,
  SupervisedProjectsProjectItem,
} from "../constants/availableGroups";

export const filterStudents = (
  students: Student[],
  address: string | null,
  academicNumber: string | null
): Student[] => {
  return students
    .filter((s) => (address === "" ? s : s.address === address))
    .filter((s) =>
      academicNumber === ""
        ? s
        : s.academicNumber?.toString() === academicNumber
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
  projects:
    | AvailableGroupsProjectItem[]
    | SupervisedProjectsProjectItem[]
    | GradingProjectsProjectItem[]
    | null
    | undefined,
  address: string | null,
  academicNumber: string | null
) => {
  const filteredStudents = students
    .filter((s) => (address === "" ? s : s.address === address))
    .filter((s) =>
      academicNumber === ""
        ? s
        : s.academicNumber?.toString() === academicNumber
    );

  const filteredProjectsIds = filteredStudents.map((s) => s.projectId);

  return projects?.filter(({ id }) => filteredProjectsIds.indexOf(id) !== -1);
};
