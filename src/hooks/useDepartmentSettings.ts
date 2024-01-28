import axios from "axios";
import { Department } from "../constants/departments";
import { setDepartmentSettings } from "../state-management/Doctor/departmentSettingsStore";

export const getDepartmentSettings = async (doctorId: number) => {
  try {
    const response = await axios.get<Department>(
      `http://localhost:3000/departmentSettings/settings?doctorId=${doctorId}`
    );
    const fetchedDepartment = response.data;
    setDepartmentSettings(fetchedDepartment);

    return {};
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return {};
  }
};
