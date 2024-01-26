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
        ({ fullName, studentId, address, email, department }) => ({
          fullName,
          id: studentId as number,
          address,
          email,
          department,
        })
      ),
    }));
    setMyGroups(fetchedGroups);
    return fetchedGroups;
  } catch (error) {
    console.error("Error fetching my groups:", error);
  }
};
