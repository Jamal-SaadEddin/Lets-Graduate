import axios from "axios";
import { Student } from "../constants/availableGroups";
import { setAvailableGroups } from "../state-management/Student/availableGroupsStore";
import {
  setAllStudents,
  setFilteredStudents,
} from "../state-management/searchboxStore";

export const getAvailableGroups = async (
  _department: string,
  _projectType: string,
  _studentId: number
) => {
  try {
    // const joinedGroups = await axios.get<any[][]>(
    //   `http://localhost:3000/findPartners1/findGroups?department=${department}&projectType=${projectType}`
    // );
    // const fetchedGroups = joinedGroups.data.map((arr, i) =>
    //   arr.map((s) => ({ projectId: i + 1, ...s }))
    // );
    // const groups: AvailableGroupsProjectItem[] = fetchedGroups.map((arr) => ({
    //   id: fetchedGroups.filter((ar) => arr === ar)[0][0].projectId,
    //   title: "",
    //   students: arr.map((stu) => ({
    //     id: stu.studentId,
    //     fullName: stu.fullName,
    //     academicNumber: Number(String(stu.studentId).substring(0, 3)),
    //     address: stu.address,
    //     email: stu.email,
    //   })),
    // }));

    // var projectId = -1000;
    // const nonJoinedStudents = await axios.get<any[]>(
    //   `http://localhost:3000/findPartners2/studentsNotJoined?studentId=${studentId}`
    // );
    // const fetchedStudents = nonJoinedStudents.data.map((s) => ({
    //   projectId: projectId++,
    //   ...s,
    // }));
    // projectId = -1000;
    // const students: AvailableGroupsProjectItem[] = fetchedStudents.map(
    //   (stu) => ({
    //     id: projectId++,
    //     title: "",
    //     students: [
    //       {
    //         id: stu.studentId,
    //         fullName: stu.fullName,
    //         academicNumber: Number(String(stu.studentId).substring(0, 3)),
    //         address: stu.address,
    //         email: stu.email,
    //       },
    //     ],
    //   })
    // );

    // const allGroups = [...groups, ...students];

    setAvailableGroups([
      {
        id: 1,
        title: "",
        students: [
          {
            id: 11923604,
            fullName: "Jamal SaadEddin",
            academicNumber: 119,
            address: "Ramallah",
            email: "s11923604@stu.najah.edu",
          },
          {
            id: 11925066,
            fullName: "Obaida Aws",
            academicNumber: 119,
            address: "Aqraba",
            email: "s11925066@stu.najah.edu",
          },
          {
            id: 11944044,
            fullName: "Ahmad Majed",
            academicNumber: 119,
            address: "Jenin",
            email: "s11944044@stu.najah.edu",
          },
        ],
      },
      {
        id: 3,
        title: "",
        students: [
          {
            id: 11925011,
            fullName: "Momen Odeh",
            academicNumber: 119,
            address: "Nablus",
            email: "s11925011@stu.najah.edu",
          },
          {
            id: 11925022,
            fullName: "Abdallah Ads",
            academicNumber: 119,
            address: "Tulkarem",
            email: "s11925022@stu.najah.edu",
          },
        ],
      },
      {
        id: 5,
        title: "",
        students: [
          {
            id: 11911122,
            fullName: "Mustafa Irshaid",
            academicNumber: 119,
            address: "Nablus",
            email: "s11911122@stu.najah.edu",
          },
          {
            id: 11911133,
            fullName: "Aamer Qanadilo",
            academicNumber: 119,
            address: "Nablus",
            email: "s11911133@stu.najah.edu",
          },
        ],
      },
      {
        id: 6,
        title: "",
        students: [
          {
            id: 11925033,
            fullName: "Abas Surakji",
            academicNumber: 119,
            address: "Nablus",
            email: "s11925033@stu.najah.edu",
          },
          {
            id: 11925077,
            fullName: "NoorAldeen AbuShehadeh",
            academicNumber: 119,
            address: "Hwara",
            email: "s11925077@stu.najah.edu",
          },
        ],
      },
      {
        id: 8,
        title: "",
        students: [
          {
            id: 11922022,
            fullName: "Mohammad Zaid",
            academicNumber: 119,
            address: "Tulkarem",
            email: "s11922022@stu.najah.edu",
          },
        ],
      },
      {
        id: 12,
        title: "",
        students: [
          {
            id: 11825033,
            fullName: "Mohee Qwareeq",
            academicNumber: 118,
            address: "Tubas",
            email: "s11825033@stu.najah.edu",
          },
          {
            id: 11925044,
            fullName: "Omar Qaneer",
            academicNumber: 119,
            address: "Nablus",
            email: "s11925044@stu.najah.edu",
          },
        ],
      },
      {
        id: -1000,
        title: "",
        students: [
          {
            id: 11944045,
            fullName: "Ahmad Othman",
            academicNumber: 119,
            address: "Jenin",
            email: "s11944045@stu.najah.edu",
          },
        ],
      },
    ]);

    // Set all fetched students
    // const joinedStudents: Student[] = fetchedGroups.flat().map((s) => ({
    //   academicNumber: Number(String(s.studentId).substring(0, 3)),
    //   ...s,
    // }));

    // const aloneStudents = fetchedStudents.map((s) => ({
    //   academicNumber: Number(String(s.studentId).substring(0, 3)),
    //   ...s,
    // }));

    // const allStudents: Student[] = [...joinedStudents, ...aloneStudents];
    // console.log(allStudents);

    setAllStudents([
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11923604,
        firstName: "Jamal",
        lastName: "SaadEddin",
        email: "s11923604@stu.najah.edu",
        department: "Computer Engineering",
        address: "Ramallah",
        mobileNumber: "0599098598",
        fullName: "Jamal SaadEddin",
      },
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11925066,
        firstName: "Obaida",
        lastName: "Aws",
        email: "s11925066@stu.najah.edu",
        department: "Computer Engineering",
        address: "Aqraba",
        mobileNumber: "0595493758",
        fullName: "Obaida Aws",
      },
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11944044,
        firstName: "Ahmad",
        lastName: "Majed",
        email: "s11944044@stu.najah.edu",
        department: "Computer Engineering",
        address: "Jenin",
        mobileNumber: "05694444123",
        fullName: "Ahmad Majed",
      },
      {
        academicNumber: 119,
        projectId: 3,
        studentId: 11925011,
        firstName: "Momen",
        lastName: "Odeh",
        email: "s11925011@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0591112333",
        fullName: "Momen Odeh",
      },
      {
        academicNumber: 119,
        projectId: 3,
        studentId: 11925022,
        firstName: "Abdallah",
        lastName: "Ads",
        email: "s11925022@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tulkarem",
        mobileNumber: "0594251877",
        fullName: "Abdallah Ads",
      },
      {
        academicNumber: 119,
        projectId: 5,
        studentId: 11911122,
        firstName: "Mustafa",
        lastName: "Irshaid",
        email: "s11911122@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594658744",
        fullName: "Mustafa Irshaid",
      },
      {
        academicNumber: 119,
        projectId: 5,
        studentId: 11911133,
        firstName: "Aamer",
        lastName: "Qanadilo",
        email: "s11911133@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0598744123",
        fullName: "Aamer Qanadilo",
      },
      {
        academicNumber: 119,
        projectId: 6,
        studentId: 11925033,
        firstName: "Abas",
        lastName: "Surakji",
        email: "s11925033@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594656321",
        fullName: "Abas Surakji",
      },
      {
        academicNumber: 119,
        projectId: 6,
        studentId: 11925077,
        firstName: "NoorAldeen",
        lastName: "AbuShehadeh",
        email: "s11925077@stu.najah.edu",
        department: "Computer Engineering",
        address: "Hwara",
        mobileNumber: "0598845612",
        fullName: "NoorAldeen AbuShehadeh",
      },
      {
        academicNumber: 119,
        projectId: 8,
        studentId: 11922022,
        firstName: "Mohammad",
        lastName: "Zaid",
        email: "s11922022@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tulkarem",
        mobileNumber: "0596333112",
        fullName: "Mohammad Zaid",
      },
      {
        academicNumber: 118,
        projectId: 12,
        studentId: 11825033,
        firstName: "Mohee",
        lastName: "Qwareeq",
        email: "s11825033@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tubas",
        mobileNumber: "0595552223",
        fullName: "Mohee Qwareeq",
      },
      {
        academicNumber: 119,
        projectId: 12,
        studentId: 11925044,
        firstName: "Omar",
        lastName: "Qaneer",
        email: "s11925044@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594656980",
        fullName: "Omar Qaneer",
      },
      {
        academicNumber: 119,
        projectId: -1000,
        fullName: "Ahmad Othman",
        studentId: 11944045,
        firstName: "Ahmad",
        lastName: "Othman",
        email: "s11944045@stu.najah.edu",
        department: "Computer Engineering",
        address: "Jenin",
        mobileNumber: "05694444321",
      },
    ] as unknown as Student[]);
    setFilteredStudents([
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11923604,
        firstName: "Jamal",
        lastName: "SaadEddin",
        email: "s11923604@stu.najah.edu",
        department: "Computer Engineering",
        address: "Ramallah",
        mobileNumber: "0599098598",
        fullName: "Jamal SaadEddin",
      },
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11925066,
        firstName: "Obaida",
        lastName: "Aws",
        email: "s11925066@stu.najah.edu",
        department: "Computer Engineering",
        address: "Aqraba",
        mobileNumber: "0595493758",
        fullName: "Obaida Aws",
      },
      {
        academicNumber: 119,
        projectId: 1,
        studentId: 11944044,
        firstName: "Ahmad",
        lastName: "Majed",
        email: "s11944044@stu.najah.edu",
        department: "Computer Engineering",
        address: "Jenin",
        mobileNumber: "05694444123",
        fullName: "Ahmad Majed",
      },
      {
        academicNumber: 119,
        projectId: 3,
        studentId: 11925011,
        firstName: "Momen",
        lastName: "Odeh",
        email: "s11925011@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0591112333",
        fullName: "Momen Odeh",
      },
      {
        academicNumber: 119,
        projectId: 3,
        studentId: 11925022,
        firstName: "Abdallah",
        lastName: "Ads",
        email: "s11925022@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tulkarem",
        mobileNumber: "0594251877",
        fullName: "Abdallah Ads",
      },
      {
        academicNumber: 119,
        projectId: 5,
        studentId: 11911122,
        firstName: "Mustafa",
        lastName: "Irshaid",
        email: "s11911122@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594658744",
        fullName: "Mustafa Irshaid",
      },
      {
        academicNumber: 119,
        projectId: 5,
        studentId: 11911133,
        firstName: "Aamer",
        lastName: "Qanadilo",
        email: "s11911133@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0598744123",
        fullName: "Aamer Qanadilo",
      },
      {
        academicNumber: 119,
        projectId: 6,
        studentId: 11925033,
        firstName: "Abas",
        lastName: "Surakji",
        email: "s11925033@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594656321",
        fullName: "Abas Surakji",
      },
      {
        academicNumber: 119,
        projectId: 6,
        studentId: 11925077,
        firstName: "NoorAldeen",
        lastName: "AbuShehadeh",
        email: "s11925077@stu.najah.edu",
        department: "Computer Engineering",
        address: "Hwara",
        mobileNumber: "0598845612",
        fullName: "NoorAldeen AbuShehadeh",
      },
      {
        academicNumber: 119,
        projectId: 8,
        studentId: 11922022,
        firstName: "Mohammad",
        lastName: "Zaid",
        email: "s11922022@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tulkarem",
        mobileNumber: "0596333112",
        fullName: "Mohammad Zaid",
      },
      {
        academicNumber: 118,
        projectId: 12,
        studentId: 11825033,
        firstName: "Mohee",
        lastName: "Qwareeq",
        email: "s11825033@stu.najah.edu",
        department: "Computer Engineering",
        address: "Tubas",
        mobileNumber: "0595552223",
        fullName: "Mohee Qwareeq",
      },
      {
        academicNumber: 119,
        projectId: 12,
        studentId: 11925044,
        firstName: "Omar",
        lastName: "Qaneer",
        email: "s11925044@stu.najah.edu",
        department: "Computer Engineering",
        address: "Nablus",
        mobileNumber: "0594656980",
        fullName: "Omar Qaneer",
      },
      {
        academicNumber: 119,
        projectId: -1000,
        fullName: "Ahmad Othman",
        studentId: 11944045,
        firstName: "Ahmad",
        lastName: "Othman",
        email: "s11944045@stu.najah.edu",
        department: "Computer Engineering",
        address: "Jenin",
        mobileNumber: "05694444321",
      },
    ] as unknown as Student[]);

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

export const cancelPartnershipRequest = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const response = await axios.delete<{ message: string }>(
      `http://localhost:3000/deleteNotifications/notification?senderId=${senderId}&receiverId=${receiverId}&joinType=group`
    );

    return response.data.message;
  } catch (error) {
    console.error("Error canceling partnership request:", error);
    return {};
  }
};

export const getIsRequestingPartnership = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const response = await axios.get<{ message: string }>(
      `http://localhost:3000/viewJoinOrCancel/notification?senderId=${senderId}&receiverId=${receiverId}&joinType=group`
    );

    return response.data.message === "join" ? false : true;
  } catch (error) {
    console.error("Error getting button state:", error);
    return true;
  }
};
