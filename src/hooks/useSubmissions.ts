import axios from "axios";
import { Submission } from "../constants/supervisorSubmissions";
import { setMyEvaluatingGroups } from "../state-management/Doctor/myGroupsStore";
import {
  setSubmission,
  setSubmissions,
} from "../state-management/viewedSubmissionStore";
import submissionFile from "/src/assets/abstracts/Let's Graduate -Abstract.pdf";

export const getAbstractSubmission = async (_studentId: number) => {
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
      acceptStatus: "Pending",
      file: submissionFile,
    } as Submission);
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

export const getSupervisorSubmissions = async (_doctorId: number) => {
  try {
    // const response = await axios.get<Submission[]>(
    //   `http://localhost:3000/abstractSubmissions/submissions?doctorId=${doctorId}`
    // );

    // const fetchedAbstracts = response.data;

    setSubmissions([
      {
        submissionId: 15,
        projectId: 1,
        type: "abstract",
        file: submissionFile,
        acceptStatus: "Pending",
        operation: "viewing",
      },
      {
        submissionId: 2,
        projectId: 3,
        type: "abstract",
        file: submissionFile,
        acceptStatus: "Pending",
        operation: "viewing",
      },
      {
        submissionId: 3,
        projectId: 4,
        type: "abstract",
        file: submissionFile,
        acceptStatus: "Pending",
        operation: "viewing",
      },
      {
        submissionId: 4,
        projectId: 5,
        type: "abstract",
        file: submissionFile,
        acceptStatus: "Accepted",
        operation: "evaluating",
      },
      {
        submissionId: 5,
        projectId: 6,
        type: "abstract",
        file: submissionFile,
        acceptStatus: "Pending",
        operation: "evaluating",
      },
    ]);

    return {};
  } catch (error) {
    console.error("Error fetching Abstracts:", error);
    return {};
  }
};

export const getMyEvaluatingGroups = async (_doctorId: number) => {
  try {
    // const response = await axios.get<SupervisedProjectsProjectItem[]>(
    //   `http://localhost:3000/evaluatingsDetails/submissions?doctorId=${doctorId}`
    // );
    // const fetchedGroups = response.data.map((group) => ({
    //   ...group,
    //   students: group.students.map(
    //     ({ fullName, studentId, address, email, department }) => ({
    //       fullName,
    //       id: studentId as number,
    //       address,
    //       email,
    //       department,
    //     })
    //   ),
    // }));

    setMyEvaluatingGroups([
      {
        id: 5,
        title: "Medical System",
        students: [
          {
            fullName: "Mustafa Irshaid",
            id: 11911122,
            address: "Nablus",
            email: "s11911122@stu.najah.edu",
            department: "Computer Engineering",
          },
          {
            fullName: "Aamer Qanadilo",
            id: 11911133,
            address: "Nablus",
            email: "s11911133@stu.najah.edu",
            department: "Computer Engineering",
          },
        ],
      },
      {
        id: 6,
        title: "E-Commerce System",
        students: [
          {
            fullName: "Abas Surakji",
            id: 11925033,
            address: "Nablus",
            email: "s11925033@stu.najah.edu",
            department: "Computer Engineering",
          },
          {
            fullName: "NoorAldeen AbuShehadeh",
            id: 11925077,
            address: "Hwara",
            email: "s11925077@stu.najah.edu",
            department: "Computer Engineering",
          },
        ],
      },
    ]);
    return [
      {
        id: 5,
        title: "Medical System",
        students: [
          {
            fullName: "Mustafa Irshaid",
            id: 11911122,
            address: "Nablus",
            email: "s11911122@stu.najah.edu",
            department: "Computer Engineering",
          },
          {
            fullName: "Aamer Qanadilo",
            id: 11911133,
            address: "Nablus",
            email: "s11911133@stu.najah.edu",
            department: "Computer Engineering",
          },
        ],
      },
      {
        id: 6,
        title: "E-Commerce System",
        students: [
          {
            fullName: "Abas Surakji",
            id: 11925033,
            address: "Nablus",
            email: "s11925033@stu.najah.edu",
            department: "Computer Engineering",
          },
          {
            fullName: "NoorAldeen AbuShehadeh",
            id: 11925077,
            address: "Hwara",
            email: "s11925077@stu.najah.edu",
            department: "Computer Engineering",
          },
        ],
      },
    ];
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
