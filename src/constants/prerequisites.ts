export interface Prerequisite {
  prerequisiteId?: number;
  department?: string;
  projectType?: string;
  content: string;
  answer?: boolean;
}

export const studentPrerequisites: Prerequisite[] = [
  {
    prerequisiteId: 1,
    content: "Did you finish 120h of your university courses?",
    answer: false,
  },
  {
    prerequisiteId: 2,
    content: "Did you finish microcontrollers course?",
    answer: false,
  },
  {
    prerequisiteId: 3,
    content: "Did you finish software engineering course?",
    answer: false,
  },
  {
    prerequisiteId: 4,
    content: "Did you finish microcontroller lab?",
    answer: false,
  },
];

export const supervisorPrerequisites: Prerequisite[] = [
  {
    prerequisiteId: 1,
    content: "Did you finish 120h of your university courses?",
  },
  {
    prerequisiteId: 2,
    content: "Did you finish microcontrollers course?",
  },
  {
    prerequisiteId: 3,
    content: "Did you finish software engineering course?",
  },
  {
    prerequisiteId: 4,
    content: "Did you finish microcontroller lab?",
  },
];
