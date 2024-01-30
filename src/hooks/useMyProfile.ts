import axios from "axios";
import { DoctorInfo, StudentInfo } from "../constants/myProfile";

export const getStudentProfileInfo = async (studentId: number) => {
  try {
    const response = await axios.get<StudentInfo>(
      `http://localhost:3000/students/viewProfile?studentId=${studentId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting profile info:", error);
  }
};

export const getDoctorProfileInfo = async (doctorId: number) => {
  try {
    const response = await axios.get<DoctorInfo>(
      `http://localhost:3000/doctors/viewDoctorInfo?doctorId=${doctorId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting profile info:", error);
  }
};

export const updateStudentProfileInfo = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/students/updateProfile`,
      body
    );

    return response.data.message === "Student data updated successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error updating profile info:", error);
    return false;
  }
};

export const updateDoctorProfileInfo = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/doctors/updateProfile`,
      body
    );

    return response.data.message === "Doctor data updated successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error updating profile info:", error);
    return false;
  }
};

export const updatePassword = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/users/updatePassword`,
      body
    );

    return response.data.message === "Password updated successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error updating password:", error);
    return false;
  }
};

export const deleteAccount = async (userId: number) => {
  try {
    const response = await axios.delete<{ message: string }>(
      `http://localhost:3000/deleteAccount/account?userId=${userId}`
    );

    return response.data.message === "Account data deleted successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error in deleting account:", error);
    return false;
  }
};
