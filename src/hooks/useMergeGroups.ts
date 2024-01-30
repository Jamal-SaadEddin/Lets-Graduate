import axios from "axios";
import {
  AvailableGroupsProjectItem,
  Student,
} from "../constants/availableGroups";
import { setAvailableMergeGroups } from "../state-management/Doctor/mergeGroupsStore";
import {
  setAllStudents,
  setFilteredStudents,
} from "../state-management/searchboxStore";

export const getAvailableMergeGroups = async () => {
  try {
    const response = await axios.get<AvailableGroupsProjectItem[]>(
      `http://localhost:3000/allGroups/groups`
    );
    const fetchedGroups = response.data;
    const groups: AvailableGroupsProjectItem[] = fetchedGroups.map((group) => ({
      ...group,
      students: group.students.map(
        ({ fullName, studentId, address, email, department, projectType }) => ({
          fullName,
          academicNumber: Number(String(studentId).substring(0, 3)),
          address,
          email,
          department,
          id: studentId as number,
          projectType,
        })
      ),
    }));
    setAvailableMergeGroups(groups);

    const allStudents: Student[] = fetchedGroups
      .flatMap((project) =>
        project.students.map((student) => ({
          ...student,
          projectId: project.id,
        }))
      )
      .map((s) => ({
        id: s.studentId,
        fullName: s.fullName,
        projectId: s.projectId,
        academicNumber: Number(String(s.studentId).substring(0, 3)),
        address: s.address,
        email: s.email,
        department: s.department,
        projectType: s.projectType,
      }));
    setAllStudents(allStudents);
    setFilteredStudents(allStudents);

    return {};
  } catch (error) {
    console.error("Error fetching available merge groups:", error);
  }
};

export const sendMergeRequest = async (body: Object) => {
  try {
    const response = await axios.post<{ message: string }>(
      `http://localhost:3000/merge/request`,
      body
    );
    const message = response.data.message;

    return message === "Notification created successfully";
  } catch (error) {
    console.error("Error sending merge request:", error);
    return false;
  }
};
