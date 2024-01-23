import axios from "axios";
import { setAvailableGroups } from "../state-management/availableGroupsStore";
import {
  AvailableGroupsProjectItem,
  Student,
} from "../constants/availableGroups";
import {
  setAllStudents,
  setFilteredStudents,
} from "../state-management/searchboxStore";

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
        id: stu.studentId,
        fullName: stu.fullName,
        academicNumber: Number(String(stu.studentId).substring(0, 3)),
        address: stu.address,
        email: stu.email,
      })),
    }));

    var projectId = -1000;
    const nonJoinedStudents = await axios.get<any[]>(
      `http://localhost:3000/findPartners2/studentsNotJoined?department=${department}&projectType=${projectType}`
    );
    const fetchedStudents = nonJoinedStudents.data.map((s) => ({
      projectId: projectId++,
      ...s,
    }));
    projectId = -1000;
    const students: AvailableGroupsProjectItem[] = fetchedStudents.map(
      (stu) => ({
        id: projectId++,
        title: "",
        students: [
          {
            id: stu.studentId,
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
    console.log(allStudents);

    setAllStudents(allStudents);
    setFilteredStudents(allStudents);

    return {};
  } catch (error) {
    console.error("Error fetching available groups:", error);
    return {};
  }
};

export const sendPartnershipRequest = async (body: Object) => {
  try {
    const response = await axios.post<{ message: string }>(
      `http://localhost:3000/createNotification/notification`,
      body
    );

    return response.data.message;
  } catch (error) {
    console.error("Error sending partnership request:", error);
    return {};
  }
};