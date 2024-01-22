import axios from "axios";
import { AvailableSupervisor } from "../constants/availableSupervisors";
import { setAvailableSupervisors } from "../state-management/availableSupervisorsStore";
import {
  setAllSupervisors,
  setFilteredSupervisors,
} from "../state-management/searchboxStore";

export const getAvailableSupervisors = async (studentId: number) => {
  try {
    const response = await axios.get<any[]>(
      `http://localhost:3000/chooseSupervisor/supervisors?studentId=${studentId}`
    );
    const fetchedSupervisors: AvailableSupervisor[] = response.data.map(
      ({ doctorId, fullName, department, email }) => ({
        doctorId,
        fullName,
        department,
        email,
      })
    );

    setAllSupervisors(fetchedSupervisors);
    setFilteredSupervisors(fetchedSupervisors);
    setAvailableSupervisors(fetchedSupervisors);

    return {};
  } catch (error) {
    console.error("Error fetching Prerequisites:", error);
    return {};
  }
};
