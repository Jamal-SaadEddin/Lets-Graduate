import axios from "axios";
import { SupervisedProjectsProjectItem } from "../constants/availableGroups";
import { setMyGroups } from "../state-management/Doctor/myGroupsStore";

export const getMyGroups = async (doctorId: number) => {
  try {
    const response = await axios.get<SupervisedProjectsProjectItem[]>(
      `http://localhost:3000/findMyGroups/groups?doctorId=${doctorId}`
    );
    const fetchedGroups = response.data.map((group) => ({
      ...group,
      students: group.students.map(
        ({
          fullName,
          studentId,
          address,
          email,
          department,
          projectType,
          projectStatus,
        }) => ({
          fullName,
          id: studentId as number,
          address,
          email,
          department,
          projectType,
          projectStatus,
        })
      ),
    }));
    setMyGroups(fetchedGroups);
    return fetchedGroups;
  } catch (error) {
    console.error("Error fetching my groups:", error);
  }
};

export const updateStudentProjectStatus = async (studentId: number) => {
  try {
    const response = await axios.get<{ message: string }>(
      `http://localhost:3000/projects/projectStatus/${studentId}`
    );
    const message = response.data.message;
    return message === "Project status updated successfully" ? true : false;
  } catch (error) {
    console.error("Error updating student's project status:", error);
    return false;
  }
};
