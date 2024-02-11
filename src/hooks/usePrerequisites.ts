import axios from "axios";
import { Prerequisite } from "../constants/prerequisites";
import { setPrerequisites } from "../state-management/prerequisitesStore";

export const getPrerequisites = async (
  _department: string,
  projectType: string
) => {
  try {
    // const response = await axios.get<Prerequisite[]>(
    //   `http://localhost:3000/prerequisites/filter?department=${department}&projectType=${projectType}`
    // );
    if (projectType === "gp1") {
      const fetchedPrerequisites = [
        {
          prerequisiteId: 5,
          department: "Computer Engineering",
          projectType: "gp1",
          content: "Do you finish Web course?",
        },
        {
          prerequisiteId: 6,
          department: "Computer Engineering",
          projectType: "gp1",
          content: "Do you finish Software Engineering Course?",
        },
        {
          prerequisiteId: 7,
          department: "Computer Engineering",
          projectType: "gp1",
          content: "Do you finish Database course?",
        },
        {
          prerequisiteId: 8,
          department: "Computer Engineering",
          projectType: "gp1",
          content: "Do you finish Data Structure course?",
        },
      ];
      setPrerequisites(fetchedPrerequisites);
    } else if (projectType === "gp2") {
      const fetchedPrerequisites = [
        {
          prerequisiteId: 2,
          department: "Computer Engineering",
          projectType: "gp2",
          content: "Do you finished Microcontrollers course?",
        },
        {
          prerequisiteId: 3,
          department: "Computer Engineering",
          projectType: "gp2",
          content: "Do you finish wireless lab?",
        },
        {
          prerequisiteId: 4,
          department: "Computer Engineering",
          projectType: "gp2",
          content: "Do you finished Critical thinking course?",
        },
      ];
      setPrerequisites(fetchedPrerequisites);
    }

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
