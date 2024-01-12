export interface Submission {
  submissionId: number;
  projectId: number;
  type: "abstract";
  file: string;
  acceptStatus: "Pending" | "Accepted";
}

export const supervisorSubmissions: Submission[] = [
  {
    submissionId: 1,
    projectId: 55,
    type: "abstract",
    file: "src/assets/Let's Graduate -Abstract.pdf",
    acceptStatus: "Pending",
  },
  {
    submissionId: 3,
    projectId: 77,
    type: "abstract",
    file: "src/assets/Let's Graduate -Abstract.pdf",
    acceptStatus: "Accepted",
  },
];

export const projectsCommitteeSubmissions: Submission[] = [
  {
    submissionId: 4,
    projectId: 88,
    type: "abstract",
    file: "src/assets/Let's Graduate -Abstract.pdf",
    acceptStatus: "Pending",
  },
  {
    submissionId: 5,
    projectId: 99,
    type: "abstract",
    file: "src/assets/Let's Graduate -Abstract.pdf",
    acceptStatus: "Accepted",
  },
];
