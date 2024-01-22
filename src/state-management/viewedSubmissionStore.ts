import { create } from "zustand";
import { Submission } from "../constants/supervisorSubmissions";

interface ViewedSubmission {
  submission: Submission | null;
  setSubmission: (submission: Submission) => void;
}

const useViewedSubmissionStore = create<ViewedSubmission>((set) => ({
  submission: null,
  setSubmission: (submission) => set(() => ({ submission })),
}));

export default useViewedSubmissionStore;

export const setSubmission = (submission: Submission) =>
  useViewedSubmissionStore.getState().setSubmission(submission);
