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
    // const response = await axios.get<Submission>(
    //   `http://localhost:3000/submission/abstract?studentId=${studentId}`
    // );

    // const fetchedAbstract = response.data;

    // if (fetchedAbstract) {
    setSubmission({
      submissionId: 15,
      projectId: 1,
      type: "abstract",
      file: "/src/assets/abstracts/Let's Graduate -Abstract.pdf",
      acceptStatus: "Pending",
    });
    // }

    return {};
  } catch (error) {
    console.error("Error fetching Abstract:", error);
    return {};
  }
};

export const uploadNewAbstract = async (body: Object) => {
  try {
    const response = await axios.post<Submission>(
      `http://localhost:3000/submissions/submissionAdd`,
      body
    );

    const fetchedAbstract = response.data;
    if (fetchedAbstract) {
      setSubmission(fetchedAbstract);
    }

    return {};
  } catch (error) {
    console.error("Error uploading new Abstract:", error);
    return {};
  }
};

export const deleteAbstract = async (submissionId: number) => {
  try {
    const response = await axios.delete<{ message: string }>(
      `http://localhost:3000/submissions/submissionDelete?submissionId=${submissionId}`
    );
    const message = response.data.message;
    return message === "Account data deleted successfully";
  } catch (error) {
    console.error("Error deleting Abstract:", error);
    return false;
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

export const updateSubmissionAcceptStatus = async (projectId?: number) => {
  try {
    const response = await axios.put<{ message: string }>(
      `http://localhost:3000/abstractSubmissions/editStatus?projectId=${projectId}`
    );
    const message = response.data.message;
    return message === "Abstract accept status updated successfully"
      ? true
      : false;
  } catch (error) {
    console.error("Error updating accept status:", error);
    return false;
  }
};
