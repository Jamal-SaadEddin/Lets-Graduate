import axios from "axios";
import { StudentInfo } from "../constants/myProfile";

export const getProfileInfo = async (studentId: number) => {
  try {
    const response = await axios.get<StudentInfo>(
      `http://localhost:3000/students/viewProfile?studentId=${studentId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting profile info:", error);
  }
};
