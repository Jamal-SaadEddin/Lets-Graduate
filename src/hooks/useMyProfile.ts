import axios from "axios";

export const getStudentProfileInfo = async (_studentId: number) => {
  try {
    // const response = await axios.get<StudentInfo>(
    //   `http://localhost:3000/students/viewProfile?studentId=${studentId}`
    // );

    return {
      id: 11923604,
      firstName: "Jamal",
      lastName: "SaadEddin",
      fullName: "Jamal SaadEddin",
      department: "Computer Engineering",
      address: "Ramallah",
      email: "s11923604@stu.najah.edu",
      mobileNumber: "0599098598",
      gp1State: "in progress",
      gpState: "passed",
      projectType: "gp1",
      isWithGroup: true,
    };
  } catch (error) {
    console.error("Error getting profile info:", error);
  }
};

export const getDoctorProfileInfo = async (_doctorId: number) => {
  try {
    // const response = await axios.get<DoctorInfo>(
    //   `http://localhost:3000/doctors/viewDoctorInfo?doctorId=${doctorId}`
    // );

    return {
      id: 1355,
      firstName: "Manar",
      lastName: "Qamhieh",
      fullName: "Manar Qamhieh",
      department: "Computer Engineering",
      address: "Qalqilya",
      email: "qamhiee@najah.edu",
      mobileNumber: "0595493759",
    };
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
