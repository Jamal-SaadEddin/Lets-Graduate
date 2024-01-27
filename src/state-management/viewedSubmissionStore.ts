import { create } from "zustand";
import { Submission } from "../constants/supervisorSubmissions";

interface ViewedSubmission {
  submission: Submission | null;
  setSubmission: (submission: Submission) => void;
  projectTitle: string;
  setProjectTitle: (projectTitle: string) => void;

  submissions: Submission[];
  setSubmissions: (submissions: Submission[]) => void;
}

const useViewedSubmissionStore = create<ViewedSubmission>((set) => ({
  submission: null,
  setSubmission: (submission) => set(() => ({ submission })),
  projectTitle: "",
  setProjectTitle: (projectTitle) => set(() => ({ projectTitle })),

  submissions: [],
  setSubmissions: (submissions) => set(() => ({ submissions })),
}));

export default useViewedSubmissionStore;

export const setSubmission = (submission: Submission) =>
  useViewedSubmissionStore.getState().setSubmission(submission);

export const setSubmissions = (submissions: Submission[]) =>
  useViewedSubmissionStore.getState().setSubmissions(submissions);
