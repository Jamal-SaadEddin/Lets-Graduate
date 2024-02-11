import axios from "axios";
import { AvailableSupervisor } from "../constants/availableSupervisors";
import { setAvailableSupervisors } from "../state-management/Student/availableSupervisorsStore";
import {
  setAllSupervisors,
  setFilteredSupervisors,
} from "../state-management/searchboxStore";

export const getAvailableSupervisors = async (studentId: number) => {
  try {
    // const response = await axios.get<any[]>(
    //   `http://localhost:3000/chooseSupervisor/supervisors?studentId=${studentId}`
    // );
    // const fetchedSupervisors: AvailableSupervisor[] = response.data.map(
    //   ({ doctorId, fullName, department, email }) => ({
    //     doctorId,
    //     fullName,
    //     department,
    //     email,
    //   })
    // );
    // console.log(fetchedSupervisors);

    setAllSupervisors([
      {
        doctorId: 1244,
        fullName: "Abdallah Rashed",
        department: "Computer Engineering",
        email: "rashed@najah.edu",
      },
      {
        doctorId: 1355,
        fullName: "Manar Qamhieh",
        department: "Computer Engineering",
        email: "qamhiee@najah.edu",
      },
      {
        doctorId: 1366,
        fullName: "Haya Samaneh",
        department: "Computer Engineering",
        email: "samanneh@najah.edu",
      },
    ]);
    setFilteredSupervisors([
      {
        doctorId: 1244,
        fullName: "Abdallah Rashed",
        department: "Computer Engineering",
        email: "rashed@najah.edu",
      },
      {
        doctorId: 1355,
        fullName: "Manar Qamhieh",
        department: "Computer Engineering",
        email: "qamhiee@najah.edu",
      },
      {
        doctorId: 1366,
        fullName: "Haya Samaneh",
        department: "Computer Engineering",
        email: "samanneh@najah.edu",
      },
    ]);
    setAvailableSupervisors([
      {
        doctorId: 1244,
        fullName: "Abdallah Rashed",
        department: "Computer Engineering",
        email: "rashed@najah.edu",
      },
      {
        doctorId: 1355,
        fullName: "Manar Qamhieh",
        department: "Computer Engineering",
        email: "qamhiee@najah.edu",
      },
      {
        doctorId: 1366,
        fullName: "Haya Samaneh",
        department: "Computer Engineering",
        email: "samanneh@najah.edu",
      },
    ]);

    return {};
  } catch (error) {
    console.error("Error fetching available supervisors:", error);
    return {};
  }
};

export const sendSupervisionRequest = async (body: Object) => {
  try {
    const response = await axios.post<{ message: string }>(
      `http://localhost:3000/createNotification/notification`,
      body
    );

    return response.data.message;
  } catch (error) {
    console.error("Error sending supervision request:", error);
    return {};
  }
};

export const cancelSupervisionRequest = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const response = await axios.delete<{ message: string }>(
      `http://localhost:3000/deleteNotifications/notification?senderId=${senderId}&receiverId=${receiverId}&joinType=supervisor`
    );

    return response.data.message;
  } catch (error) {
    console.error("Error canceling supervision request:", error);
    return {};
  }
};

export const getIsRequestingSupervision = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const response = await axios.get<{ message: string }>(
      `http://localhost:3000/viewJoinOrCancel/notification?senderId=${senderId}&receiverId=${receiverId}&joinType=supervisor`
    );

    return response.data.message === "join" ? false : true;
  } catch (error) {
    console.error("Error getting button state:", error);
    return true;
  }
};

export const hasSupervisor = async (studentId: number) => {
  try {
    const response = await axios.get<{ message: string }>(
      `http://localhost:3000/projects/hasSupervisor/${studentId}`
    );

    return response.data.message === "You have supervisor";
  } catch (error) {
    console.error("Error checking if the student has a supervisor:", error);
    return false;
  }
};
