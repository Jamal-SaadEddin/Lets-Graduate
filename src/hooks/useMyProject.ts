import axios from "axios";
import { MyProjectInfo, Partner, Supervisor } from "../constants/myProject";
import { setMyProjectInfo } from "../state-management/Student/myProjectInfoStore";
import { setPartners } from "../state-management/Student/partnersStore";
import { setSupervisors } from "../state-management/Student/supervisorsStore";

export const getMyPartners = async (studentId: number) => {
  try {
    // const response = await axios.get<Partner[]>(
    //   `http://localhost:3000/students/findMyPartners?studentId=${studentId}`
    // );
    // const fetchedPartners = response.data;
    setPartners([
      {
        fullName: "Jamal SaadEddin",
        id: 11923604,
        department: "Computer Engineering",
        email: "s11923604@stu.najah.edu",
        mobileNumber: "0599098598",
        address: "Ramallah",
      },
      {
        fullName: "Obaida Aws",
        id: 11925066,
        department: "Computer Engineering",
        email: "s11925066@stu.najah.edu",
        mobileNumber: "0595493758",
        address: "Aqraba",
      },
      {
        fullName: "Ahmad Majed",
        id: 11944044,
        department: "Computer Engineering",
        email: "s11944044@stu.najah.edu",
        mobileNumber: "05694444123",
        address: "Jenin",
      },
      {
        fullName: "Mustafa Irshaid",
        id: 11911122,
        department: "Computer Engineering",
        email: "s11911122@stu.najah.edu",
        mobileNumber: "0594658744",
        address: "Nablus",
      },
      {
        fullName: "Aamer Qanadilo",
        id: 11911133,
        department: "Computer Engineering",
        email: "s11911133@stu.najah.edu",
        mobileNumber: "0598744123",
        address: "Nablus",
      },
    ]);

    return {};
  } catch (error) {
    console.error("Error fetching Partners:", error);
    return {};
  }
};

export const getMySupervisors = async (studentId: number) => {
  try {
    // const response = await axios.get<Supervisor[]>(
    //   `http://localhost:3000/doctors/findMySupervisorOrSupervisors?studentId=${studentId}`
    // );
    // const fetchedSupervisors = response.data;
    setSupervisors([
      {
        fullName: "Manar Qamhieh",
        department: "Computer Engineering",
        email: "qamhiee@najah.edu",
        mobileNumber: "0595493759",
      },
      {
        fullName: "Raed Qadi",
        department: "Computer Engineering",
        email: "qadi@najah.edu",
        mobileNumber: "0599998877",
      },
    ]);

    return {};
  } catch (error) {
    console.error("Error fetching Supervisors:", error);
    return {};
  }
};

export const getMyProjectInfo = async (studentId: number) => {
  try {
    // const response = await axios.get<MyProjectInfo>(
    //   `http://localhost:3000/projects/fetchProject/${studentId}`
    // );
    // const fetchedProject = response.data;
    setMyProjectInfo({
      projectTitle: "Mohito Maker Machine",
      projectType: "gp2",
    });

    return {};
  } catch (error) {
    console.error("Error fetching My Project Info:", error);
    return {};
  }
};

export const updateMyProjectTitle = async (
  studentId: number,
  projectTitle: string
) => {
  try {
    const response = await axios.put<{ projectTitle: string }>(
      `http://localhost:3000/projects/editTitle/${studentId}`,
      { projectTitle }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating project title:", error);
    return {};
  }
};
