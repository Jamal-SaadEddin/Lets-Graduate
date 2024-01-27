import axios from "axios";
import { SupervisedProjectsProjectItem } from "../constants/availableGroups";
import { Submission } from "../constants/supervisorSubmissions";
import { setMyEvaluatingGroups } from "../state-management/Doctor/myGroupsStore";
import {
  setSubmission,
  setSubmissions,
} from "../state-management/viewedSubmissionStore";

export const getAbstractSubmission = async (studentId: number) => {
  try {
    const response = await axios.get<Submission>(
      `http://localhost:3000/submission/abstract?studentId=${studentId}`
    );

    const fetchedAbstract = response.data;
    if (fetchedAbstract) {
      setSubmission(fetchedAbstract);
    }

    return {};
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return {};
  }
};

export const getSupervisorSubmissions = async (doctorId: number) => {
  try {
    const response = await axios.get<Submission[]>(
      `http://localhost:3000/abstractSubmissions/submissions?doctorId=${doctorId}`
    );

    const fetchedAbstracts = response.data;
    setSubmissions(fetchedAbstracts);

    return {};
  } catch (error) {
    console.error("Error fetching Abstracts:", error);
    return {};
  }
};

export const getMyEvaluatingGroups = async (doctorId: number) => {
  try {
    const response = await axios.get<SupervisedProjectsProjectItem[]>(
      `http://localhost:3000/evaluatingsDetails/submissions?doctorId=${doctorId}`
    );
    const fetchedGroups = response.data.map((group) => ({
      ...group,
      students: group.students.map(
        ({ fullName, studentId, address, email, department }) => ({
          fullName,
          id: studentId as number,
          address,
          email,
          department,
        })
      ),
    }));
    setMyEvaluatingGroups(fetchedGroups);
    return fetchedGroups;
  } catch (error) {
    console.error("Error fetching my evaluating groups:", error);
  }
};
