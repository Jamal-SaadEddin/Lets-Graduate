import axios from "axios";
import { Submission } from "../constants/supervisorSubmissions";
import { setSubmission } from "../state-management/viewedSubmissionStore";

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
