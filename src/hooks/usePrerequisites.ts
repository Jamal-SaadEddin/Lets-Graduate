import axios from "axios";
import { Prerequisite } from "../constants/prerequisites";
import { setPrerequisites } from "../state-management/prerequisitesStore";

export const getPrerequisites = async (
  department: string,
  projectType: string
) => {
  try {
    const response = await axios.get<Prerequisite[]>(
      `http://localhost:3000/prerequisites/filter?department=${department}&projectType=${projectType}`
    );
    const fetchedPrerequisites = response.data;
    setPrerequisites(fetchedPrerequisites);

    return {};
  } catch (error) {
    console.error("Error fetching Prerequisites:", error);
    return {};
  }
};

export const addPrerequisite = async (prerequisite: Prerequisite) => {
  try {
    const response = await axios.post<Prerequisite>(
      "http://localhost:3000/prerequisites/add",
      prerequisite
    );

    return response.data;
  } catch (error) {
    console.error("Error adding prerequisite:", error);
    return {};
  }
};

export const deletePrerequisite = async (prerequisiteId: number) => {
  try {
    const response = await axios.delete<Prerequisite>(
      `http://localhost:3000/prerequisites/delete?prerequisiteId=${prerequisiteId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting prerequisite:", error);
    return {};
  }
};

export const registerProject = async (body: Object) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/registerProject/project`,
      body
    );

    return response.data.message === "Student project data updated successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error registering project:", error);
    return false;
  }
};
