import axios from "axios";
import { MyProjectInfo, Partner, Supervisor } from "../constants/myProject";
import { setMyProjectInfo } from "../state-management/Student/myProjectInfoStore";
import { setPartners } from "../state-management/Student/partnersStore";
import { setSupervisors } from "../state-management/Student/supervisorsStore";

export const getMyPartners = async (studentId: number) => {
  try {
    const response = await axios.get<Partner[]>(
      `http://localhost:3000/students/findMyPartners?studentId=${studentId}`
    );
    const fetchedPartners = response.data;
    setPartners(
      fetchedPartners.map(
        ({
          fullName,
          studentId,
          department,
          email,
          mobileNumber,
          address,
        }) => ({
          fullName,
          id: studentId as number,
          department,
          email,
          mobileNumber,
          address,
        })
      )
    );

    return {};
  } catch (error) {
    console.error("Error fetching Partners:", error);
    return {};
  }
};

export const getMySupervisors = async (studentId: number) => {
  try {
    const response = await axios.get<Supervisor[]>(
      `http://localhost:3000/doctors/findMySupervisorOrSupervisors?studentId=${studentId}`
    );
    const fetchedSupervisors = response.data;
    setSupervisors(
      fetchedSupervisors.map(
        ({ fullName, department, email, mobileNumber }) => ({
          fullName,
          department,
          email,
          mobileNumber,
        })
      )
    );

    return {};
  } catch (error) {
    console.error("Error fetching Supervisors:", error);
    return {};
  }
};

export const getMyProjectInfo = async (studentId: number) => {
  try {
    const response = await axios.get<MyProjectInfo>(
      `http://localhost:3000/projects/fetchProject/${studentId}`
    );
    const fetchedProject = response.data;
    setMyProjectInfo(fetchedProject);

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
