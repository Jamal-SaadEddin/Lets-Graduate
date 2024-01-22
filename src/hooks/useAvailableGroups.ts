import axios from "axios";
import { setAvailableGroups } from "../state-management/availableGroupsStore";
import { AvailableGroupsProjectItem } from "../constants/availableGroups";
import {
  setAllStudents,
  setFilteredStudents,
} from "../state-management/searchboxStore";
import { Student } from "../constants/supervisedProjects";

export const getAvailableGroups = async (
  department: string,
  projectType: string
) => {
  try {
    const joinedGroups = await axios.get<any[][]>(
      `http://localhost:3000/findPartners1/findGroups?department=${department}&projectType=${projectType}`
    );
    const fetchedGroups = joinedGroups.data.map((arr, i) =>
      arr.map((s) => ({ projectId: i + 1, ...s }))
    );
    const groups: AvailableGroupsProjectItem[] = fetchedGroups.map((arr) => ({
      id: fetchedGroups.filter((ar) => arr === ar)[0][0].projectId,
      title: "",
      students: arr.map((stu) => ({
        fullName: stu.fullName,
        academicNumber: Number(String(stu.studentId).substring(0, 3)),
        address: stu.address,
        email: stu.email,
      })),
    }));

    var projectId = -100;
    const nonJoinedStudents = await axios.get<any[]>(
      `http://localhost:3000/findPartners2/studentsNotJoined?department=${department}&projectType=${projectType}`
    );
    const fetchedStudents = nonJoinedStudents.data.map((s) => ({
      projectId: projectId++,
      ...s,
    }));
    projectId = -100;
    const students: AvailableGroupsProjectItem[] = fetchedStudents.map(
      (stu) => ({
        id: projectId++,
        title: "",
        students: [
          {
            fullName: stu.fullName,
            academicNumber: Number(String(stu.studentId).substring(0, 3)),
            address: stu.address,
            email: stu.email,
          },
        ],
      })
    );

    const allGroups = [...groups, ...students];
    setAvailableGroups(allGroups);

    // Set all fetched students
    const joinedStudents: Student[] = fetchedGroups.flat().map((s) => ({
      academicNumber: Number(String(s.studentId).substring(0, 3)),
      ...s,
    }));

    const aloneStudents = fetchedStudents.map((s) => ({
      academicNumber: Number(String(s.studentId).substring(0, 3)),
      ...s,
    }));

    const allStudents: Student[] = [...joinedStudents, ...aloneStudents];

    setAllStudents(allStudents);
    setFilteredStudents(allStudents);

    return {};
  } catch (error) {
    console.error("Error fetching available groups:", error);
    return {};
  }
};
