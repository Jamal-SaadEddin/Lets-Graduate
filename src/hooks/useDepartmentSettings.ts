import axios from "axios";
import { Department } from "../constants/departments";
import {
  setDepartmentSettings,
  setOldSettings,
} from "../state-management/Doctor/departmentSettingsStore";

export const getDepartmentSettings = async (doctorId: number) => {
  try {
    // const response = await axios.get<Department>(
    //   `http://localhost:3000/departmentSettings/settings?doctorId=${doctorId}`
    // );
    // const fetchedDepartment = response.data;

    setDepartmentSettings({
      departmentName: "Computer Engineering",
      maxNoOfStuPerProj: 4,
      maxNoOfProjPerDoct: 5,
      maxNoOfStuPerDoct: 10,
      currentPeriod: "registration-to-supervisors",
      noOfRegisteredStudents: 23,
      noOfSupervisors: 3,
      noOfProjectsCommitteeMembers: 2,
      supervisingDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
      ],
      projectsCommitteeMembers: ["Manar Qamhieh - 1355", "Samer Arandi - 1495"],
      allDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
        "Raed Qadi - 1377",
        "Samer Arandi - 1495",
      ],
    });
    setOldSettings({
      departmentName: "Computer Engineering",
      maxNoOfStuPerProj: 4,
      maxNoOfProjPerDoct: 5,
      maxNoOfStuPerDoct: 10,
      currentPeriod: "registration-to-supervisors",
      noOfRegisteredStudents: 23,
      noOfSupervisors: 3,
      noOfProjectsCommitteeMembers: 2,
      supervisingDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
      ],
      projectsCommitteeMembers: ["Manar Qamhieh - 1355", "Samer Arandi - 1495"],
      allDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
        "Raed Qadi - 1377",
        "Samer Arandi - 1495",
      ],
    });

    return {
      departmentName: "Computer Engineering",
      maxNoOfStuPerProj: 4,
      maxNoOfProjPerDoct: 5,
      maxNoOfStuPerDoct: 10,
      currentPeriod: "registration-to-supervisors",
      noOfRegisteredStudents: 23,
      noOfSupervisors: 3,
      noOfProjectsCommitteeMembers: 2,
      supervisingDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
      ],
      projectsCommitteeMembers: ["Manar Qamhieh - 1355", "Samer Arandi - 1495"],
      allDoctors: [
        "Abdallah Rashed - 1244",
        "Manar Qamhieh - 1355",
        "Haya Samaneh - 1366",
        "Raed Qadi - 1377",
        "Samer Arandi - 1495",
      ],
    };
  } catch (error) {
    console.error("Error fetching Department settings:", error);
  }
};

export const updateDepartmentSettings = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/departmentSettings/editSettings`,
      body
    );
    const message = response.data.message;

    return message === "Department settings updated successfully";
  } catch (error) {
    console.error("Error updating Department settings:", error);
    return false;
  }
};
