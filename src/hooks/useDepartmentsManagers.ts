import axios from "axios";
import { AdminDepartment } from "../constants/departments";
import { setAdminDepartments } from "../state-management/Admin/adminSettingsStore";

export const getAllDepartmentsManagersData = async () => {
  try {
    const response = await axios.get<AdminDepartment[]>(
      `http://localhost:3000/allDepartments/departments`
    );
    const fetchedDepartments = response.data;
    setAdminDepartments(fetchedDepartments);

    return fetchedDepartments;
  } catch (error) {
    console.error("Error fetching all departments managers data:", error);
  }
};

export const updateDepartmentManager = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/chooseDepartmentManager/departmentManager`,
      body
    );
    const message = response.data.message;

    return message === "New manager updated successfully";
  } catch (error) {
    console.error("Error updating department manager:", error);
    return false;
  }
};
