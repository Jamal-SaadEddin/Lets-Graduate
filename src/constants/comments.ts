export interface AbstractComment {
  commentId: number;
  doctorId: number;
  projectId: number;
  content: string;
  dateCreated: string;
  sender: string;
}

export const comments: AbstractComment[] = [
  {
    commentId: 1,
    doctorId: 1,
    projectId: 1,
    content: "Please provide more features",
    dateCreated: "5h",
    sender: "Hanaal Abuzant",
  },
  {
    commentId: 2,
    doctorId: 1,
    projectId: 1,
    content:
      "Guys, you need to specify what hardware components you are intending to use, provide more details...",
    dateCreated: "19h",
    sender: "Projects Committee",
  },
  {
    commentId: 3,
    doctorId: 1,
    projectId: 1,
    content: "Please follow abstract template rules....",
    dateCreated: "2 days",
    sender: "Projects Committee",
  },
];
