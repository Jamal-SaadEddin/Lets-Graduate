import { create } from "zustand";
import {
  Submission,
  supervisorSubmissions,
} from "../constants/supervisorSubmissions";

interface ViewedSubmission {
  submission: Submission;
  setSubmission: (submission: Submission) => void;
}

const useViewedSubmissionStore = create<ViewedSubmission>((set) => ({
  submission: supervisorSubmissions[0],
  setSubmission: (submission) => set(() => ({ submission })),
}));

export default useViewedSubmissionStore;
