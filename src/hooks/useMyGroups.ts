import axios from "axios";
import { setMyGroups } from "../state-management/Doctor/myGroupsStore";

export const getMyGroups = async (_doctorId: number) => {
  try {
    // const response = await axios.get<SupervisedProjectsProjectItem[]>(
    //   `http://localhost:3000/findMyGroups/groups?doctorId=${doctorId}`
    // );
    // const fetchedGroups = response.data.map((group) => ({
    //   ...group,
    //   students: group.students.map(
    //     ({
    //       fullName,
    //       studentId,
    //       address,
    //       email,
    //       department,
    //       projectType,
    //       projectStatus,
    //     }) => ({
    //       fullName,
    //       id: studentId as number,
    //       address,
    //       email,
    //       department,
    //       projectType,
    //       projectStatus,
    //     })
    //   ),
    // }));

    setMyGroups([
      {
        id: 1,
        title: "Let's Graduate",
        students: [
          {
            fullName: "Jamal SaadEddin",
            id: 11923604,
            address: "Ramallah",
            email: "s11923604@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Obaida Aws",
            id: 11925066,
            address: "Aqraba",
            email: "s11925066@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Ahmad Majed",
            id: 11944044,
            address: "Jenin",
            email: "s11944044@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 2,
        title: "Mohito Machine",
        students: [
          {
            fullName: "Zaid SaadEldeen",
            id: 11933044,
            address: "Nablus",
            email: "s11933044@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp2",
            projectStatus: "in progress",
          },
          {
            fullName: "Dyaa Aqrabawi",
            id: 11933066,
            address: "Aqraba",
            email: "s11933066@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp2",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 3,
        title: "Delevary System",
        students: [
          {
            fullName: "Momen Odeh",
            id: 11925011,
            address: "Nablus",
            email: "s11925011@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Abdallah Ads",
            id: 11925022,
            address: "Tulkarem",
            email: "s11925022@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 4,
        title: "Clever Chair",
        students: [
          {
            fullName: "Yahia Arafat",
            id: 11823055,
            address: "Asira",
            email: "s11823055@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Omar Quzmar",
            id: 11923877,
            address: "Qalqilya",
            email: "s11923877@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
    ]);
    return [
      {
        id: 1,
        title: "Let's Graduate",
        students: [
          {
            fullName: "Jamal SaadEddin",
            id: 11923604,
            address: "Ramallah",
            email: "s11923604@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Obaida Aws",
            id: 11925066,
            address: "Aqraba",
            email: "s11925066@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Ahmad Majed",
            id: 11944044,
            address: "Jenin",
            email: "s11944044@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 2,
        title: "Mohito Machine",
        students: [
          {
            fullName: "Zaid SaadEldeen",
            id: 11933044,
            address: "Nablus",
            email: "s11933044@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp2",
            projectStatus: "in progress",
          },
          {
            fullName: "Dyaa Aqrabawi",
            id: 11933066,
            address: "Aqraba",
            email: "s11933066@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp2",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 3,
        title: "Delevary System",
        students: [
          {
            fullName: "Momen Odeh",
            id: 11925011,
            address: "Nablus",
            email: "s11925011@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Abdallah Ads",
            id: 11925022,
            address: "Tulkarem",
            email: "s11925022@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
      {
        id: 4,
        title: "Clever Chair",
        students: [
          {
            fullName: "Yahia Arafat",
            id: 11823055,
            address: "Asira",
            email: "s11823055@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
          {
            fullName: "Omar Quzmar",
            id: 11923877,
            address: "Qalqilya",
            email: "s11923877@stu.najah.edu",
            department: "Computer Engineering",
            projectType: "gp1",
            projectStatus: "in progress",
          },
        ],
      },
    ];
  } catch (error) {
    console.error("Error fetching my groups:", error);
  }
};

export const updateStudentProjectStatus = async (
  studentId: number,
  body: Object
) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/projects/projectStatus/${studentId}`,
      body
    );
    const message = response.data.message;
    return message === "Project status updated successfully" ? true : false;
  } catch (error) {
    console.error("Error updating student's project status:", error);
    return false;
  }
};
