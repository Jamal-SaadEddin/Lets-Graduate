import axios from "axios";
import { Student } from "../constants/availableGroups";
import { setAvailableMergeGroups } from "../state-management/Doctor/mergeGroupsStore";
import {
  setAllStudents,
  setFilteredStudents,
} from "../state-management/searchboxStore";

export const getAvailableMergeGroups = async (_doctorId: number) => {
  try {
    // const response = await axios.get<AvailableGroupsProjectItem[]>(
    //   `http://localhost:3000/allGroups/groups?doctorId=${doctorId}`
    // );
    // const fetchedGroups = response.data;
    // const groups: AvailableGroupsProjectItem[] = fetchedGroups.map((group) => ({
    //   ...group,
    //   students: group.students.map(
    //     ({ fullName, studentId, address, email, department, projectType }) => ({
    //       fullName,
    //       academicNumber: Number(String(studentId).substring(0, 3)),
    //       address,
    //       email,
    //       department,
    //       id: studentId as number,
    //       projectType,
    //     })
    //   ),
    // }));

    setAvailableMergeGroups([
      {
        id: 5,
        title: "Medical System",
        doctorId: 1377,
        students: [
          {
            fullName: "Mustafa Irshaid",
            academicNumber: 119,
            address: "Nablus",
            email: "s11911122@stu.najah.edu",
            department: "Computer Engineering",
            id: 11911122,
            projectType: "gp1",
          },
          {
            fullName: "Aamer Qanadilo",
            academicNumber: 119,
            address: "Nablus",
            email: "s11911133@stu.najah.edu",
            department: "Computer Engineering",
            id: 11911133,
            projectType: "gp1",
          },
        ],
      },
      {
        id: 6,
        title: "E-Commerce System",
        doctorId: 1495,
        students: [
          {
            fullName: "Abas Surakji",
            academicNumber: 119,
            address: "Nablus",
            email: "s11925033@stu.najah.edu",
            department: "Computer Engineering",
            id: 11925033,
            projectType: "gp1",
          },
          {
            fullName: "NoorAldeen AbuShehadeh",
            academicNumber: 119,
            address: "Hwara",
            email: "s11925077@stu.najah.edu",
            department: "Computer Engineering",
            id: 11925077,
            projectType: "gp1",
          },
        ],
      },
      {
        id: 7,
        title: "Cleaner Robot",
        doctorId: 1495,
        students: [
          {
            fullName: "Mustafa HabRoman",
            academicNumber: 118,
            address: "Nablus",
            email: "s11823044@stu.najah.edu",
            department: "Computer Engineering",
            id: 11823044,
            projectType: "gp2",
          },
          {
            fullName: "Omar Shkokani",
            academicNumber: 119,
            address: "Nablus",
            email: "s11911010@stu.najah.edu",
            department: "Computer Engineering",
            id: 11911010,
            projectType: "gp1",
          },
          {
            fullName: "Khaled Jaber",
            academicNumber: 119,
            address: "Nablus",
            email: "s11924044@stu.najah.edu",
            department: "Computer Engineering",
            id: 11924044,
            projectType: "gp2",
          },
        ],
      },
    ]);

    // const allStudents: Student[] = fetchedGroups
    //   .flatMap((project) =>
    //     project.students.map((student) => ({
    //       ...student,
    //       projectId: project.id,
    //     }))
    //   )
    //   .map((s) => ({
    //     id: s.studentId,
    //     fullName: s.fullName,
    //     projectId: s.projectId,
    //     academicNumber: Number(String(s.studentId).substring(0, 3)),
    //     address: s.address,
    //     email: s.email,
    //     department: s.department,
    //     projectType: s.projectType,
    //   }));

    setAllStudents([
      {
        id: 11911122,
        fullName: "Mustafa Irshaid",
        projectId: 5,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911122@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11911133,
        fullName: "Aamer Qanadilo",
        projectId: 5,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911133@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11925033,
        fullName: "Abas Surakji",
        projectId: 6,
        academicNumber: 119,
        address: "Nablus",
        email: "s11925033@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11925077,
        fullName: "NoorAldeen AbuShehadeh",
        projectId: 6,
        academicNumber: 119,
        address: "Hwara",
        email: "s11925077@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11823044,
        fullName: "Mustafa HabRoman",
        projectId: 7,
        academicNumber: 118,
        address: "Nablus",
        email: "s11823044@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp2",
      },
      {
        id: 11911010,
        fullName: "Omar Shkokani",
        projectId: 7,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911010@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11924044,
        fullName: "Khaled Jaber",
        projectId: 7,
        academicNumber: 119,
        address: "Nablus",
        email: "s11924044@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp2",
      },
    ] as unknown as Student[]);
    setFilteredStudents([
      {
        id: 11911122,
        fullName: "Mustafa Irshaid",
        projectId: 5,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911122@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11911133,
        fullName: "Aamer Qanadilo",
        projectId: 5,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911133@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11925033,
        fullName: "Abas Surakji",
        projectId: 6,
        academicNumber: 119,
        address: "Nablus",
        email: "s11925033@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11925077,
        fullName: "NoorAldeen AbuShehadeh",
        projectId: 6,
        academicNumber: 119,
        address: "Hwara",
        email: "s11925077@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11823044,
        fullName: "Mustafa HabRoman",
        projectId: 7,
        academicNumber: 118,
        address: "Nablus",
        email: "s11823044@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp2",
      },
      {
        id: 11911010,
        fullName: "Omar Shkokani",
        projectId: 7,
        academicNumber: 119,
        address: "Nablus",
        email: "s11911010@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp1",
      },
      {
        id: 11924044,
        fullName: "Khaled Jaber",
        projectId: 7,
        academicNumber: 119,
        address: "Nablus",
        email: "s11924044@stu.najah.edu",
        department: "Computer Engineering",
        projectType: "gp2",
      },
    ] as unknown as Student[]);

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
