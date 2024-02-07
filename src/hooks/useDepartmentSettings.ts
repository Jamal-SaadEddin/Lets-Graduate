import axios from "axios";
import { Department } from "../constants/departments";
import {
  setDepartmentSettings,
  setOldSettings,
} from "../state-management/Doctor/departmentSettingsStore";

export const getDepartmentSettings = async (doctorId: number) => {
  try {
    const response = await axios.get<Department>(
      `http://localhost:3000/departmentSettings/settings?doctorId=${doctorId}`
    );
    const fetchedDepartment = response.data;
    setDepartmentSettings(fetchedDepartment);
    setOldSettings(fetchedDepartment);

    return fetchedDepartment;
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
