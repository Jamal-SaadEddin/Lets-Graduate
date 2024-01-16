export interface Prerequisite {
  id: number;
  content: string;
}

export interface StudentPrerequisite extends Prerequisite {
  answer: boolean;
}

export const studentPrerequisites: StudentPrerequisite[] = [
  {
    id: 1,
    content: "Did you finish 120h of your university courses?",
    answer: false,
  },
  {
    id: 2,
    content: "Did you finish microcontrollers course?",
    answer: false,
  },
  {
    id: 3,
    content: "Did you finish software engineering course?",
    answer: false,
  },
  {
    id: 4,
    content: "Did you finish microcontroller lab?",
    answer: false,
  },
];

export const supervisorPrerequisites: Prerequisite[] = [
  {
    id: 1,
    content: "Did you finish 120h of your university courses?",
  },
  {
    id: 2,
    content: "Did you finish microcontrollers course?",
  },
  {
    id: 3,
    content: "Did you finish software engineering course?",
  },
  {
    id: 4,
    content: "Did you finish microcontroller lab?",
  },
];
